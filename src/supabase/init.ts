import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Use require instead of import for dotenv
require('dotenv').config();

const supabaseUrl = process.env.SUPABASE_PROJECT_URL as string;
const supabaseApiKey = process.env.SUPABASE_API_KEY as string;

// Create the Supabase client
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseApiKey);
