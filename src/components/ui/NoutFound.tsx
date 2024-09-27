import Image from 'next/image';
import React from 'react';

const NoutFound = () => {
  return (
    <section>
      <Image
        src={'https://drive.google.com/uc?id=1e_b2oCxc17e0GtrfPBM5UjR-lt18d7Q8'}
        alt="not-found"
        width={500}
        height={500}
        priority
      />
    </section>
  );
};

export default NoutFound;
