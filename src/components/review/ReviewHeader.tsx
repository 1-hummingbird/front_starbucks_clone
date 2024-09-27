import React from "react";
import Image from "next/image";

function ReviewHeader() {
  return (
    <>
      <header className="fixed left-0 top-0 z-[800] h-[50px] w-full bg-white drop-shadow-md">
        <nav className="relative py-3">
          <ul className="flex items-center justify-between px-3">
            <li>
              <Image
                color="#6b6a6b"
                width={30}
                height={30}
                src="https://img.icons8.com/?size=100&id=60636&format=png&color=000000"
                alt="왼쪽 화살표"
              ></Image>
            </li>
            <li className="absolute left-1/2 translate-x-[-50%] text-center text-[0.9rem] font-bold">
              리뷰 관리
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default ReviewHeader;
