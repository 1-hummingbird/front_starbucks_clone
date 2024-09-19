"use client";
import { User } from "@/app/types/requestType";
import { useForm } from "react-hook-form";

// const schema = z.object({
//   id: z.string(),
//   password: z.string(),
// });

const SignInForm = () => {
  // const form = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = (values: User) => {
    console.log(values);
  };

  return (
    <section className="mt-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-[80%] gap-2 mx-auto"
      >
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="아이디"
            {...register("id", {
              required: " 아이디를 입력해주세요",
            })}
          />
          <p>{errors.id?.message}</p>
        </div>
        <div className="w-full mb-4">
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
