import { getProductInfo } from '@/action/productActions';
import { ProductThumbnailType, ProductTitleType } from '@/types/responseType';
import CustomerWishlistSwiper from './CustomerWishlistSwiper';

const CustomerWishlist = async ({
  customerWishlist,
}: {
  customerWishlist: number[];
}) => {
  const products = await Promise.all(
    customerWishlist.map(async (item) => {
      const [productThumbnail, productTitle] = await Promise.all([
        getProductInfo<ProductThumbnailType>('list/image', item),
        getProductInfo<ProductTitleType>('info', item),
      ]);
      return {
        id: productThumbnail.productId,
        defaultPrice: productTitle.price.toLocaleString(),
        discountedPrice:
          productTitle.isDiscounted &&
          (
            productTitle.price -
            (productTitle.price * productTitle.discountRate) / 100
          ).toLocaleString(),
        thumbnail: productThumbnail.src,
        title: productTitle.name,
        discountRate: productTitle.discountRate,
      };
    }),
  );
  return (
    <section className="mt-8 h-[250px] w-[412px]">
      <p className="pl-4 font-bold">다른 고객이 함께 찜한 상품</p>
      <CustomerWishlistSwiper products={products} />
    </section>
  );
};

export default CustomerWishlist;
