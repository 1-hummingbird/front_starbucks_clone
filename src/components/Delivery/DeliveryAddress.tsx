"use client";
import React, { useState } from "react";

function DeliveryAddress() {
  // 상태 관리를 위한 useState
  const [formData, setFormData] = useState({
    addressalias: "",
    name: "",
    address: "",
    tel: "",
    note: "",
    isDefault: false,
  });

  // 입력값이 변경될 때 호출되는 함수
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // form submit 이벤트 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // API 호출
      const response = await fetch("/api/v1/shipping/get-default", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // 성공적으로 등록했을 때 처리
        alert("배송지 정보가 성공적으로 등록되었습니다.");
      } else {
        // 실패 시 처리
        alert("배송지 등록에 실패했습니다.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("API 호출 중 오류가 발생했습니다.");
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div>
          <p className="m-1.5 p-3.5 text-5xl">배송지 정보</p>
        </div>

        <div className="m-1.5 p-4">
          <form onSubmit={handleSubmit}>
            {/* 주소 별칭 */}
            <div className="relative mb-6 w-full">
              <input
                type="text"
                id="addressalias"
                name="addressalias"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-lg text-black outline-none transition-all duration-300 focus:border-green-600"
                required
                value={formData.addressalias}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label
                htmlFor="addressalias"
                className="absolute left-0 top-2/4 -translate-y-3/4 transform text-black transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:translate-y-[-100%] peer-focus:text-sm peer-focus:text-green-600"
              >
                주소 별칭
              </label>
            </div>

            {/* 받는 분 */}
            <div className="relative mb-6 w-full">
              <input
                type="text"
                id="name"
                name="name"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-lg text-black outline-none transition-all duration-300 focus:border-green-600"
                required
                value={formData.name}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="absolute left-0 top-2/4 -translate-y-3/4 transform text-black transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:translate-y-[-100%] peer-focus:text-sm peer-focus:text-green-600"
              >
                받는 분
              </label>
            </div>

            {/* 기본주소 */}
            <div className="relative mb-6 w-full">
              <input
                type="text"
                id="address"
                name="address"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-lg text-black outline-none transition-all duration-300 focus:border-green-600"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="absolute left-0 top-2/4 -translate-y-3/4 transform text-black transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:translate-y-[-100%] peer-focus:text-sm peer-focus:text-green-600"
              >
                기본주소
              </label>
            </div>

            {/* 연락처 */}
            <div className="relative mb-6 w-full">
              <input
                type="text"
                id="tel"
                name="tel"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-lg text-black outline-none transition-all duration-300 focus:border-green-600"
                required
                value={formData.tel}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label
                htmlFor="tel"
                className="absolute left-0 top-2/4 -translate-y-3/4 transform text-black transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:translate-y-[-100%] peer-focus:text-sm peer-focus:text-green-600"
              >
                연락처
              </label>
            </div>

            {/* 배송 메모 */}
            <div className="relative mb-6 w-full">
              <input
                type="text"
                id="note"
                name="note"
                className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 text-lg text-black outline-none transition-all duration-300 focus:border-green-600"
                required
                value={formData.note}
                onChange={handleInputChange}
                placeholder=" "
              />
              <label
                htmlFor="note"
                className="absolute left-0 top-2/4 -translate-y-3/4 transform text-black transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-lg peer-focus:top-1 peer-focus:translate-y-[-100%] peer-focus:text-sm peer-focus:text-green-600"
              >
                배송 메모
              </label>
            </div>

            {/* 기본 배송지 저장 */}
            <div className="py-3">
              <input
                type="checkbox"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleInputChange}
              />
              <label className="ml-2 text-black">
                기본 배송지로 저장합니다.
              </label>
            </div>

            <button
              type="submit"
              className="bottom-0 left-0 my-4 ml-9 w-3/4 rounded-full bg-[#02A862] py-4 text-center text-white"
            >
              등록하기
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeliveryAddress;
