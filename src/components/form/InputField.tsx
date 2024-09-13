import { RegisterType } from "@/app/types/auth";
import { Control, Controller, FieldValues } from "react-hook-form";

interface InputFieldProps {
  name: string;
  type: string;
  placeholder: string;
  duplicateCheck?: boolean;
  control: Control<RegisterType>;
  errors: FieldValues;
}

const onDuplicateCheck = (e: React.FocusEvent<HTMLInputElement, Element>) => {
  const value = e.target.value;
  // 중복 검사
  console.log(value);
};

const InputField = ({
  name,
  type,
  placeholder,
  control,
  errors,
  duplicateCheck,
}: InputFieldProps) => {
  const onBlurHandler = duplicateCheck ? onDuplicateCheck : undefined;

  return (
    <div className="flex flex-col space-y-1 h-12">
      <Controller
        defaultValue=""
        name={name as keyof RegisterType}
        control={control}
        render={({ field }) => (
          <div className="flex items-center">
            <input
              className="w-full px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#006241]"
              {...field}
              type={type}
              placeholder={placeholder}
              onBlur={onBlurHandler}
            />
          </div>
        )}
      />
      {errors[name] && (
        <p className=" text-red-500 text-sm w-full">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
