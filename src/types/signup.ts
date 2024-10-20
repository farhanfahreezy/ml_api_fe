import { SignUpSchema } from "@/schema/signup";
import { z } from "zod";

export type SignUp = z.infer<typeof SignUpSchema>;
