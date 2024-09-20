"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

function Page() {
  return (
    <div>
      <Button
        onClick={() =>
          signOut({
            callbackUrl: "/",
          })
        }
      >
        로그아웃
      </Button>
    </div>
  );
}

export default Page;
