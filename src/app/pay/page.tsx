import React from "react";
import PayDelivery from "../../components/mainpay/PayDelivery";
import PayPurchase from "../../components/mainpay/PayPurchase";
import PayCoupon from "../../components/mainpay/PayCoupon";
import PayM from "../../components/mainpay/PayM";
import PaySummation from "../../components/mainpay/PaySummation";

const Payment = () => {
  return (
    <>
      <PayDelivery />
      <PayPurchase />
      <PayCoupon />
      <PayM />
      <PaySummation />
    </>
  );
};

export default Payment;
