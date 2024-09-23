import { FormField, FormItem, FormControl, FormMessage } from '../../ui/form';
import Input from '../../ui/input';
import { RegisterValues } from '@/types/auth';
import { useFormContext } from 'react-hook-form';

const VerificationCodeInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RegisterValues>();

  return (
    <FormField
      control={control}
      name="verificationCode"
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              className="custom-input focus-visible:ring-transparent"
              placeholder="인증코드"
              inputMode="numeric"
              type="text"
              value={field.value as string | undefined}
              onChange={field.onChange}
            />
          </FormControl>
          {errors.verificationCode && <FormMessage />}
        </FormItem>
      )}
    />
  );
};

export default VerificationCodeInput;
