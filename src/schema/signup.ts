import { z } from "zod";

export const SignUpSchema = z.object({
  name: z.string().max(100),
  username: z.string().min(8).max(20),
  password: z.string().min(8).max(50),
  email: z.string().max(50),
});
