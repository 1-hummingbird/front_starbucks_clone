"use client";
import React, { useState, useEffect } from "react";

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 입력 상태
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // 최근 검색어 리스트

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 최근 검색어 로드
  useEffect(() => {
    const savedSearches = JSON.parse(
      localStorage.getItem("recentSearches") || "[]",
    );
    setRecentSearches(savedSearches);
  }, []);

  // 최근 검색어 저장 함수 (최대 5개 저장)
  const handleSearch = () => {
    if (searchTerm && !recentSearches.includes(searchTerm)) {
      const updatedSearches = [searchTerm, ...recentSearches].slice(0, 5); // 최대 5개 저장
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
    setSearchTerm(""); // 입력 필드 초기화
  };

  // 개별 검색어 삭제
  const handleDeleteSearch = (term: string) => {
    const updatedSearches = recentSearches.filter((search) => search !== term);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
  };

  // 전체 검색어 삭제
  const handleClearAll = () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
  };

  return (
    <>
      <div>
        <input
          className="m-2 w-[320px] rounded-lg bg-slate-100 p-2"
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="text-lg" onClick={handleSearch}>
          검색
        </button>
      </div>

      <h3 className="p-5 text-gray-500">최근 검색어</h3>

      {/* 최근 검색어 리스트 */}
      {recentSearches.length > 0 ? (
        recentSearches.map((term, index) => (
          <div key={index} className="flex w-1/2 justify-between px-5 py-2">
            <div className="font-bold">{term}</div>
            <div
              className="cursor-pointer"
              onClick={() => handleDeleteSearch(term)}
            >
              X
            </div>
          </div>
        ))
      ) : (
        <p className="px-5 py-2 text-gray-500">최근 검색어가 없습니다.</p>
      )}

      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-200" />

      {/* 전체 삭제 버튼 */}
      {recentSearches.length > 0 && (
        <div className="p-3 text-end font-bold">
          <button onClick={handleClearAll}>전체 삭제</button>
        </div>
      )}
    </>
  );
}

export default SearchInput;
