import {
  ProductDetailType,
  ProductImagesType,
  ProductTitleType,
} from '@/types/responseType';
import { getCustomerWishlist, getProductInfo } from '@/action/productActions';
import { getReivewList, getReviewTitle } from '@/action/reviewActions';

import CustomerWishlist from '@/components/pages/productDetail/CustomerWishlist';
import { Metadata } from 'next';
import ProductDetail from '@/components/pages/productDetail/ProductDetail';
import ProductImages from '@/components/pages/productDetail/ProductImages';
import ProductTitle from '@/components/pages/productDetail/ProductTitle';
import ReviewTitle from '@/components/pages/productDetail/ReviewTitle';
import ReviewsList from '@/components/pages/productDetail/ReviewsList';
import TopNavBar from '@/components/pages/productDetail/TopNavBar';

export async function generateMetadata({
  params,
}: {
  params: { productId: number };
}): Promise<Metadata> {
  const [productImages, productDetail] = await Promise.all([
    getProductInfo<ProductImagesType[]>('images', params.productId),
    getProductInfo<ProductTitleType>('info', params.productId),
  ]);
  return {
    title: productDetail.name,
    openGraph: {
      images: [productImages[0].url],
    },
  };
}

const page = async ({ params }: { params: { productId: number } }) => {
  const [
    productImages,
    productTitle,
    reviewTitle,
    productDetail,
    reviewList,
    customerWishlist,
  ] = await Promise.all([
    getProductInfo<ProductImagesType[]>('images', params.productId),
    getProductInfo<ProductTitleType>('info', params.productId),
    getReviewTitle(params.productId),
    getProductInfo<ProductDetailType>('detail', params.productId),
    getReivewList(params.productId),
    getCustomerWishlist(),
  ]);

  return (
    <main>
      <TopNavBar reviewCount={reviewTitle.reviewCount} />
      <ProductImages images={productImages} />
      <ProductTitle {...productTitle} />
      <ReviewTitle {...reviewTitle} />
      <div id="productDetail">
        <ProductDetail {...productDetail} />
      </div>
      <CustomerWishlist customerWishlist={customerWishlist} />
      <div id="reviewList">
        <ReviewsList
          averageStar={reviewTitle.averageStar.toFixed(1)}
          reviewCount={reviewTitle.reviewCount}
          reviewIdList={reviewList.content}
        />
      </div>
    </main>
  );
};

export default page;
