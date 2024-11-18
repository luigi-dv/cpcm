'use client';

import { createBrowserClient } from '@supabase/ssr';
import { SupabaseClient } from '@supabase/supabase-js';

const globalForPrisma = global as unknown as { supabase: SupabaseClient };

export const supabaseClient =
  globalForPrisma.supabase ||
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

if (process.env.NODE_ENV !== 'production') globalForPrisma.supabase = supabaseClient;
