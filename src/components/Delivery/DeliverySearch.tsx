"use client";
import React from "react";
import { useState } from "react";

const DeliverySearch = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="p-5">
      <div className="text-4xl">
        <p>어디로 배송할까요?</p>
      </div>

      <div className="">
        <div>
          <input
            type="text"
            placeholder="지번, 도로명, 건물명을 입력하세요"
            className="m-1.5 p-3.5 w-2/4 bg-zinc-300"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button
            type="button"
            className={`rounded-full text-white text-center py-4 w-2/4 ${
              inputValue
                ? "bg-[#01A862] cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={!inputValue}
          >
            주소 검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliverySearch;
