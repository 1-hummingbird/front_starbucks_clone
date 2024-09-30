"use client";
import React, { useState, useEffect } from "react";
import LeftArrow from "../icons/LeftArrow";
import { useRouter } from "next/navigation";
import { saveRecentSearch, getRecentSearches, deleteRecentSearch, deleteAllRecentSearches } from "@/action/searchActions";

interface SearchItem {
  searchWord: string;
}

function SearchInput() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(""); // 검색어 입력 상태
  const [recentSearches, setRecentSearches] = useState<string[]>([]); // 최근 검색어 리스트

  useEffect(() => {
    const fetchRecentSearches = async () => {
      try {
        const apiSearches = await getRecentSearches();
        console.log(apiSearches);
        
        // Process the API response
        const processedSearches = apiSearches.map((item: SearchItem | string) => {
          if (typeof item === 'object' && 'searchWord' in item) {
            // Remove surrounding quotes and trim
            return item.searchWord.replace(/^"|"$/g, '').trim();
          }
          return typeof item === 'string' ? item.trim() : '';
        }).filter(Boolean); // Remove any empty strings

        setRecentSearches(processedSearches);
        localStorage.setItem("recentSearches", JSON.stringify(processedSearches));
      } catch (error) {
        console.error('Error fetching recent searches:', error);
        setRecentSearches([]);
      }
    };

    fetchRecentSearches();
  }, []);


  const handleSearch = async () => {
    if (searchTerm && Array.isArray(recentSearches) && !recentSearches.includes(searchTerm)) {
      const updatedSearches = [searchTerm, ...recentSearches].slice(0, 5); // 최대 5개 저장
      console.log(updatedSearches);
      setRecentSearches(updatedSearches);
      localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    }
    await saveRecentSearch(searchTerm);
    router.push(`/search/result?query=${searchTerm}`);
  };

  // 개별 검색어 삭제
  const handleDeleteSearch = async (term: string) => {
    const updatedSearches = recentSearches.filter((search) => search !== term);
    setRecentSearches(updatedSearches);
    localStorage.setItem("recentSearches", JSON.stringify(updatedSearches));
    await deleteRecentSearch(term);
  };

  // 전체 검색어 삭제
  const handleClearAll = async () => {
    setRecentSearches([]);
    localStorage.removeItem("recentSearches");
    await deleteAllRecentSearches();
  };

  return (
    <>

      <div className="mx-2 flex items-center py-1">
        <LeftArrow />
        <input
          className="m-2 w-[250px] rounded-lg bg-slate-100 p-2"
          type="text"
          placeholder="검색어를 입력해주세요."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button className="text-base" onClick={handleSearch}>
          검색
        </button>
      </div>

      <h3 className="p-5 text-gray-500">최근 검색어</h3>


      {/* 최근 검색어 리스트 */}
      {Array.isArray(recentSearches) && recentSearches.length > 0 ? (
        <>
          <div className="grid grid-cols-2 gap-4 px-5 mb-[10px]">
            {recentSearches.map((term, index) => (
              <div
                key={index}
                className="flex justify-between rounded-lg border border-slate-200 p-2"
              >
                <div className="font-bold">{term}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => handleDeleteSearch(term)}
                >
                  X
                </div>
              </div>
            ))}
          </div>
          
          {/* 전체 삭제 버튼 */}
          <div className="p-3 text-end font-bold">
            <button onClick={handleClearAll}>전체 삭제</button>
          </div>
        </>
      ) : (
        <p className="px-5 py-2 text-gray-500 mb-[3px]">최근 검색어가 없습니다.</p>
      )}

      <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-200" />

    </>
  );
}

export default SearchInput;
