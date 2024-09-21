import { RegisterType } from '@/types/auth';
import { Control, Controller, FieldValues } from 'react-hook-form';

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
    <div className="flex h-12 flex-col space-y-1">
      <Controller
        defaultValue=""
        name={name as keyof RegisterType}
        control={control}
        render={({ field }) => (
          <div className="flex items-center">
            <input
              className="w-full rounded border border-gray-300 px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#006241]"
              {...field}
              type={type}
              placeholder={placeholder}
              onBlur={onBlurHandler}
            />
          </div>
        )}
      />
      {errors[name] && (
        <p className="w-full text-sm text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
