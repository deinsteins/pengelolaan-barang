import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ebizuroruhdqytorsvgt.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViaXp1cm9ydWhkcXl0b3Jzdmd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwNTc3MjMsImV4cCI6MTk5OTYzMzcyM30.WjjHtnu7cAwy6cejk7bAgpvdQZY-tMMdOopAP0uWpNU";

export const supabase = createClient(supabaseUrl, supabaseKey);
