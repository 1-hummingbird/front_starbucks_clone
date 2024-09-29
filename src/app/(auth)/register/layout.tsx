import AuthHeader from '@/components/header/AuthHeader';
import FormProvider from '@/components/pages/register/FormProvider';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Register',
};

const RegisterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormProvider>
      <AuthHeader title="회원가입" />
      {children}
    </FormProvider>
  );
};

export default RegisterLayout;
