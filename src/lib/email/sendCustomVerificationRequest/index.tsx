"use server";

import { EmailConfig } from "@auth/core/providers";
import { sendEmail } from "@/actions/emailActions";

import { VerifyIdentityEmail } from "@/emails/VerifyIdentityEmail";

export async function sendCustomVerificationRequest(params: {
  identifier: string;
  url: string;
  provider: EmailConfig;
}) {
  const { identifier: to, url } = params;
  const { host } = new URL(url);
  await sendEmail({
    to: [to],
    subject: "Sign in to your account",
    react: VerifyIdentityEmail({ url, host }),
    text: `Sign in to your account by clicking the following link: ${url}`,
  });
}
