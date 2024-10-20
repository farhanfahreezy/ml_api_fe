import api from "@/lib/api";
import { SignIn } from "@/types/signin";

export const signin = (data: SignIn) => api.post("auth/sign-in", data);
