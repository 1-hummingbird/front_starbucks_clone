import React from 'react';
import Link from 'next/link';
import { getProductDefaultImage } from '@/action/productActions';
import { fetchProductsInfo, getProductIdsByQuery } from '@/action/productActions';
import Image from 'next/image';

interface SearchResultPageProps {
  searchParams: { query: string };
}

export default async function SearchResultPage({ searchParams }: SearchResultPageProps) {
    const query = decodeURIComponent(searchParams.query);
    try {
      const productIds = await getProductIdsByQuery(query);
      const products = await fetchProductsInfo(productIds);
      const productsWithImages = await Promise.all(products.map(async (product) => ({
        ...product,
        image: product.icon?.media || await getProductDefaultImage(product.id)
      })));
      const renderProducts = () => {
        return (
          <div className="p-4">
            <h1 className="mb-4 text-2xl font-bold">검색결과 "{query}"</h1>
            {productsWithImages.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {productsWithImages.map((product) => (
                  <Link href={product.link} key={product.id}>
                    <div className="transform transition-transform hover:scale-105">
                      <div className="product-content rounded-lg p-4 shadow-lg">
                        <Image 
                          src={product.image}
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
    } catch (error) {
      console.error('Error fetching products:', error);
      return <div>Error: Failed to fetch products. Please try again later.</div>;
    }
}
