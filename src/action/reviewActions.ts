'use server';

import {
  CommonResType,
  ReviewContentType,
  ReviewListType,
  ReviewTitleType,
} from '@/types/responseType';

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
  size: number = 40,
  showPhoto: boolean = false,
): Promise<ReviewListType> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/review/list/${productId}?page=${page}&size=${size}&showPhoto=${showPhoto}`,
    {
      method: 'GET',
    },
  );

  const result = (await response.json()) as CommonResType<ReviewListType>;
  return result.result;
};

export const getRivewContent = async (
  reviewId: number,
): Promise<ReviewContentType> => {
  'use client';
  const response = await fetch(
    `${process.env.BASE_API_URL}/review/info/${reviewId}`,
    {
      method: 'GET',
    },
  );
  const result = (await response.json()) as CommonResType<ReviewContentType>;
  return result.result;
};
