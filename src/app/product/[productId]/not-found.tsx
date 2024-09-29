import NoutFound from '@/components/ui/NoutFound';
import React from 'react';

const NotFound = () => {
  return (
    <main className="flex h-[70vh] flex-col items-center justify-center">
      <NoutFound />
      <p className="text-3xl font-bold">존재하지 않는 상품입니다</p>
    </main>
  );
};

export default NotFound;
