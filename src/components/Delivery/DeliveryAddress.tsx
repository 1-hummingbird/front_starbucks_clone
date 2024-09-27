'use client';

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { addDeliveryAddress } from "@/action/deliveryAction";
import { AddDeliveryRequest } from "@/types/addDeliveryRequest";

function DeliveryAddress() {
  const router = useRouter();
  const [formData, setFormData] = useState<AddDeliveryRequest>({
    addressNickname: '',
    name: '',
    address: '',
    phone: '',
    memo: '',
    isDefault: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDeliveryAddress(formData);
      router.push('/delivery');
    } catch (error) {
      console.error('Failed to add delivery address:', error);
      alert('Failed to add delivery address. Please try again.');
    }
  };

  return (
    <>
      <div className="container">
        <div>
          <p className="m-1.5 p-3.5 text-5xl">배송지 정보</p>
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
                value={formData.addressNickname}
                onChange={handleChange}
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="name">받는 분</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="address">주소</label>
              <br />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="phone">연락처</label>
              <br />
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border-2 border-solid"
                required
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="memo">배송 메모</label>
              <br />
              <input
                placeholder="배송메모를 남겨주세요."
                type="text"
                id="memo"
                name="memo"
                value={formData.memo}
                onChange={handleChange}
                className="border-2 border-solid"
              />
            </div>

            <div className="py-3">
              <input
                type="checkbox"
                id="isDefault"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
              />
              <label htmlFor="isDefault">기본 배송지로 저장합니다.</label>
            </div>

            <div>
              <button type="submit" className="bottom-0 left-0 my-4 ml-9 w-3/4 rounded-full bg-[#02A862] py-4 text-center text-white">
                등록하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeliveryAddress;
