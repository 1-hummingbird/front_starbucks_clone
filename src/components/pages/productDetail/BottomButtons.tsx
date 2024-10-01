import { Gift, Heart, ShoppingCart } from 'lucide-react';

import React from 'react';

const BottomButtons = () => {
  return (
    <section className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-300 bg-white shadow-lg">
      <div className="flex h-full w-full items-center">
        <div className="flex flex-1">
          <div className="flex flex-[1] items-center justify-center py-4">
            <Heart size={28} />
          </div>
          <div className="flex flex-[2] items-center justify-center gap-2 border-l border-gray-300 py-4">
            <ShoppingCart />
            <p>장바구니</p>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center border-l border-gray-300 bg-green-500 py-4">
          <p className="text-white">구매하기</p>
        </div>
      </div>
    </section>
  );
};

export default BottomButtons;
