"use client"; // Add this line

import React from "react";

function DeliveryButton() {
  return (
    <>
      <div>
        <div className="fixed bottom-12 left-0 my-4 ml-9 w-3/4 rounded-full bg-[#02A862] py-4 text-center text-white">
          <a href="delivery/newdelivery">+ 새 배송지 추가</a>
        </div>
      </div>
    </>
  );
}

export default DeliveryButton;
