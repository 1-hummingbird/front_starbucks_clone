import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllNewItems } from '@/action/productActions';

export default async function Page({ params }: { params: { page: number } }) {
  const products = await getAllNewItems(params.page);
  const renderProducts = () => {
    return (
      <div className="p-4">
        <h1 className="mb-4 text-2xl font-bold text-center text-green-700">신상품</h1>
        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <Link href={product.link} key={product.id}>
                <div className="transform transition-transform hover:scale-105">
                  <div className="product-content rounded-lg p-4 shadow-lg">
                    <Image 
                      src={product.icon?.media}
                      alt={product.name} 
                      width={112} 
                      height={112}
                      className="mx-auto rounded-lg"
                    />
                    <div className="mt-4 text-start">
                      <h3 className="text-base font-semibold">{product.name}</h3>
                      <p className="font-semibold text-gray-700">{product.price.toLocaleString()} 원</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    );
  }
  return renderProducts();
}

