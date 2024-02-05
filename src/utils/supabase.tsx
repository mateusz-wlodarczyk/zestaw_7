import { createClient } from "@supabase/supabase-js";

const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;

export const supabase = createClient(supabaseUrl, supabaseKey);
