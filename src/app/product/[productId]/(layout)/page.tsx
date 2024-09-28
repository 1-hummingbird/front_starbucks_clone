import { getProductInfo } from '@/action/productActions';
import {
  ProductDetailType,
  ProductImagesType,
  ProductTitleType,
} from '@/types/responseType';

import { getReivewList, getReviewTitle } from '@/action/reviewActions';
import ProductDetail from '@/components/pages/productDetail/ProductDetail';
import ProductImages from '@/components/pages/productDetail/ProductImages';
import ProductTitle from '@/components/pages/productDetail/ProductTitle';
import ReviewTitle from '@/components/pages/productDetail/ReviewTitle';
import ReviewsList from '@/components/pages/productDetail/ReviewsList';
import TopNavBar from '@/components/pages/productDetail/TopNavBar';
import { Metadata } from 'next';

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
  const [productImages, productTitle, reviewTitle, productDetail, reviewList] =
    await Promise.all([
      getProductInfo<ProductImagesType[]>('images', params.productId),
      getProductInfo<ProductTitleType>('info', params.productId),
      getReviewTitle(params.productId),
      getProductInfo<ProductDetailType>('detail', params.productId),
      getReivewList(params.productId),
    ]);
  console.log('🚀 ~ page ~ reviewList:', reviewList);
  reviewTitle.averageStar;

  return (
    <main>
      {/* 상품 섹션 이동 내비바 */}
      <TopNavBar reviewCount={reviewTitle.reviewCount} />
      {/* 상품 이미지 스와이퍼*/}
      <ProductImages images={productImages} />
      {/* 이름, 가격 */}
      <ProductTitle {...productTitle} />
      {/* 별점, 리뷰 개수 */}
      <ReviewTitle {...reviewTitle} />
      {/* 상품 디테일 설명 */}
      <div id="productDetail">
        <ProductDetail {...productDetail} />
      </div>
      {/* 리뷰 */}
      <div id="reviewList">
        <ReviewsList averageStar={reviewTitle.averageStar.toFixed(1)} />
      </div>
      {/* 별점, 리뷰 개수 */}
      {/* 포토 리뷰(사진만) */}
      {/* 전체 리뷰(사진, 리뷰) */}
      {/* 별점, 아이디,  */}
      {/* 리뷰,  */}
      {/* 사진 순서 */}
      {/* 리뷰 날짜 */}
      {/* 리뷰 더 보기 */}
    </main>
  );
};

export default page;
