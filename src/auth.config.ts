import LinkedIn from "next-auth/providers/linkedin";
import Google from "next-auth/providers/google";
import Resend from "@auth/core/providers/resend";

import { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import { sendCustomVerificationRequest } from "@/lib/email/sendCustomVerificationRequest";

import {
  AUTH_ERROR_ROUTE,
  AUTH_SIGN_IN_ROUTE,
  AUTH_VERIFY_REQUEST_ROUTE,
} from "@/routes";
import { getUserByEmail } from "@/services/users";

export default {
  providers: [
    Google,
    LinkedIn,
    Resend({
      server: process.env.AUTH_RESEND_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({ identifier, url, provider, theme }) {
        sendCustomVerificationRequest({
          identifier,
          url,
          provider,
          companyName: process.env.NEXT_PUBLIC_COMPANY_NAME,
        });
      },
    }),
  ],
  callbacks: {
    signIn: async ({ user, account, email }) => {
      if (user && user.email) {
        const existingUser = await getUserByEmail(user.email);
        if (existingUser) {
          return true;
        }
      } else {
        return "/auth/error?error=Email not found.";
      }
    },
    jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        // User is available during sign-in
        token.idToken = user.id;
      }
      return token;
    },
    session({ session, token }: { session: Session; token: JWT }) {
      session.user.id = token.idToken as string;
      return session;
    },
  },
  pages: {
    signIn: AUTH_SIGN_IN_ROUTE,
    verifyRequest: AUTH_VERIFY_REQUEST_ROUTE,
    error: AUTH_ERROR_ROUTE,
  },
} satisfies NextAuthConfig;
