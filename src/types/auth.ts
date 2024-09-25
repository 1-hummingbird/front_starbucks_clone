import { z } from 'zod';

export const RegisterSchema = z
  .object({
    loginID: z.string().min(1, { message: '아이디를 입력해주세요' }),
    password: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
    passwordConfirm: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' }),
    name: z.string().min(2, { message: '이름을 입력해 주세요' }),
    nickname: z.string().min(2, { message: '닉네임을 입력해 주세요' }),
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요' })
      .email({ message: '올바른 이메일을 입력해주세요' }),
    phone: z
      .string()
      .min(11, { message: '올바른 전화번호를 입력해주세요' })
      .max(11, { message: '올바른 전화번호를 입력해주세요' }),
    birthdate: z
      .string()
      .min(8, { message: '생년월일을 8자리를 입력해주세요' })
      .max(8, { message: '생년월일 8자리를 입력해 주세요' }),
    agree: z.boolean().refine((val) => val === true, {
      message: '이용 약관에 동의해야 합니다.',
    }),
    verificationCode: z
      .string()
      .min(6, { message: '인증 코드를 입력해주세요' }),
  })

  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export const defaultValues: RegisterValues = {
  loginID: '',
  password: '',
  passwordConfirm: '',
  name: '',
  nickname: '',
  email: '',
  phone: '',
  birthdate: '',
  agree: false,
  verificationCode: '',
};

export interface RegisterFormType<T> {
  id: number;
  name: keyof T;
  type: string;
  placeholder?: string;
  inputMode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | undefined;
  agree?: boolean;
  // verificationCode?: string;
}

export type RegisterValues = z.infer<typeof RegisterSchema>;
