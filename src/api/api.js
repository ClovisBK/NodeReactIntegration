import axios from "axios";


const api = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "/V1/api" 
      : "https://jwtauthenticationnodejs-production.up.railway.app", 
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
