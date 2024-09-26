'use client';

import { FormControl, FormField, FormItem, FormMessage } from '../../ui/form';
import { RegisterFormType, RegisterValues } from '@/types/auth';
import {
  isEmailValid,
  isValueAvailable,
  sendVerificationCode,
} from '@/action/authActions';

import { Button } from '@/components/ui/button';
import Input from '../../ui/input';
import MotionDiv from '@/components/ui/MotionDiv';
import { routes } from '@/config/routes';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export interface RegisterFormProps {
  formTypes: RegisterFormType<RegisterValues>[];
  route?: string;
  hasNext?: boolean;
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

const StepOneForm = () => {
  const {
    control,
    trigger,
    getValues,
    setError,
    formState: { errors },
  } = useFormContext<RegisterValues>();

  const router = useRouter();
  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [verificationSentEmail, setVerificationSentEmail] =
    useState<boolean>(false);

  const onSendVerificationCode = async () => {
    const email = getValues('email');
    const isValid = await trigger('email');

    const response = await isValueAvailable('checkEmail', email);
    const checkEmailDuplicate = response.result.available;
    if (!checkEmailDuplicate) {
      setError('email', {
        type: 'manual',
        message: '이 이메일은 이미 사용 중입니다',
      });
    }
    if (isValid && checkEmailDuplicate) {
      setVerificationSentEmail(true);
      sendVerificationCode(email);
    }
  };

  const onClickNext = async () => {
    const isValid = await trigger(['verificationCode', 'email']);
    if (isValid) {
      setIsExiting(true);
      const response = await isEmailValid(
        getValues('email'),
        getValues('verificationCode'),
      );

      if (response.isSuccess) {
        router.push(`${routes.signup_step2}`);
      }
    }
  };

  return (
    <section className="mt-20 flex flex-col gap-2 px-8">
      <MotionDiv
        initial={'initial'}
        animate={isExiting ? 'exit' : 'animate'}
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-4">
                <FormControl>
                  <Input
                    className="custom-input focus-visible:ring-transparent"
                    placeholder="이메일"
                    inputMode="email"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <Button
                  type="button"
                  className="custom-button !mt-0"
                  onClick={onSendVerificationCode}
                >
                  인증
                </Button>
              </div>
              {errors.email && <FormMessage />}
            </FormItem>
          )}
        />
        {verificationSentEmail ? (
          <FormField
            control={control}
            name="verificationCode"
            render={({ field }) => (
              <FormItem>
                <div className="mt-2 flex items-center gap-4">
                  <FormControl>
                    <Input
                      className="custom-input focus-visible:ring-transparent"
                      inputMode="text"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                </div>
                {errors.verificationCode && <FormMessage />}
              </FormItem>
            )}
          />
        ) : null}
        <Button
          className="custom-button mt-6 w-full"
          type="button"
          onClick={onClickNext}
        >
          다음
        </Button>
      </MotionDiv>
    </section>
  );
};

export default StepOneForm;
