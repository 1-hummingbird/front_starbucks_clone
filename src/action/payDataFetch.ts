"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { CommonResType, PayItemType } from "@/types/responseType";
import { getServerSession } from "next-auth";

export const getPayItemDatas = async (
  productId: number,
): Promise<PayItemType> => {
  ("use server");
  const session = await getServerSession(options);

  console.log(session);

  if (!session) {
    throw new Error("session is null");
  }

  const res = await fetch(
    `${process.env.BASE_API_URL}/product/options/${productId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session.user?.accessToken}`,
      },
    },
  );

  if (!res) {
    throw new Error("error");
  }

  const data = (await res.json()) as CommonResType<PayItemType>;
  console.log("Pay", data);
  return data.result;
};
