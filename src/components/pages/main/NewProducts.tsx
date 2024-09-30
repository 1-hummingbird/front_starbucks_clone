import ProductList from './ProductList';
import React from 'react';
import SectionTitle from './SectionTitle';
import { newProducts } from '@/datas/dummy/newProducts';

const NewProducts = async () => {
  const newProductsData = newProducts;

  return (
    <section className="px-5 pb-16">
      <SectionTitle title="New Products" />
      <ProductList items={newProductsData} />
    </section>
  );
};

export default NewProducts;
