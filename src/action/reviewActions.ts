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

export const getReivewList = async (
  productId: number,
  page: number = 0,
  size: number = 1,
  sort: string = 'string',
  showPhoto: boolean = true,
) => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/review/list/${productId}?page=${page}&size=${size}&sort=${sort}&showPhoto=${showPhoto}`,
    {
      method: 'GET',
    },
  );

  const result = await response.json();
  // console.log(result);
  return result;
};
