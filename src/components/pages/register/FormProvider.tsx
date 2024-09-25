'use client';

import { RegisterSchema, RegisterValues, defaultValues } from '@/types/auth';
import { isValueAvailable, registerUser } from '@/action/authActions';

import { Form } from '@/components/ui/form';
import React from 'react';
import { RegisterRequest } from '@/types/requestType';
import ShowToast from '@/components/util/ShowToast';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const methods = useForm<RegisterValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const { handleSubmit, setError } = methods;

  const onSubmit = async (values: RegisterRequest) => {
    const birthdate = `${values.birthdate.slice(0, 4)}-${values.birthdate.slice(4, 6)}-${values.birthdate.slice(6, 8)}`;
    const body = {
      loginID: values.loginID,
      name: values.name,
      nickname: values.nickname,
      birthdate: birthdate,
      phone: values.phone,
      email: values.email,
      password: values.password,
    };

    const response = await isValueAvailable('checkPhone', body.phone);
    const isValidPhone = response.result.available;

    if (!isValidPhone) {
      setError('phone', {
        type: 'manual',
        message: '이미 사용중인 전화번호 입니다.',
      });
      return;
    }

    const result = await registerUser(body);

    if (result.isSuccess) {
      ShowToast({ message: '회원가입이 완료되었습니다!', iconType: 'success' });
      setTimeout(() => {
        signIn('credentials', {
          loginID: body.loginID,
          password: body.password,
          redirect: true,
          callbackUrl: '/',
        });
      }, 2000);
    }
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormProvider;
