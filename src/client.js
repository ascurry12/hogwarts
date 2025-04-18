import { createClient } from '@supabase/supabase-js'

const URL = 'https://rxkefhmxjkaluiyqemeo.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4a2VmaG14amthbHVpeXFlbWVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3NDI4NzcsImV4cCI6MjA2MDMxODg3N30.dEUam7nKU8qkjBwXRJgW50Pu6riyaLHCdqCz4s2lJsA';

export const supabase = createClient(URL, API_KEY);
