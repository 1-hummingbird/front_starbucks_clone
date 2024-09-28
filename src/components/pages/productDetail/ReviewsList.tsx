import StarsRating from '@/components/util/StarsRating';
import React from 'react';

const ReviewsList = ({ averageStar }: { averageStar: string }) => {
  return (
    <section className="mb-5 ml-4 mt-10">
      <p className="mb-10 text-xl font-bold">고객리뷰</p>
      <StarsRating rating={averageStar} />
      asfasfasdfasdf asfasfasdfasdf asfasfasdfasdf asfasfasdfasdf asfasfasdfasdf
      asfasfasdfasdf asfasfasdfasdf asfasfasdfasdf asfasfasdfasdf asfasfasdfasdf
      asfasfasdfasdf
    </section>
  );
};

export default ReviewsList;
