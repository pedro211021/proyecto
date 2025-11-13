// src/supabase.js
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://sluejksmpvhgznsyiizv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsdWVqa3NtcHZoZ3puc3lpaXp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDg4NjEsImV4cCI6MjA3ODAyNDg2MX0.RAs2DshWhfxw4fz1FVUI6LlklOnYT3DjjoX425LVECc';
export const supabase = createClient(supabaseUrl, supabaseKey);