import { options } from "@/app/api/auth/[...nextauth]/options";
import { CommonResType, OrderListType } from "@/types/responseType";
import { getServerSession } from "next-auth";

export const getCartProductImageData = async (
  size: number,
  year: number,
): Promise<OrderListType> => {
  const session = await getServerSession(options);
  ("use server");
  console.log(session);

  if (!session) {
    throw new Error("session is null");
  }

  const res = await fetch(`${process.env.BASE_API_URL}/purchase/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user?.accessToken}`,
    },
  });

  if (!res) {
    throw new Error("error");
  }

  const data = (await res.json()) as CommonResType<OrderListType>;
  return data.result;
};
