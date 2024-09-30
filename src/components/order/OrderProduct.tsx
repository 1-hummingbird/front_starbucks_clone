import { getCartProductImageData } from '@/action/cartAction';
import React from 'react';
import Image from 'next/image';

async function OrderProduct() {
  // 더미 데이터
  const orderItems = [
    {
      id: 1,
      code: '1234567891',
      date: '2024-09-20',
      name: '[스타벅스]북클럽 밀크 글라스 355ml',
      quantity: 1,
      price: 24000,
      imageUrl:
        'https://sitem.ssgcdn.com/86/41/58/item/1000614584186_i1_600.jpg',
    },
    {
      id: 2,
      code: '1234567892',
      date: '2024-09-21',
      name: '[스타벅스]SS펭귄북스 틸튼 텀블러 355ml',
      quantity: 3,
      price: 40000,
      imageUrl:
        'https://sitem.ssgcdn.com/71/73/58/item/1000614587371_i1_600.jpg',
    },
    {
      id: 3,
      code: '1234567893',
      date: '2024-09-22',
      name: '[스타벅스] JON 블랙 워드마크 보온병 480ml',
      quantity: 2,
      price: 48000,
      imageUrl:
        'https://sitem.ssgcdn.com/53/55/40/item/1000614405553_i1_600.jpg',
    },
    {
      id: 4,
      code: '1234567894',
      date: '2024-09-23',
      name: '[스타벅스] SS 25주년 기념 킨토 데이오프 텀블러 500ml',
      quantity: 5,
      price: 60000,
      imageUrl:
        'https://sitem.ssgcdn.com/88/70/19/item/1000604197088_i1_290.jpg',
    },
    {
      id: 5,
      code: '1234567895',
      date: '2024-09-24',
      name: '[스타벅스][플립리드 증정] SS 쿨 써머 파인니 콜드컵 473ml',
      quantity: 1,
      price: 20000,
      imageUrl:
        'https://sitem.ssgcdn.com/14/62/26/item/1000609266214_i1_290.jpg',
    },
    {
      id: 6,
      code: '1234567896',
      date: '2024-09-25',
      name: '상품 이름 6',
      quantity: 4,
      price: 40000,
      imageUrl:
        'https://sitem.ssgcdn.com/31/39/62/item/1000291623931_i1_290.jpg',
    },
    {
      id: 7,
      code: '1234567897',
      date: '2024-09-26',
      name: '[스타벅스] 우드 핸들 글라스 서버 680ml',
      quantity: 2,
      price: 36000,
      imageUrl:
        'https://sitem.ssgcdn.com/31/39/62/item/1000291623931_i1_290.jpg',
    },
    {
      id: 8,
      code: '1234567898',
      date: '2024-09-27',
      name: '[스타벅스] 테라조 민트 머그 414ml',
      quantity: 3,
      price: 20000,
      imageUrl:
        'https://sitem.ssgcdn.com/10/05/53/item/1000571530510_i1_600.jpg',
    },
    {
      id: 9,
      code: '1234567899',
      date: '2024-09-28',
      name: '[스타벅스] JNX 그린 워드마크 보온병 500ml',
      quantity: 6,
      price: 480000,
      imageUrl:
        'https://sitem.ssgcdn.com/50/84/75/item/1000355758450_i1_600.jpg',
    },
    {
      id: 10,
      code: '1234567900',
      date: '2024-09-29',
      name: '[스타벅스] 레이니 데일리 워터보들 1000ml',
      quantity: 2,
      price: 34000,
      imageUrl:
        'https://sitem.ssgcdn.com/78/72/47/item/1000598477278_i1_600.jpg',
    },
  ];

  return (
    <>
      <h2 className="px-5 pb-3 pt-20 text-2xl font-bold">주문 내역</h2>

      <div className="p-5">
        {orderItems.map((item) => (
          <div
            key={item.id}
            className="mb-4 border border-dashed border-gray-300 p-4"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="flex-shrink-0 text-sm font-semibold">
                상품 코드: {item.code}
              </p>
              <p className="flex-shrink-0 text-sm text-gray-500">
                결제 날짜: {item.date}
              </p>
            </div>

            <div className="flex items-center">
              <div className="mr-4 h-20 w-20">
                <Image
                  src={item.imageUrl}
                  alt="상품 이미지"
                  className="object-cover"
                  width={80}
                  height={80}
                />
              </div>

              <div>
                <p className="text-lg font-semibold">{item.name}</p>

                <div className="mt-2 flex space-x-4">
                  <p className="text-sm text-gray-500">
                    수량: {item.quantity}개
                  </p>
                  <p className="text-sm text-gray-500">
                    가격: {item.price.toLocaleString()}원
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OrderProduct;
