import api from "@/lib/api";
import { SignUp } from "@/types/signup";

export const signup = (data: SignUp) => api.post("auth/sign-up", data);
