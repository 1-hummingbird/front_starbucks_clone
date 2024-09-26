import Image from 'next/image';
import { getProductThumbnail } from '@/action/productAction';
import { notFound } from 'next/navigation';

interface ProductThumnailProps {
  productId: number;
}

const ProductThumnail = async ({ productId }: ProductThumnailProps) => {
  const thumbnailSrc = (await getProductThumbnail(productId)).src;

  return (
    <section className="h-[400px] w-full">
      <Image
        src={thumbnailSrc}
        alt="productThumbnail"
        width={400}
        height={400}
        className="h-auto w-full"
      />
    </section>
  );
};

export default ProductThumnail;
