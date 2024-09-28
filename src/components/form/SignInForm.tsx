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
import SignInHeader from '../pages/signin/SignInHeader';
import Kakao from 'next-auth/providers/kakao';
import KakaoLogo from '../icons/KakaoLogo';
import SignInLinkList from '../pages/signin/SignInLinkList';

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
    <section className="px-7 pt-10">
      <SignInHeader />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-10 w-full max-w-md rounded-lg text-black"
      >
        <div className="mb-4 w-full">
          <Input
            className="border-none px-0 focus-visible:ring-transparent"
            type="text"
            placeholder="아이디"
            {...register('loginID', {
              required: ' 아이디를 입력해주세요',
            })}
          />
          <hr className="border-1 border-gray-300" />
          <p className="text-[#e71212]">{errors.loginID?.message}</p>
        </div>
        <div className="mb-4 w-full">
          <Input
            className="border-none px-0 focus-visible:ring-transparent"
            type="password"
            placeholder="비밀번호"
            {...register('password', {
              required: ' 비밀번호를 입력해주세요',
            })}
          />
          <hr className="border-1 border-gray-300" />
          <p className="text-[#e71212]">{errors.password?.message}</p>
        </div>
        <div className="fixed bottom-5 left-0 grid w-full grid-cols-12 gap-2 px-5">
          <Button
            className="col-span-10 w-full bg-starbucks py-6"
            style={{ borderRadius: '30px' }}
            type="submit"
          >
            로그인하기
          </Button>
          <Button
            className="col-span-2 w-full bg-[#fae000] py-6"
            style={{ borderRadius: '30px', color: 'black' }}
            type="button"
            onClick={() => {
              signIn('kakao');
            }}
          >
            <KakaoLogo />
          </Button>
        </div>
      </form>
      <SignInLinkList />
    </section>
  );
};

export default SignInForm;
