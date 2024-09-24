"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {
  CartItemType,
  CartListType,
  CommonResType,
  ImageByCartIdType,
  ShippingAddressType,
} from "@/types/responseType";
import { getServerSession } from "next-auth";

export const getShippingDefaultAddress =
  async (): Promise<ShippingAddressType> => {
    const session = await getServerSession(options);
    ("use server");
    console.log(session);

    if (!session) {
      throw new Error("session is null");
    }

    const res = await fetch(
      `${process.env.BASE_API_URL}/shipping/get-default`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user?.accessToken}`,
        },
      },
    );

    if (!res) {
      throw new Error("error");
    }

    const data = (await res.json()) as CommonResType<ShippingAddressType>;
    console.log("배송지 :", data);
    return data.result;
  };

//   cart

export const getCartDatas = async (): Promise<CartListType> => {
  const session = await getServerSession(options);
  ("use server");
  console.log(session);

  if (!session) {
    throw new Error("session is null");
  }

  const res = await fetch(`${process.env.BASE_API_URL}/cart/items/member`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
    cache: "no-cache",
  });

  if (!res) {
    throw new Error("error");
  }

  const data = (await res.json()) as CommonResType<CartListType>;
  console.log("카트:", data);
  return data.result;
};

// 아이템

export const getCartItemData = async (
  cartId: number,
): Promise<CartItemType> => {
  const session = await getServerSession(options);
  ("use server");
  console.log(session);

  if (!session) {
    throw new Error("session is null");
  }

  const res = await fetch(`${process.env.BASE_API_URL}/cart/item/info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
    cache: "no-cache",
  });

  if (!res) {
    throw new Error("error");
  }

  const data = (await res.json()) as CommonResType<CartItemType>;
  console.log("아이템", data);
  return data.result;
};

// 장바구니 이미지
export const getCartProductImageData = async (
  cartId: number,
): Promise<ImageByCartIdType> => {
  const session = await getServerSession(options);
  ("use server");
  console.log(session);

  if (!session) {
    throw new Error("session is null");
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/cart/item/image/{cartId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
      cache: "no-cache",
    },
  );

  if (!res) {
    throw new Error("error");
  }

  const data = (await res.json()) as CommonResType<ImageByCartIdType>;
  return data.result;
};

// export const PayListType = async (
//   cartId: number,
// ): Promise<ImageByCartIdType> => {
//   const session = await getServerSession(options);
//   ("use server");
//   console.log(session);

//   if (!session) {
//     throw new Error("session is null");
//   }

//   const res = await fetch(
//     `${process.env.BASE_API_URL}/cart/item/image/{cartId}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${session.user?.accessToken}`,
//       },
//       cache: "no-cache",
//     },
//   );

//   if (!res) {
//     throw new Error("error");
//   }

//   const data = (await res.json()) as CommonResType<ImageByCartIdType>;
//   return data.result;
// };
