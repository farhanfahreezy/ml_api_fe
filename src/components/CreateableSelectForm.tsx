import CreatableSelect from "react-select/creatable";
import { MultiValue } from "react-select";
import { OptionType } from "@/types/optionType";

interface CreateableSelectFormProps {
  input: {
    name: string;
    value: MultiValue<OptionType>;
    onChange: (value: MultiValue<OptionType>) => void;
  };
  className?: string;
  incomingOptions?: OptionType[];
  isClearable?: boolean;
  onFocus?: () => void;
  closeMenuOnSelect?: boolean;
  // incomingStyle?: any;
  isDisabled?: boolean;
  placeholder?: string;
  onInputChange?: (inputValue: string) => void;
  noOptionsMessage?: () => string | null;
}

const CreateableSelectForm = ({
  input: { name, onChange, value },
  className,
  incomingOptions,
  isClearable,
  onFocus,
  closeMenuOnSelect,
  // incomingStyle,
  isDisabled,
  placeholder,
  onInputChange,
  noOptionsMessage,
}: CreateableSelectFormProps) => {
  return (
    <CreatableSelect
      name={name}
      isMulti
      onFocus={onFocus}
      closeMenuOnSelect={closeMenuOnSelect}
      options={incomingOptions}
      isClearable={isClearable}
      placeholder={placeholder ?? `Select`}
      className={className}
      isDisabled={isDisabled}
      // styles={}
      value={value}
      onChange={onChange}
      onInputChange={onInputChange}
      noOptionsMessage={noOptionsMessage}
      // theme={(theme) => ({
      //   ...theme,
      //   colors: {
      //     ...theme.colors,
      //     primary: `#FF0000`,
      //   },
      // })}
      theme={(theme) => ({
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "gray", // Hover option background
          primary: "#384953", // Selected option background
          neutral0: "#262626", // Dropdown background
          neutral80: "#ecf0f1", // Text color
          neutral20: "#384953", // Border color
          neutral10: "#384953", // Selected option
          dangerLight: "#ef4343",
          danger: "#e0e6eb",
        },
      })}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default CreateableSelectForm;
