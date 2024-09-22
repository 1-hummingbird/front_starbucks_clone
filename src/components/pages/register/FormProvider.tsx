'use client';
import { Form } from '@/components/ui/form';
import { RegisterSchema, RegisterValues, defaultValues } from '@/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm<RegisterValues>({
    resolver: zodResolver(RegisterSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;

  const onSubmit = (formValues: RegisterValues) => {
    console.log('data :', formValues);
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
};

export default FormProvider;
