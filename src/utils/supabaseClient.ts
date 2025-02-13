import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

/**
 * Creates a Supabase client instance using environment variables.
 *
 * @returns {SupabaseClient} - The Supabase client instance.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
