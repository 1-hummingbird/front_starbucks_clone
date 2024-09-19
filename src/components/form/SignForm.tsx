"use client";
import { User } from "@/app/types/requestType";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (values: User) => {
    signIn("credentials", {
      loginId: values.loginID,
      password: values.password,
      redirect: true,
      callbackUrl: "/",
    });
    // console.log(values);
  };

  return (
    <section className="mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-[80%] flex-col items-center justify-center gap-2"
      >
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="아이디"
            {...register("loginID", {
              required: " 아이디를 입력해주세요",
            })}
          />
          <p>{errors.loginID?.message}</p>
        </div>
        <div className="mb-4 w-full">
          <input
            type="password"
            placeholder="비밀번호"
            {...register("password", {
              required: " 비밀번호를 입력해주세요",
            })}
          />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">로그인</button>
      </form>
    </section>
  );
};

export default SignInForm;
