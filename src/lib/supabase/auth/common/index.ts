import { createClient } from '@/lib/supabase/server';

/**
 * Sign out the current user
 * @returns
 */
export async function signOut() {
  const supabaseClient = await createClient();
  const { error } = await supabaseClient.auth.signOut();
  if (error) {
    console.log('Error signing out:', error.message);
    throw error;
  }
}
