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
      console.log('Product IDs:', productIds); // Add this line for debugging
  
      const products = await fetchProductsInfo(productIds);
      const productsWithImages = await Promise.all(products.map(async (product) => ({
        ...product,
        image: product.icon?.media || await getProductDefaultImage(product.id)
      })));

      const renderProducts = () => {
        return (
          <div>
            <h1>Search Results for "{query}"</h1>
            {productsWithImages.length > 0 ? (
              <ul>
              {productsWithImages.map((product) => (
                <li key={product.id}>
                  {product.name},
                  <Image 
                    src={product.image}
                    alt={product.name} 
                    width={100} 
                    height={100} 
                  />
                  {product.price},
                  <Link href={`/product/${product.id}`}>상세보기</Link>
                </li>
              ))}
              </ul>

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