'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import Input from '../ui/input';
import { signIn } from 'next-auth/react';

const SignInForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      username: { value: string };
      password: { value: string };
    };
    const loginID = target.username.value;
    const password = target.password.value;
    console.log(loginID, password);
    signIn('credentials', {
      loginID,
      password,
      redirect: false,
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
        className="mt-12 flex w-full flex-col justify-center gap-2"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 w-full">
          <Input
            className="custom-input focus-visible:ring-transparent"
            type="text"
            placeholder="아이디"
          />
        </div>
        <div className="mb-4 w-full">
          <Input
            className="custom-input focus-visible:ring-transparent"
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <Button className="custom-button w-full" type="submit">
          <p className="text-lg">로그인</p>
        </Button>
        <Button className="custom-button custom-button-kakao" type="submit">
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
