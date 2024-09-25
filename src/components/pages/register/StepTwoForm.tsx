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
import { RegisterValues } from '@/types/auth';
import { isValueAvailable } from '@/action/authActions';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const StepTwoForm = ({
  formTypes: formType,
  route,
  availableType,
}: RegisterFormProps) => {
  const router = useRouter();
  const fieldNames = formType.map((field) => field.name);

  const {
    control,
    trigger,
    formState: { errors },
    getValues,
    setError,
  } = useFormContext<RegisterValues>();

  const [isExiting, setIsExiting] = useState<boolean>(false);

  const checkFieldDuplicate = async (value: string) => {
    const response = await isValueAvailable(availableType!, value);
    const isValid = response.result.available;

    if (isValid) {
      return;
    }

    setError('loginID', {
      type: 'manual',
      message: '이 아이디는 이미 사용 중입니다',
    });
  };

  const handleClickNext = async () => {
    await trigger(fieldNames);
    await checkFieldDuplicate(getValues('loginID'));
    if (Object.values(errors).every((error) => !error)) {
      setIsExiting(true);
      router.push(`${route}`);
    }
  };

  return (
    <MotionDiv
      initial={'initial'}
      animate={isExiting ? 'exit' : 'animate'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <section className="mt-20 flex flex-col gap-2 px-8">
        {formType.map((item) => {
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
          className="custom-button mt-6"
          type="button"
          onClick={handleClickNext}
        >
          다음
        </Button>
      </section>
    </MotionDiv>
  );
};

export default StepTwoForm;
