import api from "@/lib/api";

export const authself = () => api.post("auth/self");
