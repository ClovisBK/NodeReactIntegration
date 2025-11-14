import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://jwtauthenticationnodejs-production.up.railway.app/V1/api"
    : "/V1/api"; // local dev uses proxy

const api = axios.create({
  baseURL:import.meta.evn.VITE_API_URL || "/V1/api",
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
