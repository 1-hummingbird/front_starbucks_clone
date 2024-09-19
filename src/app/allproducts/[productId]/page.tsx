import React from "react";
const dummyProducts = [
  {
    id: 1,
    name: "텀블러 A",
    category: "텀블러/보온병 | 플라스틱 텀블러",
    price: "33000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2024/02/[11150979]_20240216102103606.jpg",
    type: "new",
  },
  {
    id: 2,
    name: "머그 B",
    category: "머그/컵",
    price: "13000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9300000005108]_20240718093750805.jpg",
    type: "new",
  },
  {
    id: 3,
    name: "케이크 C",
    category: "케이크",
    price: "56000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[9300000005472]_20240820160552386.jpg",
    type: "best",
  },
  {
    id: 4,
    name: "스낵 D",
    category: "초콜릿/스낵",
    price: "21000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9300000004912]_20240305142647142.jpg",
    type: "new",
  },
  {
    id: 5,
    name: "글라스 A",
    category: "글라스, 머그/컵",
    price: "31000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2024/09/[9300000005316]_20240906144154541.jpg",
    type: "best",
  },
  {
    id: 6,
    name: "리유저블 A",
    category: "리유저블, 머그/컵",
    price: "41000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2023/06/[9300000004402]_20230609143302624.jpg",
    type: "new",
  },
  {
    id: 7,
    name: "케이크 A",
    category: "롤케이크, 케이크",
    price: "21000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9300000004912]_20240305142647142.jpg",
    type: "best",
  },
  {
    id: 8,
    name: "홀케이크 A",
    category: "홀케이크, 케이크",
    price: "51000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/05/[9300000003393]_20210520100142603.jpg",
    type: "best",
  },
  {
    id: 9,
    name: "스낵 D",
    category: "초콜릿/스낵",
    price: "21000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000001179]_20210421164934656.jpg",
    type: "new",
  },
  {
    id: 10,
    name: "보온병 A",
    category: "보온병, 텀블러/보온병",
    price: "25000",
    img: "https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9300000004601]_20230906123344454.jpg",
    type: "best",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const product = dummyProducts.find((p) => p.id === Number(params.productId));

  if (!product) {
    return <div>상품을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-6">
      <img src={product.img} alt={product.name} className="w-64 h-64" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg">카테고리: {product.category}</p>
      <p className="text-lg font-semibold">
        {product.price.toLocaleString()} 원
      </p>
      <p className="italic">{product.type}</p>
    </div>
  );
}
