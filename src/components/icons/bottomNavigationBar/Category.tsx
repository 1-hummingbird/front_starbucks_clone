import { routes } from '@/config/routes';
import Link from 'next/link';
import React from 'react';

const Category = () => {
  return (
    <Link href={`${routes.allProducts}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
      >
        <path
          fill="#000"
          d="M22.4 8H5.6v1.2h16.8V8ZM22.4 12.8H5.6V14h16.8v-1.2ZM22.4 17.6H5.6v1.2h16.8v-1.2Z"
        />
      </svg>
    </Link>
  );
};

export default Category;
