'use server';

import { redirect } from 'next/navigation';
import { Provider } from '@supabase/auth-js';
import { AUTH_CALLBACK_ROUTE, AUTH_ERROR_ROUTE } from '@/routes';

import { createClient } from '@/lib/supabase/server';

export async function providerLogin(formData: FormData) {
  const form = {
    provider: formData.get('provider') as Provider,
  };

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: form.provider,
    options: {
      redirectTo: process.env.NEXT_PUBLIC_SITE_URL + AUTH_CALLBACK_ROUTE,
    },
  });

  if (error) {
    redirect(AUTH_ERROR_ROUTE);
  }

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }
}

export async function emailLogin(formData: FormData) {
  const supabase = await createClient();

  const data = {
    email: formData.get('email') as string,
  };

  const { error } = await supabase.auth.signInWithOtp({
    email: data.email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      shouldCreateUser: false,
      emailRedirectTo: process.env.NEXT_PUBLIC_SITE_URL,
    },
  });

  if (error) {
    redirect(AUTH_ERROR_ROUTE);
  }
}
