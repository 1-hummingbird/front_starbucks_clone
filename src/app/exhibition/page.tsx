import ExhibitionTopNavBar from '@/components/pages/exhibition/ExhibitionTopNavBar';
import React from 'react';
import { getExhibitionList } from '@/action/exhibitionAction';

const page = async () => {
  const exhibitionList = await getExhibitionList();
  console.log('🚀 ~ page ~ exhibitionList:', exhibitionList);

  return (
    <main>
      <ExhibitionTopNavBar exhibitionList={exhibitionList} />
    </main>
  );
};

export default page;
