import { getRivewComments, getRivewContent } from '@/action/reviewActions';

import ReviewCard from './ReviewCard';
import StarsRating from '@/components/util/StarsRating';

interface ReviewListProps {
  averageStar: string;
  reviewCount: number;
  reviewIdList: number[];
}

const ReviewsList = ({
  averageStar,
  reviewIdList,
  reviewCount,
}: ReviewListProps) => {
  return (
    <section className="mb-20 ml-4 mt-4">
      <p className="mb-4 text-xl font-bold">고객리뷰</p>
      <div className="flex items-center gap-1">
        <StarsRating rating={averageStar} color={'red-500'} />
        <p className="text-xl font-bold">{averageStar}</p>
        <p className="text-sm text-[#969696]">({reviewCount})</p>
      </div>
      <p className="mb-4 mt-6 font-bold">전체 리뷰</p>
      {reviewIdList.map(async (id, idx) => {
        return <ReviewCard key={idx} reviewId={id} />;
      })}
    </section>
  );
};

export default ReviewsList;
