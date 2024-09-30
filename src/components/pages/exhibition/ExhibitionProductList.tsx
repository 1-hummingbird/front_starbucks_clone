import React, { useEffect, useState } from 'react';

import ExhibitionProduct from './ExhibitionProduct';
import { getExhibitionProductList } from '@/action/exhibitionAction';

const ExhibitionProductList = ({ id }: { id: number }) => {
  const [exhibitionProductList, setExhibitionProductList] = useState<number[]>(
    [],
  );
  useEffect(() => {
    const fetchExhibitionProductList = async () => {
      const list = await getExhibitionProductList(id);
      setExhibitionProductList(list);
    };

    fetchExhibitionProductList();
  }, [id]);
  return (
    <section>
      {exhibitionProductList.map((productId, idx) => {
        return <ExhibitionProduct productId={productId} />;
      })}
    </section>
  );
};

export default ExhibitionProductList;
