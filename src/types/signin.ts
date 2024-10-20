import { SignInSchema } from "@/schema/signin";
import { z } from "zod";

export type SignIn = z.infer<typeof SignInSchema>;
