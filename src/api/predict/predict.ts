import api from "@/lib/api";
import { PredictForm, PredictResponse } from "@/types/predict";

export const postPredict = (data: PredictForm) =>
  api.post<PredictResponse>("predict", data);
