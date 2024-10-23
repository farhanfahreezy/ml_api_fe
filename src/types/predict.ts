import { z } from "zod";
import { PredictFormSchema } from "@/schema/predict";

export type PredictForm = z.infer<typeof PredictFormSchema>;

export interface PredictResponse {
  prediction: number[];
}
