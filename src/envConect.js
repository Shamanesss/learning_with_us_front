import { createClient } from '@supabase/supabase-js'

const apiUrl = process.env.API_URL
const apiKey = process.env.API_KEY
const autorizacion = process.AUTORIZACION

export const supabase = createClient(apiUrl, apiKey, autorizacion)