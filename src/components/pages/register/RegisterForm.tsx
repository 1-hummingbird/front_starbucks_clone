'use client';

import { RegisterFormType, RegisterValues } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import { Button } from '../../ui/button';
import { FormControl, FormField, FormItem, FormMessage } from '../../ui/form';
import Input from '../../ui/input';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface RegisterFormProps {
  formType: RegisterFormType[];
  route?: string;
  hasNext: boolean;
  isFirst?: boolean;
}

const variants = {
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
  formType,
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
  } = useFormContext<RegisterValues>();

  const [isExiting, setIsExiting] = useState<boolean>(false);

  const onClickNext = async () => {
    const isValid = await trigger(fieldNames);
    if (isValid) {
      setIsExiting(true);

      router.push(`/register/${route}`);
    }
  };

  return (
    <motion.div
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
                  <FormControl>
                    <Input
                      className="custom-input focus-visible:ring-transparent"
                      placeholder={item.placeholder}
                      inputMode={item.inputMode}
                      type={item.type}
                      {...field}
                    />
                  </FormControl>
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
    </motion.div>
  );
};

export default RegisterForm;
