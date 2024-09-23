'use client';

import MotionDiv from '@/components/ui/MotionDiv';
import { RegisterFormType, RegisterValues } from '@/types/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../../ui/button';
import { FormControl, FormField, FormItem, FormMessage } from '../../ui/form';
import Input from '../../ui/input';
import { sendVerificationCode } from '@/action/Auth';

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
    getValues,
    setError,
    clearErrors,
  } = useFormContext<RegisterValues>();

  const [isExiting, setIsExiting] = useState<boolean>(false);
  const [verificationSentEmail, setVerificationSentEmail] =
    useState<boolean>(false);
  const [verificationSentPhone, setVerificationSentPhone] =
    useState<boolean>(false);

  const onClickNext = async () => {
    const isValid = await trigger(fieldNames);
    console.log(verificationSentEmail);
    console.log(getValues().verificationCode);
    console.log(getValues().email);

    if (!verificationSentEmail || !getValues().verificationCode) {
      setError('verificationCode', {
        type: 'required',
        message: '인증 코드를 입력하세요!!.',
      });
      return;
    }

    if (isValid && verificationSentEmail) {
      setIsExiting(true);
      router.push(`/register/${route}`);
      console.log(fieldNames);
    }
  };

  const onSendVerificationCode = async () => {
    const email = getValues().email;
    const isValid = await trigger(fieldNames);
    if (isValid) {
      setVerificationSentEmail(true);
      sendVerificationCode(email);
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
                    {item.type === 'email' ? (
                      <Button
                        type="button"
                        className="custom-button !mt-0"
                        onClick={onSendVerificationCode}
                      >
                        인증
                      </Button>
                    ) : null}
                  </div>
                  {errors[item.name as keyof RegisterValues] && <FormMessage />}
                </FormItem>
              )}
            />
          );
        })}
        {verificationSentEmail ? (
          <FormField
            control={control}
            name="verificationCode"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center gap-4">
                  <FormControl>
                    <Input
                      className="custom-input focus-visible:ring-transparent"
                      inputMode="text"
                      type="text"
                      value={field.value as string | number | undefined}
                      onChange={field.onChange}
                    />
                  </FormControl>
                </div>
                {/* {errors[item.name as keyof RegisterValues] && <FormMessage />} */}
              </FormItem>
            )}
          />
        ) : // <FormItem>
        //   <FormControl>
        //     <Input
        //       className="custom-input focus-visible:ring-transparent"
        //       name="verificationCode"
        //       type="text"
        //       inputMode="numeric"
        //       required
        //     />
        //   </FormControl>
        //   {errors.verificationCode ? (
        //     <p className="text-[12.8px] text-[#e71212]">
        //       {errors.verificationCode?.message}
        //     </p>
        //   ) : null}
        // </FormItem>
        null}
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
