'use client';
import { Form } from '@/components/ui/form';
import { RegisterSchema, RegisterType, defaultValues } from '@/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<RegisterType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
    mode: 'all',
  });

  const { handleSubmit } = methods;

  const onSubmit = (formValues: RegisterType) => {
    console.log(formValues);
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormProvider;
