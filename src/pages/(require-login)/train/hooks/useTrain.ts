import { DecisionTreeParameterOptimizationSchema } from "@/schema/decisiontree_hyperparameter";
import { RandomForestParameterOptimizationSchema } from "@/schema/randomforest_hyperparameter";
import { DecisionTreeParameterOptimization } from "@/types/decisitontree_hyperparameter";
import { RandomForestParameterOptimization } from "@/types/randomforest_hyperparameter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useTrain = () => {
  const decisionTreeForm = useForm<DecisionTreeParameterOptimization>({
    resolver: zodResolver(DecisionTreeParameterOptimizationSchema),
    defaultValues: {
      criterion: [],
      splitter: [],
      max_depth: [],
      min_samples_split: [],
      min_samples_leaf: [],
      min_weight_fraction_leaf: [],
      max_features: [],
      random_state: [],
      max_leaf_nodes: [],
      min_impurity_decrease: [],
      class_weight: [],
      ccp_alpha: [],
      monotonic_cst: [],
    },
  });

  const randomForestForm = useForm<RandomForestParameterOptimization>({
    resolver: zodResolver(RandomForestParameterOptimizationSchema),
    defaultValues: {
      n_estimators: [],
      criterion: [],
      max_depth: [],
      min_samples_split: [],
      min_samples_leaf: [],
      min_weight_fraction_leaf: [],
      max_features: [],
      max_leaf_nodes: [],
      min_impurity_decrease: [],
      bootstrap: [],
      oob_score: [],
      n_jobs: [],
      random_state: [],
      verbose: [],
      warm_start: [],
      class_weight: [],
      ccp_alpha: [],
      max_samples: [],
      monotonic_cst: [],
    },
  });

  const onSubmitDTF = (data: DecisionTreeParameterOptimization) => {
    console.log("Submitted Data:", data);
  };

  const onSubmitRF = (data: RandomForestParameterOptimization) => {
    console.log("Submitted Data", data);
  };

  return { decisionTreeForm, randomForestForm, onSubmitDTF, onSubmitRF };
};

export default useTrain;
