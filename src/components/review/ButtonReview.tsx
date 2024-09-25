"use client";
import React, { useState } from "react";

function ButtonReview() {
  const [isReviewButtonEnabled, setIsReviewButtonEnabled] = useState(false);

  // 구매 확정 버튼 클릭 시 확인 창 띄우기
  const handlePurchaseConfirm = () => {
    const isConfirmed = confirm("구매를 확정하시겠습니까?");
    if (isConfirmed) {
      setIsReviewButtonEnabled(true); // 확인 누르면 후기 작성 버튼 활성화
    }
  };

  return (
    <>
      <div className="flex gap-2 text-nowrap rounded-xl border-slate-500 pt-3">
        <button className="border-2 px-2 py-1" onClick={handlePurchaseConfirm}>
          구매 확정
        </button>

        <button
          className={`border-2 px-2 py-1 ${
            isReviewButtonEnabled ? "bg-white" : "bg-gray-300"
          }`}
          disabled={!isReviewButtonEnabled}
        >
          <a href="">후기 작성</a>
        </button>

        <button className="border-2 px-2 py-1">환불 요청</button>
      </div>
    </>
  );
}

export default ButtonReview;
