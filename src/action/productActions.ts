'use server';

import {
  CommonResType,
  ProductImagesType,
  ProductTitleType,
  Product
} from '@/types/responseType';
import { ProductInfoType } from '@/types/requestType';
import { notFound } from 'next/navigation';

export const getProductInfo = async <T>(
  infoType: ProductInfoType,
  productId: number,
): Promise<T> => {
  const response = await fetch(
    `
    ${process.env.BASE_API_URL}/product/${infoType}/${productId}`,
    {
      method: 'GET',
    },
  );

  const result = (await response.json()) as CommonResType<T>;

  if (!result.isSuccess) {
    return notFound();
  }

  return result.result;
};

export const getProductImages = async (
  productId: number,
): Promise<ProductImagesType[]> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/product/images/${productId}`,
    {
      method: 'GET',
    },
  );

  const result = (await response.json()) as CommonResType<ProductImagesType[]>;

  if (!result.isSuccess) {
    console.log(result);
    return notFound();
  }

  return result.result;
};

export const getProductDetail = async (
  productId: number,
): Promise<ProductTitleType> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/product/info/${productId}`,
    { method: 'GET' },
  );
  const result = (await response.json()) as CommonResType<ProductTitleType>;
  return result.result;
};

export const getCustomerWishlist = async (): Promise<number[]> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/product/most-wish/list`,
    { method: 'GET' },
  );
  const result = (await response.json()) as CommonResType<number[]>;
  return result.result;
};

export const getProductDefaultImage = async (
  productId: number,
): Promise<string> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/product/list/image/${productId}`,
  );
  const result = (await response.json()) as CommonResType<{ src: string }>;
  return result.result.src;
};


export async function fetchProductById(id: number): Promise<Product> {
  const response = await fetch(`${process.env.BASE_API_URL}/product/info/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch product with id ${id}`);
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result;
  // Ensure data and data.icon exist
  if (!data.icon) {
    data.icon = {};
  }
  // append product id to data
  data.id = id;
  data.link = `/product/${id}`;
  data.icon.media = await getProductDefaultImage(id);
  return data;
}

export async function fetchProductsInfo(productIds: unknown): Promise<Product[]> {
  if (!Array.isArray(productIds)) {
    console.error('productIds is not an array:', productIds);
    return [];
  }
  const productPromises = productIds.map(id => fetchProductById(id));
  return Promise.all(productPromises);
}



export async function getProductIdsByQuery(query: string): Promise<(number | string)[]> {
  const response = await fetch(`${process.env.BASE_API_URL}/product/list?productName=${query}`);

  if (!response.ok) {
    throw new Error('Failed to fetch product IDs');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result.content;
  const productPromises = data.map((id: number) => fetchProductById(id));
  return Promise.all(productPromises);
}

export const getBestItems = async (): Promise<Product[]> => {
  const response = await fetch(`${process.env.BASE_API_URL}/product/best-list/cup`);

  if (!response.ok) {
    throw new Error('Failed to fetch product IDs');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result;
  const list = data.slice(0, 12);
  const productPromises = list.map((id: number) => fetchProductById(id));
  return Promise.all(productPromises);
};

export const getNewItems = async (): Promise<Product[]> => {
  const response = await fetch(`${process.env.BASE_API_URL}/product/list?orderCondition=NEWEST&size=12`);
  if (!response.ok) {
    throw new Error('Failed to fetch product IDs');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result.content;
  if (!Array.isArray(data)) {
    console.error('Unexpected data format:', data);
    return []; // Return an empty array if data is not as expected
  }
  const productPromises = data.map((id: number) => fetchProductById(id));
  return Promise.all(productPromises);
};

export async function getProductIdsByCategory(category: string, page: number): Promise<Product[]> {
  const response = await fetch(`${process.env.BASE_API_URL}/product/list?topCode=${category}&page=${page}`);

  if (!response.ok) {
    throw new Error('Failed to fetch product IDs');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result.content;
  const productPromises = data.map((id: number) => fetchProductById(id));
  return Promise.all(productPromises);
}

export async function getCategoryName(code: string): Promise<string> {
  const response = await fetch(`${process.env.BASE_API_URL}/category/top-category/${code}`);
  if (!response.ok) {
    throw new Error('Failed to fetch category name');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result;
  const trimmedCategoryName = data.topCategoryName.slice(2);
  return trimmedCategoryName;
}
