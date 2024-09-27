import DeliveryHeader from "@/components/Delivery/DeliveryHeader";
import DeliveryAddressUpdate from "@/components/Delivery/DeliveryAddressUpdate";
import React from "react";
import { DeliveryDto } from "@/types/deliveryDto";

interface DeliveryAddressUpdateProps {
  dto: DeliveryDto;
}

function page({ searchParams }: { searchParams: { deliveryDto: DeliveryDto } }) {
  const dto = searchParams.deliveryDto;
  return (
    <>  
      <DeliveryHeader />
      <DeliveryAddressUpdate dto={dto} />
    </>
  );
}

export default page;
