import ProductCategory from './ProductCategory';
import SectionTitle from './SectionTitle';

const AllProducts = () => {
  return (
    <section className="px-5">
      <SectionTitle title="All Products" />
      <ProductCategory />
    </section>
  );
};

export default AllProducts;
