'use client';

import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormField, FormMessage } from '@/components/ui/form';

import AgreementContent from '@/datas/dummy/AgreementContent';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Input from '@/components/ui/input';
import MotionDiv from '@/components/ui/MotionDiv';
import { RegisterValues } from '@/types/auth';
import { routes } from '@/config/routes';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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

const TermsAgreement = () => {
  const router = useRouter();
  const {
    control,
    trigger,
    formState: { errors },
  } = useFormContext<RegisterValues>();

  const [isExiting, setIsExiting] = useState<boolean>(false);

  const onClickNext = async () => {
    const isValid = await trigger('agree');
    if (isValid) {
      setIsExiting(true);
      router.push(`${routes.signup_step1}`);
    }
  };
  return (
    <MotionDiv
      initial={'initial'}
      animate={isExiting ? 'exit' : 'animate'}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <section className="flex w-full flex-col px-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={
              'https://image.istarbucks.co.kr/common/img/util/mem/icon_find_sally.png'
            }
            alt={'/'}
            width={200}
            height={200}
            priority
          />
          <p className="mt-6">회원가입 약관동의단계입니다.</p>
        </div>

        <section className="mx-auto mt-12 flex w-full max-w-md flex-col">
          <Card className="mb-4 flex flex-col">
            <div className="mt-2 flex w-full items-center justify-between gap-2 px-6">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold">
                홈페이지 이용약관 동의 (필수)
              </p>
              <div className="flex items-center justify-end">
                <FormField
                  control={control}
                  name="agree"
                  render={({ field }) => (
                    <FormControl className="mt-1 flex-1">
                      <Input
                        type="checkbox"
                        className="ml-auto h-[20px] !w-[20px] rounded border-gray-300 accent-[#006241] checked:accent-[#006241] focus:accent-[#006241]"
                        checked={!!field.value || false}
                        onChange={(e) => field.onChange(e.target.checked)}
                      />
                    </FormControl>
                  )}
                />
              </div>
            </div>
            <CardContent className="mt-4 max-h-60 overflow-y-auto p-4">
              <AgreementContent />
            </CardContent>
          </Card>
          {errors.agree && (
            <p className="mt-2 pl-1 text-xl text-red-500">
              {errors.agree.message}
            </p>
          )}
          <Button
            className="custom-button mt-6"
            type="button"
            onClick={onClickNext}
          >
            다음
          </Button>
        </section>
      </section>
    </MotionDiv>
  );
};

export default TermsAgreement;
