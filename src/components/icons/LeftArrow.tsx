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
      <ChevronLeft strokeWidth={1} size={24} className="opacity-80" />
    </div>
  );
};

export default LeftArrow;
