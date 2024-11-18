import { PrismaClient } from '@prisma/client';

import { supabaseClient } from '@/lib/supabase/client';

const prisma = new PrismaClient();

/**
 * Sign in with email and password
 * @param email
 */
export async function signInWithEmail(email: string) {
  const { data, error } = await supabaseClient.auth.signInWithOtp({
    email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: process.env.NEXT_PUBLIC_URL,
    },
  });
  if (error) throw error;
  return data;
}

/**
 * Verify Email OTP
 * @param email
 * @param otp
 */
export async function verifyEmailOTP(email: string, otp: string) {
  const {
    data: { session },
    error,
  } = await supabaseClient.auth.verifyOtp({
    email,
    token: otp,
    type: 'email',
  });
  if (error) throw error;
  return session;
}
