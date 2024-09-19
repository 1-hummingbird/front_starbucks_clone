import React from 'react'

function CartinFormation() {
  return (
    <>
    {/* 버튼 */}
    <div>
    <div className='flex justify-between p-3'>
    <div>
        <input type="checkbox"/> 전체선택
    </div>
    <div className='gap-2'>
        <button type='button'>선택 삭제</button>
        |
        <button type='button'>전체 삭제</button>
    </div>
    </div>
    <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-200" />
    
    <div className='p-3'>
        <input className='' type="checkbox" /> 일반 상품
    </div>
    <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-200" />
    </div>

    {/* 상품 정보 */}
    <div>
  <ul className='flex justify-between items-start w-full'>
    {/* Input과 이미지 수평 정렬 및 붙이기 */}
    <div className='flex items-center'>
      <input type="checkbox" />
      <img
        className='w-28 h-28 ml-2'
        src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/08/[9300000005363]_20240806161440187.jpg"
        alt="머그"
      />
    </div>

    {/* 상품명과 수량/가격 수직 정렬 */}
    <div className='flex flex-col'>
      <li className='mb-2'>코리아 단청 머그</li>
      <div className='flex justify-between w-full'>
        <li>1</li>
        <li>29000원</li>
      </div>
    </div>

    {/* X 표시 */}
    <li>X</li>
  </ul>
</div>


    

    

    {/* 상품 금액 */}
    <div className='p-3'>
        <ul className='flex justify-between'>
            <li>상품 금액</li>
            <li className='font-bold text-lg'>29000원</li>
        </ul>
        <ul className='flex justify-between'>
            <li>할인 금액</li>
            <li className='font-bold text-lg'>0원</li>
        </ul>
        <ul className='flex justify-between'>
            <li>배송비</li>
            <li className='font-bold text-lg'>3000원</li>
        </ul>
        <ul className='flex justify-between py-3'>
            <li>총 결제예정금액</li>
            <li className='font-bold text-xl'>32000원</li>
        </ul>
    </div>
    
    <div className='bg-slate-100 m-3 p-3 text-sm text-slate-400'>
    <span>장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간 보관됩니다. 총 결제예정금액은 결제 단계에서 추가할인 수단 적용으로 달라질 수 있습니다. 가격, 옵션 등 정보가 변결된 경우 주문이 불가할 수 있습니다.</span>
    </div>

    <hr className="border-border-solid border-t-[1px] z-20 border-t-slate-200" />

    {/* 선물 구매 버튼 */}
    <div className='py-2'>
        <div>
            <ul className='flex justify-between px-12 py-2'>
                <li className='text-base'>총 1건</li>
                <li className='font-bold text-lg	'>32000원</li>
            </ul>
        </div>

        <div className='flex justify-center gap-4 py-2'>
            <button className='border-green-400	text-green-700 rounded-full	border-2 px-8 border-solid	'>선물하기</button>
            <button className='border-green-800 bg-green-600 text-white	 rounded-full border-2 px-8 border-solid	'>구매하기</button>
        </div>
    </div>
    </>
  )
}

export default CartinFormation