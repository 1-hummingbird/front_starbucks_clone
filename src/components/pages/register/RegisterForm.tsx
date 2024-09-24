'use client';

import { FormControl, FormField, FormItem, FormMessage } from '../../ui/form';
import { RegisterFormType, RegisterValues } from '@/types/auth';

import { Button } from '../../ui/button';
import Input from '../../ui/input';
import MotionDiv from '@/components/ui/MotionDiv';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface RegisterFormProps {
  formTypes: RegisterFormType<RegisterValues>[];
  route?: string;
  hasNext: boolean;
  isFirst?: boolean;
  availableType?: string;
}

export const variants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -100,
  },
};

const RegisterForm = ({
  formTypes: formType,
  route,
  hasNext,
  isFirst,
}: RegisterFormProps) => {
  const router = useRouter();
  const fieldNames = formType.map(
    (field) => field.name as keyof RegisterValues,
  );
  const {
    control,
    trigger,
    formState: { isSubmitting, errors },
    getValues,
    setError,
    clearErrors,
  } = useFormContext<RegisterValues>();

  const [isExiting, setIsExiting] = useState<boolean>(false);
  const onClickNext = async () => {
    const isValid = await trigger(fieldNames);
    if (isValid) {
      setIsExiting(true);
      router.push(`${route}`);
    }
  };

  return (
    <MotionDiv
      initial={isFirst ? undefined : 'initial'}
      animate={isExiting ? 'exit' : 'animate'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <section className="mt-20 flex flex-col gap-2 px-8">
        {formType.map((item) => {
          return (
            <FormField
              key={item.id}
              control={control}
              name={item.name as keyof RegisterValues}
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center gap-4">
                    <FormControl>
                      <Input
                        className="custom-input focus-visible:ring-transparent"
                        placeholder={item.placeholder}
                        inputMode={item.inputMode}
                        type={item.type}
                        value={field.value as string | number | undefined}
                        onChange={field.onChange}
                      />
                    </FormControl>
                  </div>
                  {errors[item.name as keyof RegisterValues] && <FormMessage />}
                </FormItem>
              )}
            />
          );
        })}
        {hasNext ? (
          <Button
            className="custom-button mt-6"
            type="button"
            onClick={onClickNext}
          >
            다음
          </Button>
        ) : (
          <Button
            className="custom-button my-6"
            type="submit"
            disabled={isSubmitting}
          >
            회원가입
          </Button>
        )}
      </section>
    </MotionDiv>
  );
};

export default RegisterForm;
