'use server';

import { CommonResType, productThumnailType } from '@/types/responseType';

import { notFound } from 'next/navigation';

export const getProductThumbnail = async (
  productId: number,
): Promise<productThumnailType> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/product/list/image/${productId}`,
    {
      method: 'GET',
    },
  );

  const result = (await response.json()) as CommonResType<productThumnailType>;
  if (!result.isSuccess) {
    console.log(result);
    return notFound();
  }

  return result.result;
};
