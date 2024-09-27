'use server';

import {
  CommonResType,
  ProductDetailType,
  ProductImagesType,
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
    console.log(result);
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
): Promise<ProductDetailType> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/product/info/${productId}`,
    { method: 'GET' },
  );
  const result = (await response.json()) as CommonResType<ProductDetailType>;
  console.log(result.result);
  return result.result;
};
