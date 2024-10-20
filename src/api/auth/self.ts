import api from "@/lib/api";

export const authself = () => api.get("auth/self");
