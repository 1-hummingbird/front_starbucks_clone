import { ProductTitleType } from '@/types/responseType';
import React from 'react';

type ProductTitleProps = ProductTitleType;

const ProductTitle = ({
  name,
  price,
  isNew,
  shortDescription,
  isDiscounted,
  discountRate,
  wishCount,
}: ProductTitleProps) => {
  const defaultPrice = price.toLocaleString();
  const discountedPrice =
    isDiscounted && (price - (price * discountRate) / 100).toLocaleString();

  return (
    <section className="mt-4 flex flex-col gap-4 px-4">
      <div>
        {isNew && <p className="text-xs text-green-500">new</p>}
        <p>{name}</p>
      </div>
      {discountedPrice ? (
        <div className="flex flex-col">
          <p className="text-xl text-gray-500 line-through">{defaultPrice}원</p>
          <div className="flex gap-2">
            <p className="text-2xl text-red-600">{discountRate}%</p>
            <p className="text-2xl font-bold">{discountedPrice}원</p>
          </div>
        </div>
      ) : (
        <p className="text-2xl font-bold">{defaultPrice}원</p>
      )}
      <div>
        <p>{shortDescription}</p>
      </div>
    </section>
  );
};

export default ProductTitle;
