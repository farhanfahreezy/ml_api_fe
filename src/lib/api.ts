import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

export default api;
