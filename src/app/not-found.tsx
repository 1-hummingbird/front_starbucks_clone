import NoutFound from '@/components/ui/NoutFound';
import React from 'react';

const notFound = () => {
  return (
    <main className="flex h-[70vh] flex-col items-center justify-center">
      <NoutFound />
      <p className="text-2xl font-bold">존재하지 않는 페이지입니다.</p>
    </main>
  );
};

export default notFound;
