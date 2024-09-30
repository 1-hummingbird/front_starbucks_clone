import { ReviewTitleType } from '@/types/responseType';
import StarRating from '@/components/util/StarRating';

type ReviewTitleProps = ReviewTitleType;

const ReviewTitle = ({
  reviewCount,
  photoReviewCount,
  averageStar,
}: ReviewTitleProps) => {
  return (
    <section className="mb-4 mt-3 flex items-center gap-2 px-4">
      <div className="flex items-center gap-1">
        <StarRating rating={averageStar.toFixed(1)} color={'green-600'} />
        <p>{averageStar.toFixed(1)}</p>
      </div>
      <p className="pl-2">{reviewCount}건의 리뷰</p>
    </section>
  );
};

export default ReviewTitle;
