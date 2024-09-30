import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface HomeLogoProps {
  w?: number;
  h?: number;
}

const HomeLogo = ({ w = 120, h = 40 }: HomeLogoProps) => {
  return (
    <Link className="flex items-center" href="/">
      <Image
        src={'https://drive.google.com/uc?id=1EiEp9lciZDWsjZZFrtgrqD2ZQXin0fri'}
        alt=""
        width={w}
        height={h}
        style={{ width: 'auto', height: 'auto' }}
        priority
      />
    </Link>
  );
};

export default HomeLogo;
