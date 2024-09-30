import { options } from '@/app/api/auth/[...nextauth]/options';
import { CommonResType } from '@/types/responseType';
import { getServerSession } from 'next-auth';

// export const getCartItemData = async (): Promise<GetProductListIdsResponse> => {
//   const session = await getServerSession(options);

//   console.log(session);

//   if (!session) {
//     throw new Error('session is null');
//   }

//   const res = await fetch(`${process.env.BASE_API_URL}/product/list`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${session.user?.accessToken}`,
//     },
//   });

//   if (!res) {
//     throw new Error('error');
//   }

//   const data = (await res.json()) as CommonResType<GetProductListIdsResponse>;
//   console.log('get product: ', data);
//   return data.result;
// };
