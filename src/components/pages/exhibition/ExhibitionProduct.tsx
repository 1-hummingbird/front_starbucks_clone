import { ProductImagesType, ProductTitleType } from '@/types/responseType';
import React, { useEffect, useState } from 'react';

import { getProductInfo } from '@/action/productActions';

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
        getProductInfo<ProductImagesType[]>('list/image', productId),
        getProductInfo<ProductTitleType>('info', productId),
      ]);

      // 이미지 불러오기
      setProductName(productInfo.name);
      // setProductImgSrc(imgSrc)
      setPrice(productInfo.price);
      setIsNew(productInfo.isNew);
      setIsDiscounted(productInfo.isDiscounted);
      setDiscountRate(productInfo.discountRate);
    };
  }, [productId]);
  return <div></div>;
};

export default ExhibitionProduct;
