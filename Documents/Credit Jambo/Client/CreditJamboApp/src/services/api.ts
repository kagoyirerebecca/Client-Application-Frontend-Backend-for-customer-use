import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// Add token support for authenticated requests
api.interceptors.request.use((config) => {
  const token = globalThis.authToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
