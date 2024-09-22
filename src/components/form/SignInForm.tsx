'use client';
import { User } from '@/types/requestType';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import Input from '../ui/input';

const SignInForm = () => {
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
    <section className="flex h-[300px] w-5/6 flex-col justify-center">
      <Image
        src={'https://drive.google.com/uc?id=1iHH_Xlvk6b3zAQn-nwaUiLWgsxXfzr8I'}
        alt="logo"
        width={250}
        height={250}
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
        <Button className="custom-button custom-button-kakao" type="button">
          <p className="text-lg">카카오 로그인</p>
        </Button>
      </form>
      <div className="mt-10 flex justify-center gap-6">
        <p>아이디 찾기</p>
        <p>비밀번호 찾기</p>
        <p>회원가입</p>
      </div>
    </section>
  );
};

export default SignInForm;
