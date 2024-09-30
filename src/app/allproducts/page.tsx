import {
  getProductInfoimage,
  getProductInfolist,
  productFilter,
} from '@/action/productFilterAction';
import AllFilter from '@/components/mainFilter/AllFilter';

import React from 'react';

async function ProductFilter() {
  // const allproduct = await productFilter
  // const onelist = await getProductInfolist();
  // const oneimage = await getProductInfoimage();

  const allproduct = await productFilter;
  console.log('allproduct', await productFilter());

  return (
    <>
      <AllFilter />
    </>
  );
}

export default ProductFilter;
