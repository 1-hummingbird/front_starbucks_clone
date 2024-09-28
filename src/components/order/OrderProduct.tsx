import { getCartProductImageData } from '@/action/cartAction';
import { getorderproduct } from '@/action/orderAction';
import React from 'react';

async function OrderProduct() {
  const getData = await getorderproduct();
  return (
    <>
      <h2 className="px-5 pb-3 pt-20 text-2xl font-bold">주문 내역</h2>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="flex-shrink-0 text-sm font-semibold">
            상품 코드: 1234567890
          </p>
          <p className="flex-shrink-0 text-sm text-gray-500">
            결제 날짜: 2024-09-27
          </p>
        </div>

        <div className="border border-dashed border-gray-300 p-4">
          <div className="flex items-center">
            <div className="mr-4 h-20 w-20">
              <img
                src="https://via.placeholder.com/80"
                alt="상품 이미지"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-lg font-semibold">상품 이름</p>

              <div className="mt-2 flex space-x-4">
                <p className="text-sm text-gray-500">수량: 2개</p>
                <p className="text-sm text-gray-500">가격: 50,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderProduct;
