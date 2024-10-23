import api from "@/lib/api";
import { TrainForm, TrainResponse } from "@/types/train";

export const postTrain = (data: TrainForm) =>
  api.post<TrainResponse>("train", data);
