import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xzojqmxyrvvgxzoiwfcl.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6b2pxbXh5cnZ2Z3h6b2l3ZmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg3OTY2NzksImV4cCI6MjAwNDM3MjY3OX0.PKAup3OZhN8-BUibWOXdG2ruSsM6ss1MzzO_c2ut5mg";

export const supabase = createClient(supabaseUrl, supabaseKey);



// import axios from 'axios';

// const serverUrl = 'http://127.0.0.1:5000';

// const login = async (email, password) => {
//     try {
//         const response = await axios.post(`${serverUrl}/login`, { email, password });
//         const data = response.data;
//         // Maneja la respuesta del servidor según sea necesario
//         console.log(data);
//     } catch (error) {
//         console.error('Error de inicio de sesión:', error.message);
//     }
// };



// // Ejemplo de uso de la función login
//login('user@example.com', 'password');
