"use client";
import { User } from "@/app/types/requestType";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SignInForm = () => {
  const [payload, setPayload] = useState<User>({
    loginID: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signIn("credentials", {
      loginID: payload.loginID,
      password: payload.password,
      redirect: true,
    });
  };

  return (
    <section className="mt-20">
      <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-[80%] flex-col items-center justify-center gap-2"
      >
        <div className="mb-4 w-full">
          <input
            type="text"
            placeholder="아이디"
            name="loginID"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 w-full">
          <input
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </section>
  );
};

export default SignInForm;
