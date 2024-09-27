'use server';

import { CommonResType, ReviewTitleType } from '@/types/responseType';

export const getReviewTitle = async (
  productId: number,
): Promise<ReviewTitleType> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/review/summary/${productId}`,
    {
      method: 'GET',
    },
  );

  const result = (await response.json()) as CommonResType<ReviewTitleType>;
  return result.result;
};
