import React from 'react';

const StarRating = ({ rating, color }: { rating: string; color: string }) => {
  const fillPercentage = Math.min(Math.max((Number(rating) / 5) * 100, 0), 100);

  return (
    <div className="relative h-6 w-6 text-gray-300">
      {/* 빈 별 */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          d="M12 17.75L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* 채워진 별 */}
      <div
        className="absolute left-0 top-0 overflow-hidden"
        style={{ width: `${fillPercentage}%` }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          // className="h-6 w-6 text-yellow-400"
          className={`h-6 w-6 text-${color}`}
        >
          <path d="M12 17.75L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </div>
    </div>
  );
};

export default StarRating;
