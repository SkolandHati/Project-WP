import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://uoozeeeclzfbokpvuqll.supabase.co';
const APIAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvb3plZWVjbHpmYm9rcHZ1cWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5ODU5MTksImV4cCI6MjAzMjU2MTkxOX0.mW0e8NGDBgS63M1pOKaOCEl3_hpKV2wgk7WBreiBaCQ';

export const supabase = createClient(supabaseUrl, APIAnonKey)