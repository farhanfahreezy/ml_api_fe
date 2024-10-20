import { Status } from "@/enums/status";

export interface StatusResponse {
  status: Status;
  model_type?: string;
  best_params?: DecisionTreeHyperParameter | RandomForestHyperParameter;
  num_classes?: number;
}

export interface DecisionTreeHyperParameter {
  ccp_alpha: number;
  class_weight:
    | null
    | string
    | Record<number | string, number>
    | Array<Record<number | string, number>>;
  criterion: string;
  max_depth: number | null;
  max_features: number | null;
  max_leaf_nodes: number | null;
  min_impurity_decrease: number;
  min_samples_leaf: number;
  min_samples_split: number;
  min_weight_fraction_leaf: number;
  monotonic_cst: Array<number> | null;
  random_state: number | object | null;
  splitter: string;
}

export interface RandomForestHyperParameter {
  bootstrap: boolean;
  ccp_alpha: number;
  class_weight:
    | null
    | string
    | Record<number | string, number>
    | Array<Record<number | string, number>>;
  criterion: string;
  max_depth: number | null;
  max_features: number | null;
  max_leaf_nodes: number | null;
  max_samples: null;
  min_impurity_decrease: number;
  min_samples_leaf: number;
  min_samples_split: number;
  min_weight_fraction_leaf: number;
  monotonic_cst: Array<number> | null;
  n_estimators: number;
  n_jobs: number | null;
  oob_score: boolean;
  random_state: number | object | null;
  verbose: number;
  warm_start: boolean;
}
