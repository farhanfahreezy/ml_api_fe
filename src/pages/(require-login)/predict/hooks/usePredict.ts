import { postPredict } from "@/api/predict/predict";
import { PredictFormSchema } from "@/schema/predict";
import { PredictForm, PredictResponse } from "@/types/predict";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const usePredict = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [predictionResult, setPredictionResult] = useState<PredictResponse>();

  const predictForm = useForm<PredictForm>({
    resolver: zodResolver(PredictFormSchema),
    defaultValues: {
      input: [[]],
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
          setPredictionResult(res.data);
          setIsDialogOpen(true);
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

  const { fields, append, remove } = useFieldArray({
    control: predictForm.control,
    name: "input",
  });

  return {
    predictForm,
    onSubmit,
    fields,
    append,
    remove,
    isDialogOpen,
    setIsDialogOpen,
    predictionResult,
  };
};

export default usePredict;
