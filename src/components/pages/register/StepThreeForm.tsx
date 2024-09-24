'use client';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import React, { useEffect, useState } from 'react';
import { RegisterFormProps, variants } from './RegisterForm';

import { Button } from '@/components/ui/button';
import Input from '@/components/ui/input';
import MotionDiv from '@/components/ui/MotionDiv';
import { RegisterValues } from '@/types/auth';
import { isValueAvailable } from '@/action/Auth';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const StepThreeForm = ({
  formTypes: formType,
  route,
  hasNext,
  isFirst,
  availableType,
}: RegisterFormProps) => {
  const router = useRouter();
  const fieldNames = formType.map((field) => field.name);

  const {
    control,
    trigger,
    formState: { isSubmitting, errors },
    getValues,
    setError,
    clearErrors,
    getFieldState,
  } = useFormContext<RegisterValues>();

  const [isExiting, setIsExiting] = useState<boolean>(false);

  const checkFieldDuplicate = async (value: string) => {
    const response = await isValueAvailable(availableType!, value);
    const isValid = response.result.available;

    // switch
    if (isValid) {
      return;
    }
    switch (availableType) {
      case 'checkLoginID':
        setError('loginID', {
          type: 'manual',
          message: '이 아이디는 이미 사용 중입니다',
        });
        break;
      case 'checkPhone':
        setError('phone', {
          type: 'manual',
          message: '이 전화번호는 이미 사용중입니다.',
        });
        break;
      default:
        throw Error('잘못된 availableType 입니다');
    }
  };
  console.log(errors);

  const handleClickNext = async () => {
    // 폼 전체에 유효성 검사 실시!!
    // 아이디 중복검사 실시!!
    // 검사가 다 끝났으면 에러가 한개도 없다면 다음 스텝으로!!
    await trigger(fieldNames);
    await checkFieldDuplicate(getValues('loginID'));
    // 에러들을 돌면서 하나도 없으면 넘어가라!!
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
                        // value={field.value}
                        // onChange={(e) => {
                        //   field.onChange(e);
                        //   trigger(item.name);
                        // }}
                        onBlur={() => {
                          if (item.name === 'loginID') {
                            checkFieldDuplicate(field.value as string);
                          }
                          if (item.name === 'phone') {
                            checkFieldDuplicate(field.value as string);
                          }
                        }}
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

export default StepThreeForm;
