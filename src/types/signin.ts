import { SignInSchema } from "@/schema/signin";
import { z } from "zod";

export type SignIn = z.infer<typeof SignInSchema>;

export type SignInResponse = {
  access_token: string;
  name: string;
  username: string;
  email: string;
};
