'use client';

import { Button } from '../ui/button';
import Image from 'next/image';
import Input from '../ui/input';
import Link from 'next/link';
import { User } from '@/types/requestType';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { useTransition } from 'react';

const SignInForm = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = async (values: User) => {
    startTransition(async () => {
      await signIn('credentials', {
        loginID: values.loginID,
        password: values.password,
        redirect: true,
        callbackUrl: '/',
      });
    });
  };

  return (
    <section className="flex h-full w-5/6 flex-col justify-center">
      <Image
        src={'https://drive.google.com/uc?id=1PVPlrCLtSsnBdBG8mb0vKhBQj7L04llO'}
        alt="logo"
        width={300}
        height={300}
        className="mx-auto mt-20"
        priority
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 flex w-full flex-col justify-center gap-2"
      >
        <div className="mb-4 w-full">
          <Input
            className="custom-input focus-visible:ring-transparent"
            type="text"
            placeholder="아이디"
            {...register('loginID', {
              required: ' 아이디를 입력해주세요',
            })}
          />
          <p className="text-[#e71212]">{errors.loginID?.message}</p>
        </div>
        <div className="mb-4 w-full">
          <Input
            className="custom-input focus-visible:ring-transparent"
            type="password"
            placeholder="비밀번호"
            {...register('password', {
              required: ' 비밀번호를 입력해주세요',
            })}
          />
          <p className="text-[#e71212]">{errors.password?.message}</p>
        </div>
        <Button className="custom-button w-full" type="submit">
          <p className="text-lg">로그인</p>
        </Button>
        <Button
          className="custom-button custom-button-kakao"
          type="button"
          onClick={() => {
            signIn('kakao');
          }}
        >
          <p className="text-lg">카카오 로그인</p>
        </Button>
      </form>
      <div className="mt-10 flex justify-center gap-6">
        <p>아이디 찾기</p>
        <p>비밀번호 찾기</p>
        <Link href="/register">
          <p>회원가입</p>
        </Link>
      </div>
    </section>
  );
};

export default SignInForm;
