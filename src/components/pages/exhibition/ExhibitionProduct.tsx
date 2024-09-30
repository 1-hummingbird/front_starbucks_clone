import {
  ProductImagesType,
  ProductThumbnailImg,
  ProductTitleType,
} from '@/types/responseType';
import React, { useEffect, useState } from 'react';

import { getProductInfo } from '@/action/productActions';
import ProductThumbnail from '@/components/ProductThumbnail';

const ExhibitionProduct = ({ productId }: { productId: number }) => {
  const [productName, setProductName] = useState<string>('');
  const [productImgSrc, setProductImgSrc] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [isNew, setIsNew] = useState<boolean>(false);
  const [isDiscounted, setIsDiscounted] = useState<boolean>(false);
  const [discountRate, setDiscountRate] = useState<number>(0);

  useEffect(() => {
    const fetchProductInfo = async () => {
      const [imgSrc, productInfo] = await Promise.all([
        getProductInfo<ProductThumbnailImg>('list/image', productId),
        getProductInfo<ProductTitleType>('info', productId),
      ]);

      setProductName(productInfo.name);
      setProductImgSrc(imgSrc.src);
      setPrice(productInfo.price);
      setIsNew(productInfo.isNew);
      setIsDiscounted(productInfo.isDiscounted);
      setDiscountRate(productInfo.discountRate);
    };
    fetchProductInfo();
  }, [productId]);

  const data = {
    productId: productId,
    productName: productName,
    productImgSrc: productImgSrc,
    price: price,
    isNew: isNew,
    isDiscounted: isDiscounted,
    discountRate: discountRate,
  };
  return (
    <div>
      <ProductThumbnail {...data} />
    </div>
  );
};

export default ExhibitionProduct;
