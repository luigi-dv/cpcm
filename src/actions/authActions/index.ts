"use server";

import { signIn } from "@/auth";

export async function signInAction(email: string) {
  const formData = new FormData();
  formData.append("email", email);
  await signIn("resend", formData);
}
