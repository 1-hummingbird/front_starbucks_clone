import React from 'react';
import { ChevronLeft } from 'lucide-react';

function CartHeader() {
  return (
    <header className="fixed left-0 top-0 z-[800] h-[50px] w-full bg-white drop-shadow-md">
      <nav className="relative py-3">
        <ul className="flex items-center justify-between px-3">
          <li>
            <ChevronLeft size={30} strokeWidth={1.5} color="#6b6a6b" />
          </li>
          <li className="absolute left-1/2 translate-x-[-50%] text-center text-[0.9rem] font-bold">
            장바구니
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}

export default CartHeader;
