'use client';

import LeftArrow from '../icons/LeftArrow';
import React from 'react';
import { useRouter } from 'next/navigation';

const AuthHeader = ({ title }: { title?: string }) => {
  const router = useRouter();
  return (
    <header className="mx-4 mt-6 flex">
      <LeftArrow />
      <div className="flex flex-grow items-center justify-center">
        <p className="text-xl">{title}</p>
      </div>
    </header>
  );
};

export default AuthHeader;
