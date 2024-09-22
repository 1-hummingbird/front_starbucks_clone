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
    name: z.string().min(2, '이름을 입력해 주세요'),
    nickname: z.string().min(2, '닉네임을 입력해 주세요'),
    email: z
      .string()
      .min(1, { message: '이메일을 입력하세요' })
      .email({ message: '올바른 이메일을 입력하세요' }),
    phone: z.string().min(10, { message: '올바른 전화번호를 입력하세요' }),
    birthdate: z.string().min(8, '생년월일을 입력해주세요').max(8),
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
};

export interface RegisterFormType {
  id: number;
  // name: (keyof RegisterType)[];
  name: string;
  type: string;
  placeholder: string;
  inputMode:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | undefined;
}

export type RegisterValues = z.infer<typeof RegisterSchema>;
