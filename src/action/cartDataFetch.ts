"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import {
  CartItemType,
  CartListType,
  CommonResType,
  ImageByCartIdType,
  ShippingAddressType,
  ShippingDefaultIDType,
} from "@/types/responseType";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

// test

export const getDefaultShippingID =
  async (): Promise<ShippingDefaultIDType> => {
    const session = await getServerSession(options);
    ("use server");

    if (!session) {
      throw new Error("session is null");
    }

    const res = await fetch(`${process.env.BASE_API_URL}/shipping/default-id`, {
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

    const data = (await res.json()) as CommonResType<ShippingDefaultIDType>;
    return data.result;
  };

//  배송지 정보 불러오기
export const getShippingDetailByID = async (
  shippingDefaultID: number,
): Promise<ShippingAddressType> => {
  const session = await getServerSession(options);
  ("use server");

  if (!session) {
    throw new Error("session is null");
  }

  const res = await fetch(`${process.env.BASE_API_URL}/shipping/get-detail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
    body: JSON.stringify({ shippingDefaultID }), // 기본 배송지 ID를 POST 본문에 포함
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch shipping details");
  }

  const data = (await res.json()) as CommonResType<ShippingAddressType>;
  return data.result;
};

// 장바구니 id 리스트 조회

export const getCartDatas = async (): Promise<CartListType> => {
  const session = await getServerSession(options);
  ("use server");

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
  return data.result;
};

// 상품정보
export const getCartItemData = async (
  cartId: number,
): Promise<CartItemType> => {
  ("use server");
  const session = await getServerSession(options);

  console.log(session);

  if (!session) {
    throw new Error("session is null");
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/cart/item/info/${cartId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
      next: { tags: ["getCart"] },
    },
  );

  if (!res) {
    throw new Error("error");
  }

  const data = (await res.json()) as CommonResType<CartItemType>;
  console.log("get cart ---- : ", data);
  return data.result;
};

// 상품 이미지
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
    `${process.env.BASE_API_URL}/cart/item/image/${cartId}`,
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
