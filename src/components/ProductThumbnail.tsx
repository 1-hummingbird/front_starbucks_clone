import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductThumbnailProps {
  productId: number;
  productName: string;
  productImgSrc: string;
  price: number;
  isNew: boolean;
  isDiscounted: boolean;
  discountRate: number;
}

const ProductThumbnail = ({
  productId,
  productName,
  productImgSrc,
  price,
  isNew,
  isDiscounted,
  discountRate,
}: ProductThumbnailProps) => {
  const defaultPrice = price.toLocaleString();
  const discountedPrice =
    isDiscounted && (price - (price * discountRate) / 100).toLocaleString();

  return (
    <Link href={`/product/${productId}`}>
      <div className="flex h-[300px] w-full flex-col gap-1 px-3">
        <Image
          src={productImgSrc}
          alt={`${productImgSrc}`}
          width={195}
          height={195}
          priority
        />
        {isNew && <p className="text-xs text-green-500">new</p>}
        <p className="text-[13px]">{productName}</p>
        {discountedPrice ? (
          <div className="flex flex-col">
            <p className="text-gray-500 line-through">{defaultPrice}원</p>
            <div className="flex gap-2">
              <p className="text-red-600">{discountRate}%</p>
              <p className="font-bold">{discountedPrice}원</p>
            </div>
          </div>
        ) : (
          <p className="font-bold">{defaultPrice}원</p>
        )}
      </div>
    </Link>
  );
};

export default ProductThumbnail;
