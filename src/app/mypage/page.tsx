import React from "react";
import Order from "@/components/mypage/Order";
import ServiceList from "@/components/mypage/ServiceList";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <div>
      <Order />
      <ServiceList />
    </div>
  );
}

export default page;
