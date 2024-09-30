import DeliveryHeader from "@/components/Delivery/DeliveryHeader";
import DeliveryAddressUpdate from '@/components/Delivery/DeliveryAddressUpdate';
import React from "react";


function page({ searchParams }: { searchParams: { dto: string } }) {
  const decodedDto = decodeURIComponent(searchParams.dto);
  const deliveryDto = JSON.parse(decodedDto);
  console.log(deliveryDto);
  return (
    <>  
      <DeliveryHeader />
      <DeliveryAddressUpdate dto={deliveryDto} />
    </>
  );
}

export default page;
