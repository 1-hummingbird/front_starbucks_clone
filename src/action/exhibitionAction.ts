'use server';

import { CommonResType, ExhibitionListType } from '@/types/responseType';

export const getExhibitionList = async (): Promise<ExhibitionListType[]> => {
  const response = await fetch(`${process.env.BASE_API_URL}/exhibition/list`, {
    method: 'GET',
  });

  const result = (await response.json()) as CommonResType<ExhibitionListType[]>;
  return result.result;
};
