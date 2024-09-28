import StarsRating from '@/components/util/StarsRating';
import { ReviewContentType } from '@/types/responseType';
import React from 'react';

type ReviewContentProps = ReviewContentType;

const ReviewContent = ({
  reviewContent,
}: {
  reviewContent: ReviewContentProps;
}) => {
  return (
    <div className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <StarsRating
          rating={reviewContent.star.toFixed(1)}
          color={'black'}
          size={'4'}
          gap={'0'}
        />
        <p className="text-xs">{reviewContent.nickName}</p>
      </div>
      {reviewContent.content}
    </div>
  );
};

export default ReviewContent;
