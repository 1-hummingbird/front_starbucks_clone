import Link from "next/link";
import React from "react";

const MyPage = () => {
  return (
    <Link href="/mypage">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
      >
        <path
          fill="#000"
          d="M22.4 21.2h-1.2c0-3.96-3.24-7.2-7.2-7.2s-7.2 3.24-7.2 7.2H5.6c0-4.68 3.72-8.4 8.4-8.4s8.4 3.72 8.4 8.4Z"
        />
        <path
          fill="#000"
          fillRule="evenodd"
          d="M11 8.6c0 1.68 1.32 3 3 3s3-1.32 3-3-1.32-3-3-3-3 1.32-3 3Zm1.2 0c0-.96.84-1.8 1.8-1.8.96 0 1.8.84 1.8 1.8 0 .96-.84 1.8-1.8 1.8-.96 0-1.8-.84-1.8-1.8Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
};

export default MyPage;
