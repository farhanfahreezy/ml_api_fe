import { postTrain } from "@/api/train/train";
import { Algorithm } from "@/enums/algorihtm";
import { DecisionTreeParameterOptimizationSchema } from "@/schema/decisiontree_hyperparameter";
import { RandomForestParameterOptimizationSchema } from "@/schema/randomforest_hyperparameter";
import { DecisionTreeParameterOptimization } from "@/types/decisitontree_hyperparameter";
import { RandomForestParameterOptimization } from "@/types/randomforest_hyperparameter";
import { TrainResponse } from "@/types/train";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const useTrain = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(
    null
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [trainResponse, setTrainResponse] = useState<TrainResponse>();

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

  const { mutateAsync: trainMutation } = useMutation({
    mutationFn: postTrain,
  });

  const onSubmit = (
    data: DecisionTreeParameterOptimization | RandomForestParameterOptimization
  ) => {
    const promise = trainMutation({
      algorithm: selectedAlgorithm ?? "",
      param_grid: data,
    });
    toast.promise(
      promise
        .then((res) => {
          setTrainResponse(res.data);
          setIsDialogOpen(true);
        })
        .catch((err) => {
          console.log("err", err);
        }),
      {
        loading: "Loading...",
        success: "Train complete",
        error: (err) => `${err.message}`,
      }
    );
  };

  return {
    decisionTreeForm,
    randomForestForm,
    onSubmit,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isDialogOpen,
    setIsDialogOpen,
    trainResponse,
  };
};

export default useTrain;
