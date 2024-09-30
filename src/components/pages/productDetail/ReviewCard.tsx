import { getRivewComments, getRivewContent } from '@/action/reviewActions';

import { MessageCircle } from 'lucide-react';
import ReviewContent from './ReviewContent';
import ReviewCotent from './ReviewContent';
import StarsRating from '@/components/util/StarsRating';
import { useState } from 'react';

const ReviewCard = async ({ reviewId }: { reviewId: number }) => {
  const [reviewContent, reviewComments] = await Promise.all([
    getRivewContent(reviewId),
    getRivewComments(reviewId),
  ]);

  return (
    <div className="mb-10 pr-2">
      <ReviewContent
        reviewContent={reviewContent}
        reviewComments={reviewComments}
      />
      {/* <div className="mb-4 flex items-center gap-2">
        <StarsRating
          rating={reviewContent.star.toFixed(1)}
          color={'black'}
          size={'4'}
          gap={'0'}
        />
        <p className="text-xs">{reviewContent.nickName}</p>
      </div>
      <p>{reviewContent.content}</p>
      <div className="flex items-center gap-1">
        <p className="pr-2 pt-1 text-xs text-[#888]">
          {reviewContent.createAt.substring(0, 10).replace(/-/g, '.')}
        </p>
        <div className="flex gap-1 pt-1">
          <MessageCircle size={16} strokeWidth={0.5} />
          <p className="text-xs">{reviewContent.commentCount}</p>
        </div>
      </div>

      {reviewComments
        ? reviewComments.map((reviewComment) => {
            return (
              <ReviewComment key={reviewId} reviewComment={reviewComment} />
            );
          })
        : null} */}
    </div>
  );
};

export default ReviewCard;
