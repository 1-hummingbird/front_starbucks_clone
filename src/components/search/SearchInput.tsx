'use client';

import LeftArrow from '../icons/LeftArrow';
import React from 'react';

function SearchInput() {
  return (
    <>
      <div className="flex items-center">
        <LeftArrow />
        <input
          className="m-2 w-[320px] rounded-lg bg-slate-100 p-2"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        {/* <button className="text-lg">X</button> */}
      </div>

      <h3 className="p-5 text-gray-500">최근 검색어</h3>

      {/* 최근 검색어  */}
      <div className="flex w-1/2 justify-between px-5 py-2">
        <div className="font-bold">머그</div>
        <div>X</div>
      </div>

      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-200" />

      {/* 전체삭제 버튼 */}
      <div className="p-3 text-end font-bold">
        <button>전체 삭제</button>
      </div>

      {/* 추천태그 */}
      <div className="pt-16">
        <h2 className="p-3 text-lg font-bold">추천 태그</h2>
        <div className="flex gap-4 border-solid">
          <p className="rounded-full bg-green-600 p-3 text-white">#더스트백</p>
          <p className="rounded-full bg-green-600 p-3 text-white">#케이크</p>
          <p className="rounded-full bg-green-600 p-3 text-white">#스탠리</p>
          <p className="rounded-full bg-green-600 p-3 text-white">#각인</p>
        </div>
      </div>
    </>
  );
}

export default SearchInput;
