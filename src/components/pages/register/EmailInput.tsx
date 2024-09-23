import { FormField, FormItem, FormControl, FormMessage } from '../../ui/form';
import Input from '../../ui/input';
import { RegisterValues } from '@/types/auth';
import { useFormContext } from 'react-hook-form';

const EmailInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegisterValues>();

  return (
    <FormField
      control={control}
      name="email"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              className="custom-input focus-visible:ring-transparent"
              placeholder="이메일"
              inputMode="email"
              type="email"
              value={field.value as string | undefined}
              onChange={field.onChange}
            />
          </FormControl>
          {errors.email && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default EmailInput;
