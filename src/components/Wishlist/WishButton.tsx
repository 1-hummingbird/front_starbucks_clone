import Link from "next/link";
import React from "react";

function WishButton() {
  return (
    <>
      <div className="absolute inset-x-0 bottom-0 my-5 flex justify-center space-x-4 rounded-xl">
        <Link href="/cart">
          <button className="rounded-xl border-2 bg-green-600 px-4 py-2 text-white">
            장바구니 담기
          </button>
        </Link>
        <Link href="/pay">
          <button className="rounded-xl border-2 bg-green-600 px-4 py-2 text-white">
            구매하기
          </button>
        </Link>
      </div>
    </>
  );
}

export default WishButton;
