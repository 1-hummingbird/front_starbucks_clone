import ProductList from './ProductList';
import SectionTitle from './SectionTitle';
import { getBestItems } from '@/action/productActions';

const BestItems = async () => {
  const bestItemData = await getBestItems();

  return (
    <section className="px-5">
      <SectionTitle title="Best Items" />
      <ProductList items={bestItemData} />
    </section>
  );
};

export default BestItems;
