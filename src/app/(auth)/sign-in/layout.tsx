import '../../globals.css';

import AuthHeader from '@/components/header/AuthHeader';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'SignIn',
};

const SignInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AuthHeader title="로그인" />
      {children}
    </>
  );
};

export default SignInLayout;
