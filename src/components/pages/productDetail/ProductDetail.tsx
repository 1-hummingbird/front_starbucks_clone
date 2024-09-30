'use client';

import Image from 'next/image';
import { ProductDetailType } from '@/types/responseType';
import ProductHr from './ProductHr';
import { useState } from 'react';

type ProductDetailProps = ProductDetailType;

const ProductDetail = ({ detail }: ProductDetailProps) => {
  const [showAllImages, setShowAllImages] = useState<boolean>(false);
  const detailImages = detail.split(', ').map((url) => url.trim());

  return (
    <section className="mt-10">
      <ProductHr />
      <p className="mb-5 ml-4 text-xl font-bold">상세정보</p>
      <Image
        src={detailImages[0]}
        alt="productDetail"
        width={400}
        height={400}
        className="h-auto w-full"
      />

      {showAllImages ? (
        <div className="space-y-4">
          {detailImages.slice(1).map((url, index) => (
            <Image
              key={index}
              src={url}
              alt="productDetail"
              width={400}
              height={400}
              className="h-auto w-full"
            />
          ))}
        </div>
      ) : detailImages.length > 1 ? (
        <div
          className="mx-auto my-2 w-[90%] cursor-pointer rounded-sm border border-gray-400 py-3 text-center text-gray-700"
          onClick={() => setShowAllImages(true)}
        >
          상세정보 펼쳐보기
        </div>
      ) : null}
    </section>
  );
};

export default ProductDetail;
