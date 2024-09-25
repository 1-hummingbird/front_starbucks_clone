'use server';
import { options } from '@/app/api/auth/[...nextauth]/options';
import {
  CartItemType,
  CartListType,
  CommonResType,
  ImageByCartIdType,
  ShippingAddressType,
} from '@/types/responseType';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';

export const getShippingDefaultAddress =
  async (): Promise<ShippingAddressType> => {
    const session = await getServerSession(options);
    ('use server');
    console.log(session);

    if (!session) {
      throw new Error('session is null');
    }

    const res = await fetch(
      `${process.env.BASE_API_URL}/api/v1/shipping/get-default`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.user?.accessToken}`,
        },
      },
    );

    if (!res) {
      throw new Error('error');
    }

    const data = (await res.json()) as CommonResType<ShippingAddressType>;
    console.log(data);
    return data.result;
  };

export const getCartDatas = async (): Promise<CartListType> => {
  const session = await getServerSession(options);
  ('use server');

  if (!session) {
    throw new Error('session is null');
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/cart/items/member`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
      cache: 'no-cache',
    },
  );

  if (!res) {
    throw new Error('error');
  }

  const data = (await res.json()) as CommonResType<CartListType>;
  return data.result;
};

export const getCartItemData = async (
  cartId: number,
): Promise<CartItemType> => {
  const session = await getServerSession(options);
  ('use server');
  console.log(session);

  if (!session) {
    throw new Error('session is null');
  }

  const res = await fetch(`${process.env.BASE_API_URL}/api/v1/cart/item/info`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
    body: JSON.stringify({ cartId }),
    next: { tags: ['getCart'] },
  });

  if (!res) {
    throw new Error('error');
  }

  const data = (await res.json()) as CommonResType<CartItemType>;
  return data.result;
};

export const getCartProductImageData = async (
  cartId: number,
): Promise<ImageByCartIdType> => {
  const session = await getServerSession(options);
  ('use server');
  console.log(session);

  if (!session) {
    throw new Error('session is null');
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/api/v1/cart/item/image/${cartId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
      cache: 'no-cache',
    },
  );

  if (!res) {
    throw new Error('error');
  }

  const data = (await res.json()) as CommonResType<ImageByCartIdType>;
  return data.result;
};
