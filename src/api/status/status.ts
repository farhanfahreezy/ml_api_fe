import api from "@/lib/api";
import { StatusResponse } from "@/types/status";

export const getStatus = () => api.get<StatusResponse>("status");
