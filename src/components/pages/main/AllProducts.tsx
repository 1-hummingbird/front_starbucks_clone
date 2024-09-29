import { categories } from '@/datas/initial/categories';
import SectionTitle from './SectionTitle';
import AllProductIcon from './AllProductIcon';

const AllProducts = () => {
  return (
    <section>
      <SectionTitle title="All Products" />
      <nav>
        <ul className="m-[15px] grid grid-cols-4 place-items-center gap-y-[15px]">
          {categories.map((item) => {
            return <AllProductIcon key={item.id} item={item} />;
          })}
        </ul>
      </nav>
    </section>
  );
};

export default AllProducts;
