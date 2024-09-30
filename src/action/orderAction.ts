// import { options } from '@/app/api/auth/[...nextauth]/options';
// import { CommonResType} from '@/types/responseType';
// import { promises } from 'dns';
// import { Session } from 'inspector/promises';
// import { getServerSession } from 'next-auth';
// import { string } from 'zod';

// export const getorderproduct = async (
//   page?: number,
//   size?: number,
//   year?: number,
// ): Promise<OrderListType> => {
//   const session = await getServerSession(options);
//   console.log(session);

//   if (!session) {
//     throw new Error('session is null');
//   }

//   //파라미터가 존재할 경우 ,
//   const parms = new URLSearchParams();
//   if (page) parms.append('page', String(page));
//   if (size) parms.append('size', String(size));
//   if (year) parms.append('year', String(year));

//   const res = await fetch(
//     `${process.env.BASE_API_URL}/purchase/list?${parms.toString()}`,
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${session.user?.accessToken}`, // 문자열 템플릿 올바르게 사용
//       },
//       cache: 'no-cache',

//       // 필요한 값 전달
//     },
//   );

//   if (!res.ok) {
//     throw new Error('API response failed');
//   }

//   const data = (await res.json()) as CommonResType<OrderListType>;
//   console.log(data);
//   return data.result;
// };
