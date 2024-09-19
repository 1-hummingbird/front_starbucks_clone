"use client";
import { User } from "@/app/types/requestType";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import Input from "../ui/input";
import { Button } from "../ui/button";

const SignInForm = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<User>();

  // const onSubmit = (values: User) => {
  //   const result = signIn("credentials", {
  //     loginId: values.loginID,
  //     password: values.password,
  //     redirect: false,
  //     callbackUrl: "/",
  //   });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    signIn("credentials", {
      loginId: formData.get("id") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
  };

  return (
    // <section className="mt-20">
    //   <form
    //     onSubmit={handleSubmit(onSubmit)}
    //     className="mx-auto flex w-[80%] flex-col items-center justify-center gap-2"
    //   >
    //     <div className="mb-4 w-full">
    //       <input
    //         type="text"
    //         placeholder="아이디"
    //         {...register("loginID", {
    //           required: " 아이디를 입력해주세요",
    //         })}
    //       />
    //       <p>{errors.loginID?.message}</p>
    //     </div>
    //     <div className="mb-4 w-full">
    //       <input
    //         type="password"
    //         placeholder="비밀번호"
    //         {...register("password", {
    //           required: " 비밀번호를 입력해주세요",
    //         })}
    //       />
    //       <p>{errors.password?.message}</p>
    //     </div>
    //     <button type="submit">로그인</button>
    //   </form>
    // </section>
    // <section className="mx-auto mt-20 w-1/2">
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-20 flex w-3/4 flex-col items-center justify-center gap-6"
    >
      <Input
        type="text"
        name="loginId"
        placeholder="아이디"
        className="custom-input focus-visible:ring-transparent"
      />
      <Input
        type="password"
        name="password"
        placeholder="비밀번호"
        className="custom-input focus-visible:ring-transparent"
      />
      <Button type="submit" className="custom-button w-full">
        로그인
      </Button>
    </form>
  );
};

export default SignInForm;
