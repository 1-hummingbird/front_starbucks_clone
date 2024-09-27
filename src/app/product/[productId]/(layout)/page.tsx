import { ProductDetailType, ProductImagesType } from '@/types/responseType';

import ProductImages from '@/components/pages/productDetail/ProductImages';
import ProductTitle from '@/components/pages/productDetail/ProductTitle';
import { getProductInfo } from '@/action/productActions';
import { getReviewSummary } from '@/action/reviewActions';

const page = async ({ params }: { params: { productId: number } }) => {
  const [productImages, productDetail, reviewSummary] = await Promise.all([
    getProductInfo<ProductImagesType[]>('images', params.productId),
    getProductInfo<ProductDetailType>('info', params.productId),
    getReviewSummary(params.productId),
  ]);
  console.log('🚀 ~ page ~ productDetail:', productDetail);

  return (
    <main>
      {/* 상품 이미지 스와이퍼*/}
      <ProductImages images={productImages} />
      {/* 이름, 가격 */}
      <ProductTitle {...productDetail} />
      {/* 별점, 리뷰 개수 */}
      {/* 상품 디테일 설명 */}
      {/* 리뷰 */}
      {/* 별점, 리뷰 개수 */}
      {/* 포토 리뷰(사진만) */}
      {/* 전체 리뷰(사진, 리뷰) */}
      {/* 별점, 아이디,  */}
      {/* 리뷰,  */}
      {/* 사진 순서 */}
      {/* 리뷰 날짜 */}
      {/* 리뷰 더 보기 */}
      {/* 하단 네비게이션(찜하기, 장바구니, 구매하기) */}
    </main>
  );
};

export default page;
