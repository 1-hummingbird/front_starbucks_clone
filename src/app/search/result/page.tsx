import React from 'react';
import { Product } from '@/types/responseType';
import Link from 'next/link';
import { getProductDefaultImage } from '@/action/productActions';
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
                  <Link href={`/product/${product.id}`} key={product.id}>
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

 

async function fetchProductById(id: number): Promise<Product> {
  const response = await fetch(`${process.env.BASE_API_URL}/product/info/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result;
  // append product id to data
  data.id = id;
  return data;
}



async function fetchProductsInfo(productIds: unknown): Promise<Product[]> {
  if (!Array.isArray(productIds)) {
    console.error('productIds is not an array:', productIds);
    return [];
  }

  const productPromises = productIds.map(id => fetchProductById(id));
  return Promise.all(productPromises);
}



async function getProductIdsByQuery(query: string): Promise<(number | string)[]> {
  const response = await fetch(`${process.env.BASE_API_URL}/product/list?productName=${query}`);

  if (!response.ok) {
    throw new Error('Failed to fetch product IDs');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result.content;

  return data;
}
}