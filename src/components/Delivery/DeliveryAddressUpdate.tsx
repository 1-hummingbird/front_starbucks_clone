"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';  // Change this import
import { updateDeliveryAddress } from "@/action/deliveryAction";
import { UpdateDeliveryAddressRequest } from "@/types/updateDeliveryAddressRequest";

export default function DeliveryAddressUpdate({ shippingAddressID }: { shippingAddressID: number }) {
  const router = useRouter();
  const [formData, setFormData] = useState<UpdateDeliveryAddressRequest>({
    shippingAddressID: shippingAddressID,
    addressNickname: "",
    name: "",
    address: "",
    phone: "",
    memo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateDeliveryAddress(formData);
      router.push('/delivery');
    } catch (error) {
      console.error('Failed to update delivery address:', error);
      alert('Failed to update delivery address. Please try again.');
    }
  };

  return (
    <div className="container">
      <div>
        <p className="m-1.5 p-3.5 text-5xl">배송지 정보 수정</p>
      </div>

      <div className="m-1.5 p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group w-full">
            <label htmlFor="addressNickname">주소 별칭</label>
            <br />
            <input
              type="text"
              id="addressNickname"
              name="addressNickname"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.addressNickname}
            />  
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="name">받는 분</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="address">주소</label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="phone">연락처</label>
            <br />  
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="memo">배송 메모</label>
            <br />
            <textarea
              id="memo"
              name="memo"
              className="border-2 border-solid w-full"
              placeholder="배송메모를 남겨주세요."
              onChange={handleChange}
              value={formData.memo}
            />
          </div>

          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white">수정</button>
        </form>
      </div>
    </div>
  );
}