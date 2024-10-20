import { z } from "zod";

export const SignInSchema = z.object({
  username: z.string().min(2).max(20),
  password: z.string().min(8).max(100),
});
