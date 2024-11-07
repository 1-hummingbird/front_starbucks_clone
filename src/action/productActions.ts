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

export const getNewItems = async () => {
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

  const product: Product[] = [];
  for await (const id of data) {
    product.push(await fetchProductById(id));
  }
  return product;

  // tip: Return에 promise가 들어가지 않도록 잘 풀어야만 해요 (Feat. @ewlkkf)
  // promise가 있으면 jsx에서 렌더링 되지 않아요
  // 로딩창 돌릴 때는 Promise 반환 통해서 로딩중인 상황을 보여줄 수 있어요
  // 그럼 if else로 type 체크를 해야 하는 상황이 오는데 shit happens
  // UX를 고려 했을 때 promise가 client에서 깨지면 사용자가 느려져서 기분 나빠요
  // +map은 타입 추론 안 될 때 있어요. nullable 할 때 주로 실패해요
  
  // const productPromises = data.map((id: number) => fetchProductById(id));
  // return await Promise.all(productPromises);
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

export const getAllNewItems = async (page: number): Promise<Product[]> => {
  const response = await fetch(`${process.env.BASE_API_URL}/product/list?orderCondition=NEWEST&page=${page}`);
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

export const getCategoryBestItems = async (topCode: string): Promise<Product[]> => {
  const response = await fetch(`${process.env.BASE_API_URL}/product/best-list/${topCode}`);

  if (!response.ok) {
    throw new Error('Failed to fetch product IDs');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result;
  const productPromises = data.map((id: number) => fetchProductById(id));
  return Promise.all(productPromises);
};

export const getAllProducts = async (page: number): Promise<Product[]> => {
  const response = await fetch(`${process.env.BASE_API_URL}/product/list?page=${page}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product IDs');
  }
  const jsonResponse = await response.json();
  const data = jsonResponse.result.content;
  const productPromises = data.map((id: number) => fetchProductById(id));
  return Promise.all(productPromises);
};
