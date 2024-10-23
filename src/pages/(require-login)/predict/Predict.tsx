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
import CreateableSelectForm from "@/components/CreateableSelectForm";
import { Input } from "@/components/ui/input";

const Predict = () => {
  const { predictForm, onSubmit } = usePredict();
  return (
    <MainLayout>
      <div className="w-full flex flex-col justify-center items-center text-primary">
        <h1 className="mb-10">Predict something</h1>
        <Form {...predictForm}>
          <form
            className="ml-2 w-full flex flex-col items-center"
            onSubmit={predictForm.handleSubmit(onSubmit)}
          >
            <div className="space-y-2 w-full">
              <FormField
                control={predictForm.control}
                name={"input"}
                render={({ field }) => {
                  return (
                    <FormItem className="w-full px-2">
                      <FormLabel>{field.name}</FormLabel>
                      <FormControl>
                        <Input />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <Button
              type="submit"
              className="w-[180px] mt-5"
              variant={"secondary"}
            >
              Predict
            </Button>
          </form>
        </Form>
      </div>
    </MainLayout>
  );
};

export default Predict;
