'use client';
import React from 'react';
import LeftArrow from '../icons/LeftArrow';

function PayHeader() {
  return (
    <>
      <header className="fixed left-0 top-0 z-[800] h-[50px] w-full bg-white drop-shadow-md">
        <nav className="relative py-3">
          <ul className="flex items-center justify-between px-3">
            <li className="">
              <LeftArrow />
            </li>
            <li className="absolute left-1/2 translate-x-[-50%] text-center text-[0.9rem] font-bold">
              온라인 스토어
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default PayHeader;
