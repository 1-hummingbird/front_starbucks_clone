import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const getCartAddress = async () => {
  const session = await getServerSession(options);
  ("use server");
  console.log(session);

  if (session) {
    const res = await fetch(
      `https://api.team-hummingbird.shop/api/v1/shipping/get-default`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.user?.accessToken}`,
        },
      },
    );

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      return data;
    }
  }

  return getServerSession;
};
