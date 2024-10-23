import MainLayout from "@/layout/MainLayout";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Algorithm } from "@/enums/algorihtm";
import { Label } from "@/components/ui/label";

import useTrain from "./hooks/useTrain";
import DecisionTreeForm from "./components/DecisionTreeForm";
import RandomForestForm from "./components/RandomForestForm";
import { Button } from "@/components/ui/button";
import DialogComponent from "@/components/Dialog";

const Train = () => {
  const {
    decisionTreeForm,
    randomForestForm,
    onSubmit,
    selectedAlgorithm,
    setSelectedAlgorithm,
    isDialogOpen,
    setIsDialogOpen,
    trainResponse,
  } = useTrain();

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
            <Label className="ml-2">
              Hyperparameter (please refer to{" "}
              <a
                className="text-white underline"
                target="blank"
                href={
                  selectedAlgorithm === Algorithm.DecisionTree
                    ? "https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html"
                    : "https://scikit-learn.org/1.5/modules/generated/sklearn.ensemble.RandomForestClassifier.html"
                }
              >
                this
              </a>{" "}
              documentation for)
            </Label>
            {selectedAlgorithm === Algorithm.DecisionTree ? (
              <DecisionTreeForm form={decisionTreeForm} onSubmit={onSubmit} />
            ) : selectedAlgorithm === Algorithm.RandomForest ? (
              <RandomForestForm form={randomForestForm} onSubmit={onSubmit} />
            ) : (
              <div>not implemented</div>
            )}
          </div>
        )}

        {trainResponse && (
          <Button
            type="button"
            variant={"outline"}
            className="w-full max-w-[200px] mb-5"
            onClick={() => setIsDialogOpen(true)}
          >
            See latest result
          </Button>
        )}

        <DialogComponent
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          title="Training results"
        >
          <Table className="bg-card rounded-xl overflow-clip mt-2">
            <TableHeader>
              <TableRow className="bg-neutral-900 hover:bg-transparent0">
                <TableHead>Best Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{trainResponse?.best_score.toFixed(3)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table className="bg-card rounded-xl overflow-clip mt-2">
            <TableHeader>
              <TableRow className="bg-neutral-900 hover:bg-transparent0">
                <TableHead>Best Params</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trainResponse &&
                Object.entries(trainResponse.best_params).map(
                  ([key, value]) => (
                    <TableRow key={key}>
                      <TableCell className="font-medium">{key}</TableCell>
                      <TableCell>{JSON.stringify(value)}</TableCell>{" "}
                    </TableRow>
                  )
                )}
            </TableBody>
          </Table>
          <div className="my-2">
            See{" "}
            <a
              href="/status"
              className="text-slate-300 hover:text-slate-100 transition-all"
            >
              status
            </a>{" "}
            for more information
          </div>
        </DialogComponent>
      </div>
    </MainLayout>
  );
};

export default Train;
