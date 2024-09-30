import ProductList from './ProductList';
import SectionTitle from './SectionTitle';
import { bestItems } from '@/datas/dummy/bestItems';

const BestItems = async () => {
  const bestItemData = bestItems;

  return (
    <section className="px-5">
      <SectionTitle title="Best Items" />
      <ProductList items={bestItemData} />
    </section>
  );
};

export default BestItems;
