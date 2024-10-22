import { DecisionTreeParameterOptimizationSchema } from "@/schema/decisiontree_hyperparameter";
import { z } from "zod";

export type DecisionTreeParameterOptimization = z.infer<
  typeof DecisionTreeParameterOptimizationSchema
>;
