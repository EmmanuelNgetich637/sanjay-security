import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the stored JWT to every outgoing request, if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("sgs_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Public
export const sendContactMessage = (payload) => api.post("/contact", payload);
export const sendQuoteRequest = (payload) => api.post("/quote", payload);

// Auth
export const login = (payload) => api.post("/auth/login", payload);
export const fetchCurrentUser = () => api.get("/auth/me");

// Admin (protected — requires a valid token)
export const fetchContacts = () => api.get("/contact");
export const fetchQuotes = () => api.get("/quote");

export default api;