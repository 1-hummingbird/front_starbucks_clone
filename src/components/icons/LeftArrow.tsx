import { ChevronLeft } from 'lucide-react';
import React from 'react';
import { useRouter } from 'next/navigation';

const LeftArrow = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
    >
      <ChevronLeft />
    </div>
  );
};

export default LeftArrow;
