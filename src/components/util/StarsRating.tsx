import React from 'react';

interface StarsRatingProps {
  rating: string;
  color: string;
  size?: string;
  gap?: string;
}

const StarsRating = ({
  rating,
  color,
  size = '6',
  gap = '1',
}: StarsRatingProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className={`flex space-x-${gap}`}>
      {stars.map((star) => {
        const fillPercentage = Math.min(
          Math.max((Number(rating) - star + 1) * 100, 0),
          100,
        );

        return (
          <div
            key={star}
            className={`relative h-${size} w-${size} text-gray-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={`h-${size} w-${size}`}
            >
              <path
                d="M12 17.75L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                strokeWidth={1}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div
              className="absolute left-0 top-0 overflow-hidden"
              style={{ width: `${fillPercentage}%` }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`h-${size} w-${size} text-${color}`}
              >
                <path d="M12 17.75L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StarsRating;
