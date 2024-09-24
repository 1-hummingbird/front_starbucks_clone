'use client';

import { RegisterSchema, RegisterValues, defaultValues } from '@/types/auth';
import { isValueAvailable, registerUser } from '@/action/Auth';

import { Form } from '@/components/ui/form';
import React from 'react';
import { RegisterRequest } from '@/types/requestType';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<RegisterValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;

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

    const isValidLoginID = await isValueAvailable('checkLoginID', body.loginID);
    const isValidEmail = await isValueAvailable('checkEmail', body.email);
    const isValidPhone = await isValueAvailable('checkPhone', body.phone);

    const response = await registerUser(body);
    console.log('body :', body);
    console.log('response :', response);
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormProvider;
