import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import CreateableSelectForm from "@/components/CreateableSelectForm";
import { MultiValue } from "react-select";
import { OptionType } from "@/types/optionType";
import { RandomForestParameterOptimization } from "@/types/randomforest_hyperparameter";

interface RandomForestFormProps {
  form: UseFormReturn<RandomForestParameterOptimization>;
  onSubmit: (data: RandomForestParameterOptimization) => void;
}

interface ParameterFormProps {
  control: Control<RandomForestParameterOptimization>;
  name: keyof RandomForestParameterOptimization;
}

const RandomForestForm = ({ form, onSubmit }: RandomForestFormProps) => {
  return (
    <Form {...form}>
      <form
        className="ml-2 w-full flex flex-col items-center"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="space-y-2 w-full">
          <ParameterForm control={form.control} name={"n_estimators"} />
          <ParameterForm control={form.control} name={"criterion"} />
          <ParameterForm control={form.control} name={"max_depth"} />
          <ParameterForm control={form.control} name={"min_samples_split"} />
          <ParameterForm control={form.control} name={"min_samples_leaf"} />
          <ParameterForm
            control={form.control}
            name={"min_weight_fraction_leaf"}
          />
          <ParameterForm control={form.control} name={"max_features"} />
          <ParameterForm control={form.control} name={"max_leaf_nodes"} />
          <ParameterForm
            control={form.control}
            name={"min_impurity_decrease"}
          />
          <ParameterForm control={form.control} name={"bootstrap"} />
          <ParameterForm control={form.control} name={"oob_score"} />
          <ParameterForm control={form.control} name={"n_jobs"} />
          <ParameterForm control={form.control} name={"random_state"} />
          <ParameterForm control={form.control} name={"random_state"} />
          <ParameterForm control={form.control} name={"verbose"} />
          <ParameterForm control={form.control} name={"warm_start"} />
          <ParameterForm control={form.control} name={"class_weight"} />
          <ParameterForm control={form.control} name={"ccp_alpha"} />
          <ParameterForm control={form.control} name={"max_samples"} />
          <ParameterForm control={form.control} name={"monotonic_cst"} />
        </div>
        <Button type="submit" className="w-[180px] mt-5" variant={"secondary"}>
          Train
        </Button>
      </form>
    </Form>
  );
};

const ParameterForm = ({ control, name }: ParameterFormProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="w-full px-2">
            <FormLabel>{field.name}</FormLabel>
            <FormControl>
              <CreateableSelectForm
                input={{
                  name: field.name,
                  value: field.value.map((val) => ({
                    label: val.toString(),
                    value: val,
                  })),
                  onChange: (newValue: MultiValue<OptionType>) => {
                    const valArray = newValue.map((option) => {
                      return isNaN(Number(option.value))
                        ? option.value
                        : Number(option.value);
                    });
                    field.onChange(valArray);
                  },
                }}
                isClearable
                placeholder="Select an option"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

export default RandomForestForm;
