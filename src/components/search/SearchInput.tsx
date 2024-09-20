import React from "react";

function SearchInput() {
  return (
    <>
      <div>
        <input
          className="w-[320px] bg-slate-100 m-2 p-2 rounded-lg	"
          type="text"
          placeholder="검색어를 입력해주세요."
        />
        <button className=" text-lg">X</button>
      </div>

      <h3 className="text-gray-500 p-5">최근 검색어</h3>

      {/* 최근 검색어  */}
      <div className="flex justify-between w-1/2 px-5 py-2">
        <div className="font-bold">머그</div>
        <div>X</div>
      </div>

      <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-200" />

      {/* 전체삭제 버튼 */}
      <div className="font-bold text-end p-3">
        <button>전체 삭제</button>
      </div>

      {/* 추천태그 */}
      <div className="pt-16">
        <h2 className="font-bold p-3 text-lg">추천 태그</h2>
        <div className="flex border-solid gap-4">
          <p className="bg-green-600 text-white rounded-full p-3">#더스트백</p>
          <p className="bg-green-600 text-white rounded-full p-3">#케이크</p>
          <p className="bg-green-600 text-white rounded-full p-3">#스탠리</p>
          <p className="bg-green-600 text-white rounded-full p-3">#각인</p>
        </div>
      </div>
    </>
  );
}

export default SearchInput;
