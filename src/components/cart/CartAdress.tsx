import React from 'react'



function CartAdress() {

    // const cartdummydata = [
    //     {
    //      name: "홍길동",
    //      alias: "집",
    //      mail: 12345,
    //      adress: "경상남도 김해시",
    //      Detailedaddress: "땡땡아파트 104동 102호",
    
    //     }
    // ];
    
  return (
    <>
    <div className='bg-slate-200 p-5'>
    <div className='flex justify-between'>
     <ul className='flex gap-2'>
        <li>이름</li>
        <li>(별칭)</li>
    </ul>
    <button>배송지 변경</button>
    </div>

    <div className='flex'>
    <ul className='flex gap-1'>
        <li>우편주소</li>
        <li>주소</li>
        <li>상세주소</li>
    </ul>
    </div>
    </div>
    </>
  )
}

export default CartAdress