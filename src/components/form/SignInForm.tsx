'use client';

import { useToast } from '@/hooks/use-toast';
import { User } from '@/types/requestType';
import { signIn } from 'next-auth/react';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import SignInHeader from '../pages/signin/SignInHeader';
import SignInLinkList from '../pages/signin/SignInLinkList';
import { Button } from '../ui/button';
import Input from '../ui/input';
import ShowToast from '../util/ShowToast';

const SignInForm = () => {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<User>();

  const onSubmit = async (values: User) => {
    startTransition(async () => {
      const result = await signIn('credentials', {
        loginID: values.loginID,
        password: values.password,
        redirect: false,
      });
      if (result?.ok) {
        window.location.href = '/';
      } else {
        setError('loginID', {
          type: 'manual',
          message: '아이디를 확인해 주세요',
        });
        setError('password', {
          type: 'manual',
          message: '비밀번호를 확인해 주세요',
        });
      }
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
        <div className="fixed bottom-5 grid w-full grid-cols-12 gap-2 px-5">
          <Button
            className="col-span-10 w-full bg-starbucks py-6"
            style={{ borderRadius: '30px' }}
            type="submit"
          >
            로그인하기
          </Button>
        </div>
      </form>
      <SignInLinkList />
    </section>
  );
};

export default SignInForm;
