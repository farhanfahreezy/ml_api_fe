import { z } from "zod";

export const PredictFormSchema = z.object({
  input: z.array(z.array(z.number())),
});
