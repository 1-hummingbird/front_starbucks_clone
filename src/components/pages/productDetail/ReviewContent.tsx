'use client';

import React, { useState } from 'react';
import { ReviewCommentType, ReviewContentType } from '@/types/responseType';

import { MessageCircle } from 'lucide-react';
import StarsRating from '@/components/util/StarsRating';

interface ReviewContentProps {
  reviewContent: ReviewContentType;
  reviewComments: ReviewCommentType[];
}

const ReviewCotent = ({
  reviewContent,
  reviewComments,
}: ReviewContentProps) => {
  const [isShowComment, setIsShowComment] = useState<boolean>(false);
  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <StarsRating
          rating={reviewContent.star.toFixed(1)}
          color={'green-600'}
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
        <div
          onClick={() => {
            setIsShowComment(!isShowComment);
          }}
          className="flex gap-1 pt-1"
        >
          <MessageCircle size={16} strokeWidth={0.5} />
          <p className="text-xs">{reviewContent.commentCount}</p>
        </div>
      </div>
      {isShowComment
        ? reviewComments.map((reviewComment, idx) => {
            return (
              <>
                <hr className="my-2" />
                <div className="mt-1 flex flex-col gap-1 text-xs" key={idx}>
                  <div className="flex gap-1">
                    <p className="text-[13px]">{reviewComment.nickname}</p>
                    <p className="text-[#666666]">
                      {reviewContent.createAt
                        .substring(0, 10)
                        .replace(/-/g, '.')}
                    </p>
                  </div>
                  <p>{reviewComment.content}</p>
                </div>
              </>
            );
          })
        : null}
    </>
  );
};

export default ReviewCotent;
