import { bestItems } from "@/datas/dummy/bestItems";
import SectionTitle from "./SectionTitle";
import ProductList from "./ProductList";

const BestItems = async () => {
  const bestItemData = bestItems;

  return (
    <section>
      <SectionTitle title="Best Items" />
      <ProductList items={bestItemData} />
    </section>
  );
};

export default BestItems;
