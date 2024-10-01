import ProductCategory from './ProductCategory';

const AllProducts = () => {
  return (
    <section className="px-5">
      <h1 className="mb-4 text-2xl font-bold text-center text-green-700">베스트 상품</h1>
      <ProductCategory />
    </section>
  );
};

export default AllProducts;
