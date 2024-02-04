import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://wahxmjacrbklrveozznp.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

export const supabase = createClient(SUPABASE_URL, supabaseKey);
