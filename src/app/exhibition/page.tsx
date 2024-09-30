import ExhibitionTopNavBar from '@/components/pages/exhibition/ExhibitionTopNavBar';
import React from 'react';
import { getExhibitionList } from '@/action/exhibitionAction';

const page = async () => {
  const exhibitionList = await getExhibitionList();
  const exhibitionTitles = exhibitionList.map((exhibition) => exhibition.name);
  console.log('🚀 ~ page ~ exhibitionTitles:', exhibitionTitles);

  return (
    <main>
      <ExhibitionTopNavBar exhibitionTitles={exhibitionTitles} />
    </main>
  );
};

export default page;
