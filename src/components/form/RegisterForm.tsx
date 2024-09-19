"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "./InputField";
import { RegisterSchema, RegisterType } from "@/app/types/auth";

export interface registerInputField {
  id: number;
  field: string;
  type: string;
  placeholder: string;
  duplicateCheck?: boolean;
}

const registerInputFields: registerInputField[] = [
  {
    id: 1,
    field: "loginId",
    type: "text",
    placeholder: "아이디",
    duplicateCheck: true,
  },
  {
    id: 2,
    field: "password",
    type: "password",
    placeholder: "비밀번호 (8자리 이상)",
  },
  {
    id: 3,
    field: "passwordConfirm",
    type: "password",
    placeholder: "비밀번호 확인",
  },
  {
    id: 4,
    field: "email",
    type: "email",
    placeholder: "이메일",
    duplicateCheck: true,
  },
  { id: 5, field: "name", type: "text", placeholder: "이름" },
  { id: 6, field: "nickname", type: "text", placeholder: "닉네임" },
  {
    id: 7,
    field: "phone",
    type: "text",
    placeholder: "전화번호",
    duplicateCheck: true,
  },
  { id: 8, field: "birthdate", type: "text", placeholder: "생년월일 8자리" },
];

const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (values: RegisterType) => {
    console.log(values);
  };

  return (
    <section className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <ul className="space-y-4">
            {registerInputFields.map((item) => {
              return (
                <li key={item.id}>
                  <InputField
                    name={item.field}
                    type={item.type}
                    placeholder={item.placeholder}
                    duplicateCheck={item?.duplicateCheck}
                    control={control}
                    errors={errors}
                  />
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center">
            <button className="mt-4 h-12 w-full rounded border-2 bg-[#006241] text-white">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;
