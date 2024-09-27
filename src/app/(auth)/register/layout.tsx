import React from 'react';

import { Metadata } from 'next';
import AuthHeader from '@/components/AuthHeader';
import FormProvider from '@/components/pages/register/FormProvider';

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
