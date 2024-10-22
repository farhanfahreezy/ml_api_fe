import { StatusEnum } from "@/enums/status";
import { DecisionTreeParametersSchema } from "@/schema/decisiontree_hyperparameter";
import { RandomForestParametersSchema } from "@/schema/randomforest_hyperparameter";
import { z } from "zod";

export interface StatusResponse {
  status: StatusEnum;
  model_type?: string;
  best_params?: DecisionTreeParameters | RandomForestParameters;
  num_classes?: number;
}

export type RandomForestParameters = z.infer<
  typeof RandomForestParametersSchema
>;

export type DecisionTreeParameters = z.infer<
  typeof DecisionTreeParametersSchema
>;
