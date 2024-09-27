'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { RegisterFormProps, variants } from './StepOneForm';

import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import MotionDiv from '@/components/ui/MotionDiv';
import { useToast } from '@/hooks/use-toast';
import { RegisterValues } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

const StepTwoForm = ({
  formTypes,
  route,
  availableType,
}: RegisterFormProps) => {
  const { toast } = useToast();
  const router = useRouter();
  const fieldNames = formTypes.map((field) => field.name);

  const {
    control,
    formState: { isSubmitting, errors },
  } = useFormContext<RegisterValues>();

  return (
    <MotionDiv
      initial={'initial'}
      animate={'animate'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <section className="mt-20 flex flex-col gap-2 px-8">
        {formTypes.map((item) => {
          if (item.name === 'agree') {
            return null;
          }
          return (
            <FormField
              key={item.id}
              control={control}
              name={item.name}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormControl>
                      <Input
                        className="custom-input focus-visible:ring-transparent"
                        placeholder={item.placeholder}
                        inputMode={item.inputMode}
                        type={item.type}
                        {...field}
                      />
                    </FormControl>
                  </div>
                  {errors[item.name] && <FormMessage />}
                </FormItem>
              )}
            />
          );
        })}
        <Button
          className="custom-button my-6"
          type="submit"
          disabled={isSubmitting}
        >
          회원가입
        </Button>
      </section>
    </MotionDiv>
  );
};

export default StepTwoForm;
