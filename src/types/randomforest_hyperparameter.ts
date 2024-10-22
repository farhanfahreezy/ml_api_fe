import { RandomForestParameterOptimizationSchema } from "@/schema/randomforest_hyperparameter";
import { z } from "zod";

export type RandomForestParameterOptimization = z.infer<
  typeof RandomForestParameterOptimizationSchema
>;
