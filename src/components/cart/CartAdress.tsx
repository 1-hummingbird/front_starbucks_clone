import React from 'react'



const CartAdress = () => {

  

   
  return (
    <>
    <div className='bg-slate-200 p-5'>
    <div className='flex justify-between'>
     <ul className='flex gap-2'>
        <li>{}</li>
        <li>(별칭)</li>
    </ul>
    <button className='text-sm '>배송지 변경</button>
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