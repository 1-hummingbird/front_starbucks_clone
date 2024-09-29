import { getRivewContent } from '@/action/reviewActions';
import StarsRating from '@/components/util/StarsRating';
import ReviewContent from './ReviewContent';

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
      <p className="mb-10 text-xl font-bold">고객리뷰</p>
      <div className="flex items-center gap-1">
        <StarsRating rating={averageStar} color={'green-600'} />
        <p className="text-xl font-bold">{averageStar}</p>
        <p className="text-sm text-[#969696]">({reviewCount})</p>
      </div>
      <p className="my-4 font-bold">전체 리뷰</p>
      {reviewIdList.map(async (id, idx) => {
        const reviewContent = await getRivewContent(id);
        return <ReviewContent key={idx} reviewContent={reviewContent} />;
      })}
    </section>
  );
};

export default ReviewsList;
