import MainLayout from "@/layout/MainLayout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import usePredict from "./hooks/usePredict";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import DialogComponent from "@/components/Dialog";

const Predict = () => {
  const {
    predictForm,
    onSubmit,
    fields,
    append,
    remove,
    isDialogOpen,
    setIsDialogOpen,
    predictionResult,
  } = usePredict();

  const placeholderMap: { [key: number]: string } = {
    0: "SepalLengthCm",
    1: "SepalWidthCm",
    2: "PetalLengthCm",
    3: "PetalWidthCm",
  };
  return (
    <MainLayout>
      <div className="w-full flex flex-col justify-center items-center text-primary">
        <h1 className="mb-10">Predict something</h1>
        <Form {...predictForm}>
          <form
            onSubmit={predictForm.handleSubmit(onSubmit)}
            className="flex flex-col w-full items-center gap-1"
          >
            {fields.map((item, index) => (
              <div key={item.id}>
                <FormLabel>Input {index + 1}</FormLabel>
                <div className="flex flex-row gap-2 items-end">
                  {Array.from({ length: 4 }).map((_, idx) => (
                    <FormField
                      key={idx}
                      name={`input.${index}.${idx}`}
                      control={predictForm.control}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>{placeholderMap[idx]}</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="number"
                              required
                              step="0.1"
                              placeholder={""}
                              onChange={(e) => {
                                const value = parseFloat(e.target.value);
                                field.onChange(isNaN(value) ? 0 : value);
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  ))}
                  <Button
                    type="button"
                    variant={"destructive"}
                    onClick={() => remove(index)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            ))}
            <Button
              type="button"
              variant={"ghost"}
              onClick={() => append([[]])}
              className="my-4"
            >
              <Plus /> Add Another Set
            </Button>

            <Button
              type="submit"
              variant={"secondary"}
              className="w-full max-w-[200px] mb-5"
            >
              Submit
            </Button>
            {predictionResult && (
              <Button
                type="button"
                variant={"outline"}
                className="w-full max-w-[200px] mb-5"
                onClick={() => setIsDialogOpen(true)}
              >
                See latest result
              </Button>
            )}
          </form>
        </Form>
      </div>
      <DialogComponent
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        title="Prediction results"
      >
        <Table className="bg-card rounded-xl overflow-clip">
          <TableHeader>
            <TableRow className="bg-neutral-900 hover:bg-transparent0">
              <TableHead>Input number</TableHead>
              <TableHead>Result</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {predictionResult?.prediction.map((val, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">Input {index + 1}</TableCell>
                <TableCell>{val}</TableCell>{" "}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DialogComponent>
    </MainLayout>
  );
};

export default Predict;
