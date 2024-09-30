'use client';

import React, { useState } from 'react';

import ChildrenCategoryList from './CategoryFilter/ChildrenCategoryList';
import FilterSection from './CategoryFilter/FilterSection';
import Image from 'next/image';
import Link from 'next/link';
import { SelcetButton } from './CategoryFilter/SelectButton';

const AllFilter = () => {
  const [visibleCategoryIndex, setVisibleCategoryIndex] = useState<
    number | null
  >(null);
  const [selectedParentCategory, setSelectedParentCategory] = useState<
    string | null
  >(null);
  const [selectedChildCategories, setSelectedChildCategories] = useState<
    string[]
  >([]);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const categories = [
    '전체',
    '텀블러/보온병',
    '머그/컵',
    '라이프스타일',
    '티/커피용품',
    '케이크',
    '초콜릿/스낵',
    '세트',
  ];
  const prices = [
    '1만원미만',
    '1만원대',
    '2만원대',
    '3만원대',
    '4만원대',
    '5만원대',
    '5만원이상',
  ];

  const childrenCategories = [
    ['없음'],
    ['플라스틱 텀블러', '스테인리스 텀블러', '보온병', '콜드컵'],
    ['머그', '글라스', '리유저블'],
    ['카테고리 없음'],
    ['카테고리 없음'],
    ['롤 케이크', '홀 케이크'],
    ['카테고리 없음'],
    ['4+1'],
  ];

  const dummyProducts = [
    {
      id: 1,
      name: '텀블러 A',
      category: '텀블러/보온병 | 플라스틱 텀블러',
      price: '33000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2024/02/[11150979]_20240216102103606.jpg',
      type: 'new',
      wish: 10,
    },
    {
      id: 2,
      name: '머그 B',
      category: '머그/컵',
      price: '13000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2024/07/[9300000005108]_20240718093750805.jpg',
      type: 'new',
      wish: 1,
    },
    {
      id: 3,
      name: '케이크 C',
      category: '케이크',
      price: '56000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[9300000005472]_20240820160552386.jpg',
      type: 'best',
      wish: 14,
    },
    {
      id: 4,
      name: '스낵 D',
      category: '초콜릿/스낵',
      price: '21000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9300000004912]_20240305142647142.jpg',
      type: 'new',
      wish: 20,
    },
    {
      id: 5,
      name: '글라스 A',
      category: '글라스, 머그/컵',
      price: '31000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2024/09/[9300000005316]_20240906144154541.jpg',
      type: 'best',
      wish: 4,
    },
    {
      id: 6,
      name: '리유저블 A',
      category: '리유저블, 머그/컵',
      price: '41000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2023/06/[9300000004402]_20230609143302624.jpg',
      type: 'new',
      wish: 12,
    },
    {
      id: 7,
      name: '케이크 A',
      category: '롤케이크, 케이크',
      price: '21000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9300000004912]_20240305142647142.jpg',
      type: 'best',
      wish: 10,
    },
    {
      id: 8,
      name: '홀케이크 A',
      category: '홀케이크, 케이크',
      price: '51000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/05/[9300000003393]_20210520100142603.jpg',
      type: 'best',
      wish: 12,
    },
    {
      id: 9,
      name: '스낵 D',
      category: '초콜릿/스낵',
      price: '21000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9300000001179]_20210421164934656.jpg',
      type: 'new',
      wish: 243,
    },
    {
      id: 10,
      name: '보온병 A',
      category: '보온병, 텀블러/보온병',
      price: '25000',
      img: 'https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9300000004601]_20230906123344454.jpg',
      type: 'best',
      wish: 30,
    },
  ];

  const toggleCategoryVisibility = (index: number) => {
    setVisibleCategoryIndex(index === visibleCategoryIndex ? null : index);
  };

  const resetSelectedCategories = () => {
    setSelectedChildCategories([]); // 배열 초기화
    setSelectedPrice(null);
    setVisibleCategoryIndex(null);
  };

  const handleChildCategoryClick = (child: string) => {
    setSelectedChildCategories(
      (prev) =>
        prev.includes(child)
          ? prev.filter((c) => c !== child) // 이미 선택된 경우 제거
          : [...prev, child], // 선택되지 않은 경우 추가
    );
  };

  // 선택된 카테고리에 맞는 상품 필터링
  const filteredProducts =
    selectedParentCategory === '전체'
      ? dummyProducts // 전체 선택 시 모든 상품 보여줌
      : dummyProducts.filter(
          (product) =>
            (!selectedParentCategory ||
              product.category === selectedParentCategory) &&
            (!selectedPrice || product.price === selectedPrice) &&
            (selectedChildCategories.length === 0 ||
              selectedChildCategories.some((child) =>
                product.category.includes(child),
              )),
        );

  return (
    <>
      {/* 필터 섹션 */}
      <FilterSection
        categories={categories}
        prices={prices}
        selectedParentCategory={selectedParentCategory}
        selectedPrice={selectedPrice}
        onCategoryClick={(category, index) => {
          setSelectedParentCategory(category);
          toggleCategoryVisibility(index);
        }}
        onPriceClick={(price) => setSelectedPrice(price)}
        onReset={resetSelectedCategories}
        seasons={[]}
        selectedSeason={null}
      />

      {/* 자식 카테고리 */}
      {visibleCategoryIndex !== null && (
        <div>
          <ChildrenCategoryList
            childrenCategories={childrenCategories[visibleCategoryIndex]}
            selectedChildCategories={selectedChildCategories} // 배열로 전달
            onChildCategoryClick={handleChildCategoryClick} // 다중 선택 로직 적용
          />
          <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
        </div>
      )}

      {/* 선택된 카테고리 및 리셋 버튼 */}
      {(selectedParentCategory ||
        selectedChildCategories.length > 0 ||
        selectedPrice) && (
        <div className="custom-scroll my-3 flex items-center gap-3 overflow-auto pl-4">
          {/* 리셋 버튼 */}
          <div className="flex justify-center">
            <button className="text-gray" onClick={resetSelectedCategories}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
              >
                <path d="M12,0C7.973,0,4.213,2.036,2,5.365V0H1V5.5c0,.827,.673,1.5,1.5,1.5h5.5v-1H2.779C4.801,2.9,8.275,1,12,1c6.065,0,11,4.935,11,11s-4.935,11-11,11S1,18.065,1,12H0c0,6.617,5.383,12,12,12s12-5.383,12-12S18.617,0,12,0Z" />
              </svg>
            </button>
            <hr className="border-border-solid z-20 border-t-[1px] border-t-slate-400" />
          </div>

          {/* 선택된 항목들 */}
          {selectedParentCategory && (
            <div className="flex w-32 flex-nowrap items-center justify-between text-nowrap rounded-lg bg-green-600 p-2 text-sm text-white">
              <span>{selectedParentCategory}</span>
              <button
                className="px-3"
                onClick={() => setSelectedParentCategory(null)}
              >
                X
              </button>
            </div>
          )}

          {selectedChildCategories.map((child) => (
            <div
              key={child}
              className="flex w-32 flex-nowrap items-center justify-between text-nowrap rounded-lg bg-green-600 p-2 text-white"
            >
              <span>{child}</span>
              <button
                className="px-3"
                onClick={() =>
                  setSelectedChildCategories((prev) =>
                    prev.filter((c) => c !== child),
                  )
                }
              >
                X
              </button>
            </div>
          ))}

          {selectedPrice && (
            <div className="flex w-32 flex-nowrap items-center justify-between text-nowrap rounded-lg bg-green-600 p-2 text-white">
              <span>{selectedPrice}</span>
              <button className="px-3" onClick={() => setSelectedPrice(null)}>
                X
              </button>
            </div>
          )}
        </div>
      )}

      <div className="flex justify-end">
        <SelcetButton />
      </div>
      {/* 상품 목록 */}

      <div className="flex flex-wrap justify-around">
        {filteredProducts.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <div className="flex justify-center">
              <div className="product-content box-border rounded-lg p-6">
                <Image
                  className="rounded-lg"
                  src={product.img}
                  alt={product.name}
                  width={160}
                  height={170}
                />
                <div className="mt-4 flex items-end justify-between text-start">
                  <div>
                    <div className="flex justify-between">
                      <p className="text-xs italic text-green-500">
                        {product.type}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg">{product.name}</h3>
                      <p className="text-lg font-bold text-gray-700">
                        {product.price.toLocaleString()} 원
                      </p>
                    </div>
                  </div>
                  {/* <div className="text-lm flex flex-col items-center">
                    <p>
                      <Image
                        src="https://img.icons8.com/?size=100&id=581&format=png&color=000000"
                        width={20}
                        height={20}
                        alt="하트"
                      ></Image>
                    </p>
                    <p className="text-xs">{product.wish}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllFilter;
