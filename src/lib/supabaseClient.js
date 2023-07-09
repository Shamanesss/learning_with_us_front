import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xzojqmxyrvvgxzoiwfcl.supabase.co' //  URL del proyecto de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6b2pxbXh5cnZ2Z3h6b2l3ZmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTY2NzksImV4cCI6MjAwNDM3MjY3OX0.PKAup3OZhN8-BUibWOXdG2ruSsM6ss1MzzO_c2ut5mg' // clave publica del proyecto de Supabase


export const supabase = createClient(supabaseUrl, supabaseKey)