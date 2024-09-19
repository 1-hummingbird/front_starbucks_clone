import { categories } from "@/datas/initial/categories";
import SectionTitle from "./SectionTitle";
import AllProductIcon from "./AllProductIcon";

const AllProducts = () => {
  return (
    <section className="mt-8">
      <SectionTitle title="All Products" />
      <nav>
        <ul className="grid grid-cols-4 place-items-center m-[15px] gap-y-[15px]">
          {categories.map(item => {
            return <AllProductIcon key={item.id} item={item} />;
          })}
        </ul>
      </nav>
    </section>
  );
};

export default AllProducts;
