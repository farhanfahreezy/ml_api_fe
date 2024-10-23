import { DecisionTreeParameterOptimization } from "./decisitontree_hyperparameter";
import { RandomForestParameterOptimization } from "./randomforest_hyperparameter";

export interface TrainForm {
  algorithm: string;
  param_grid:
    | RandomForestParameterOptimization
    | DecisionTreeParameterOptimization;
}

export interface TrainResponse {
  best_params:
    | RandomForestParameterOptimization
    | DecisionTreeParameterOptimization;
  best_score: number;
  cv_results: {
    mean_test_score: number[];
    params:
      | RandomForestParameterOptimization[]
      | DecisionTreeParameterOptimization[];
    std_test_score: number[];
  };
}
