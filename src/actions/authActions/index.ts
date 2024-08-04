'use server';

import { signIn } from '@/auth';

/**
 * Sign in with email.
 */
export async function signInAction(formData: FormData) {
  await signIn('resend', formData);
}

/**
 * Sign in with Google.
 */
export async function signInWithGoogleAction() {
  await signIn('google', { redirectTo: '/' });
}

/**
 * Sign in with LinkedIn.
 */
export async function signInWithLinkedInAction() {
  await signIn('linkedin', { redirectTo: '/' });
}
