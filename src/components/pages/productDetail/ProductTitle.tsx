import { ProductDetailType } from '@/types/responseType';
import React from 'react';

type ProductTitleProps = ProductDetailType;

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
  const discountedPrice = price - price * discountRate;
  console.log(discountedPrice);
  return (
    <section className="mt-4 flex flex-col gap-4 px-4">
      <div>
        {isNew && <p className="text-xs text-green-500">new</p>}
        <p>{name}</p>
      </div>
      <p className="text-2xl font-bold">{defaultPrice}원</p>
    </section>
  );
};

export default ProductTitle;
