'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FormControl, FormField } from '@/components/ui/form';
import Input from '@/components/ui/input';
import MotionDiv from '@/components/ui/MotionDiv';
import { routes } from '@/config/routes';
import AgreementContent from '@/datas/dummy/AgreementContent';
import { RegisterValues } from '@/types/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

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
      router.push(`/register/${routes.signup_step1}`);
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
            <div className="mt-2 flex w-full items-center justify-between">
              <p className="overflow-hidden text-ellipsis whitespace-nowrap pl-6 text-xl font-bold">
                홈페이지 이용약관 동의 (필수)
              </p>
              <FormField
                control={control}
                name="agree"
                render={({ field }) => (
                  <FormControl>
                    <Input
                      type="checkbox"
                      className="mr-6 h-6 w-6 rounded border-gray-300 accent-[#006241] checked:accent-[#006241] focus:accent-[#006241]"
                      checked={!!field.value || false}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  </FormControl>
                )}
              />
            </div>
            <CardContent className="mt-4 p-4">
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
