import axios from "axios"

export const apiBackend = axios.create(
    {
        baseURL: process.env.REACT_APP_BACKEND_URL || 'https://backend-chatbot-makers-production.up.railway.app/',
        headers: {
            'Content-Type': 'application/json',
          }
    }
)