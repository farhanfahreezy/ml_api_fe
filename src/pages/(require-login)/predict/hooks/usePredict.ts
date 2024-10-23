import { postPredict } from "@/api/predict/predict";
import { PredictFormSchema } from "@/schema/predict";
import { PredictForm } from "@/types/predict";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const usePredict = () => {
  const predictForm = useForm<PredictForm>({
    resolver: zodResolver(PredictFormSchema),
    defaultValues: {
      input: [],
    },
  });

  const { mutateAsync: predictMutation } = useMutation({
    mutationFn: postPredict,
  });

  const onSubmit = (data: PredictForm) => {
    const promise = predictMutation(data);
    toast.promise(
      promise
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        }),
      {
        loading: "Predicting...",
        success: "Prediction complete",
        error: (err) => `${err.message}`,
      }
    );
  };
  return { predictForm, onSubmit };
};

export default usePredict;
