import React from "react";
import fetchDeliveries from "@/action/deliveryAction";
import DeliveryClientComponent from "./DeliveryMainClientComponent";

async function DeliveryMain() {
  const deliveries = await fetchDeliveries();
  
  return <DeliveryClientComponent deliveries={deliveries} />;
}

export default DeliveryMain;