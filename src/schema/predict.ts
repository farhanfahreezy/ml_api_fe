import { z } from "zod";

export const PredictFormSchema = z.object({
  input: z.array(z.array(z.number().min(0, "Must be positive")).length(4)),
});
