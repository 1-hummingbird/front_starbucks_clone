import { options } from '@/app/api/auth/[...nextauth]/options';
import { ProductInfoType } from '@/types/requestType';
import { CommonResType } from '@/types/responseType';
import { getServerSession } from 'next-auth';
import { notFound } from 'next/navigation';

// export const productFilter = async () => {
//   const session = await getServerSession(options);
//   const res = await fetch(`${process.env.BASE_API_URL}/product/list`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

//   if (!res) {
//     throw new Error('error');
//   }

//   const data = await res.json();
//   console.log('get product: ', data);
//   return data.result;
// };

// 상품리스트 조회

export const productFilter = async () => {
  const session = await getServerSession(options);
  console.log(session);

  const res = await fetch(`${process.env.BASE_API_URL}/product/list`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!res) {
    throw new Error('error');
  }

  const data = await res.json();
  console.log('all', data);
  return data.result;
};

// 상품 리스트  단건 조회
export const getProductInfolist = async <T>(
  p0: string,
  productId: number,
): Promise<T> => {
  const response = await fetch(
    `
    ${process.env.BASE_API_URL}/product/list/info/{productId}`,
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

// 상품 단건 이미지 조회
export const getProductInfoimage = async <T>(
  p0: string,
  productId: number,
): Promise<T> => {
  const response = await fetch(
    `
    ${process.env.BASE_API_URL}/product/list/image/{productId}`,
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
