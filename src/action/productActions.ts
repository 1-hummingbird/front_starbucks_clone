'use server';

import {
  CommonResType,
  ProductImagesType,
  ProductTitleType,
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
