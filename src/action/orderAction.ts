import { options } from '@/app/api/auth/[...nextauth]/options';
import { CommonResType, OrderListType } from '@/types/responseType';
import { promises } from 'dns';
import { Session } from 'inspector/promises';
import { getServerSession } from 'next-auth';

// export const getorderData = async (
//   page: number,
//   size: number,
//   year: number,
// ): Promise<OrderListType> => {
//   const session = await getServerSession(options);
//   ('use server');
//   console.log(session);

//   if (!session) {
//     throw new Error('session is null');
//   }

//   const res = await fetch(`${process.env.BASE_API_URL}/purchase/list`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${session.user?.accessToken}`,
//     },
//   });

//   if (!res) {
//     throw new Error('error');
//   }

//   const data = (await res.json()) as CommonResType<OrderListType>;
//   console.log('data');
//   return data.result;
// };

export const getCartProductImageData = async (
  page: number,
  size: number,
  year: number,
): Promise<OrderListType> => {
  const session = await getServerSession(options);
  console.log(session);

  if (!session) {
    throw new Error('session is null');
  }

  const res = await fetch(`${process.env.BASE_API_URL}/purchase/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.user?.accessToken}`, // 문자열 템플릿 올바르게 사용
    },
    body: JSON.stringify({ page, size, year }), // 필요한 값 전달
  });

  if (!res.ok) {
    throw new Error('API response failed');
  }

  const data = (await res.json()) as CommonResType<OrderListType>;
  return data.result;
};
