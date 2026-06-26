import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendContactMessage = (payload) => api.post("/contact", payload);
export const sendQuoteRequest = (payload) => api.post("/quote", payload);

export default api;