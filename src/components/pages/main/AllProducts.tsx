import AllProductIcon from './AllProductIcon';
import ProductCategory from './ProductCategory';
import SectionTitle from './SectionTitle';
import { categories } from '@/datas/initial/categories';

const AllProducts = () => {
  return (
    <section className="px-5">
      <SectionTitle title="All Products" />
      {/* <nav>
        <ul className="my-[12px] grid grid-cols-4 place-items-center gap-y-[15px]">
          {categories.map((item) => {
            return <AllProductIcon key={item.id} item={item} />;
          })}
        </ul>
      </nav> */}
      <ProductCategory />
    </section>
  );
};

export default AllProducts;
