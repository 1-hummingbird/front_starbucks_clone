import { routes } from '@/config/routes';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <Link href={`${routes.home}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M14 4.88 5.6 11.6v10.8h16.8V11.6L14 4.88ZM11.6 21.2v-4.8h4.8v4.8h-4.8Zm6 0h3.6v-9L14 6.44 6.8 12.2v9h3.6v-6h7.2v6Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default Home;
