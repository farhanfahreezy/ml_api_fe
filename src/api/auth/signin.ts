import api from "@/lib/api";
import { SignIn, SignInResponse } from "@/types/signin";

export const signin = (data: SignIn) =>
  api.post<SignInResponse>("auth/sign-in", data);
