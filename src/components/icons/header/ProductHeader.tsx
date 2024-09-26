'use client';

import HomeLogo from './HomeLogo';
import Image from 'next/image';
import Input from '@/components/ui/input';

const ProductHeader = () => {
  return (
    <header className="mr-3 flex h-[56px] items-center gap-2">
      {/* <LeftArrow /> */}
      <HomeLogo />
      <Input className="w-2/5 focus-visible:ring-transparent" />
      {/* 뒤로가기, 입력 폼, */}
    </header>
  );
};

export default ProductHeader;
