import React from "react";
import { newProducts } from "@/datas/dummy/newProducts";
import SectionTitle from "./SectionTitle";
import ProductList from "./ProductList";

const NewProducts = async () => {
  const newProductsData = newProducts;

  return (
    <section className="pb-16">
      <SectionTitle title="New Products" />
      <ProductList items={newProductsData} />
    </section>
  );
};

export default NewProducts;
