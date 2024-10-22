import MainLayout from "@/layout/MainLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Algorithm } from "@/enums/algorihtm";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import useTrain from "./hooks/useTrain";
import DecisionTreeForm from "./components/DecisionTreeForm";
import RandomForestForm from "./components/RandomForestForm";

const Train = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<Algorithm | null>(
    null
  );

  const { decisionTreeForm, randomForestForm, onSubmitDTF, onSubmitRF } =
    useTrain();

  return (
    <MainLayout>
      <div className="w-full flex flex-col justify-center items-center text-primary">
        <h1 className="mb-10">Train a model</h1>
        <div className="w-full space-y-2 mb-5">
          <Label className="ml-2">Algorithm</Label>
          <Select
            onValueChange={(value) => setSelectedAlgorithm(value as Algorithm)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an algorithm" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={Algorithm.DecisionTree}>
                Decistion Tree
              </SelectItem>
              <SelectItem value={Algorithm.RandomForest}>
                Random Forest
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {selectedAlgorithm && (
          <div className="w-full space-y-2">
            <Label className="ml-2">Hyperparameter</Label>
            {selectedAlgorithm === Algorithm.DecisionTree ? (
              <DecisionTreeForm
                form={decisionTreeForm}
                onSubmit={onSubmitDTF}
              />
            ) : selectedAlgorithm === Algorithm.RandomForest ? (
              <RandomForestForm form={randomForestForm} onSubmit={onSubmitRF} />
            ) : (
              <div>not implemented</div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Train;
