import ProductList from './ProductList';
import React from 'react';
import SectionTitle from './SectionTitle';
import { getNewItems } from '@/action/productActions';

const NewProducts = async () => {
  const newProductsData = await getNewItems();

  return (
    <section className="px-5 pb-16">
      <SectionTitle title="New Products" />
      <ProductList items={newProductsData} />
    </section>
  );
};

export default NewProducts;
