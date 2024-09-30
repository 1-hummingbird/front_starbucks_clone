'use server';

import {
  CommonResType,
  ExhibitionImageType,
  ExhibitionListType,
} from '@/types/responseType';

export const getExhibitionList = async (): Promise<ExhibitionListType[]> => {
  const response = await fetch(`${process.env.BASE_API_URL}/exhibition/list`, {
    method: 'GET',
  });

  const result = (await response.json()) as CommonResType<ExhibitionListType[]>;
  return result.result;
};

export const getExhibitionImage = async (
  exhibitionId: number,
): Promise<ExhibitionImageType> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/exhibition/${exhibitionId}`,
    {
      method: 'GET',
    },
  );

  const result = (await response.json()) as CommonResType<ExhibitionImageType>;
  console.log('🚀 ~ getExhibitionImage ~ result:', result);

  return result.result;
};

export const getExhibitionProductList = async (
  exhibitionId: number,
): Promise<number[]> => {
  const response = await fetch(
    `${process.env.BASE_API_URL}/product/list/exhibition/${exhibitionId}`,
    {
      method: 'GET',
    },
  );

  const result = (await response.json()) as CommonResType<number[]>;
  return result.result;
};
