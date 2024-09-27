import DeliveryHeader from "@/components/Delivery/DeliveryHeader";
import DeliveryAddressUpdate from "@/components/Delivery/DeliveryAddressUpdate";
import React from "react";

function page({ searchParams }: { searchParams: { id: number } }) {
  const shippingAddressID = searchParams.id;
  return (
    <>
      <DeliveryHeader />
      <DeliveryAddressUpdate shippingAddressID={shippingAddressID} />
    </>
  );
}

export default page;
