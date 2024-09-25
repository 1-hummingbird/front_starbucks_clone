"use client";
import {
  getCartItemData,
  getCartProductImageData,
} from "@/action/cartDataFetch";
import { CartItemType, ImageByCartIdType } from "@/types/responseType";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { useToast } from "@/hooks/use-toast";

function CartListItem({ cartItem }: { cartItem: number }) {
  const { toast } = useToast();
  const [cartItemData, setCartItemData] = useState<CartItemType | null>(null);
  const [cartItemImg, setCartItemImg] = useState<ImageByCartIdType | null>(
    null,
  );
  const [count, setCount] = useState(0);
  const [isAction, setIsAction] = useState(false);

  const handleCount = (calCulType: string) => {
    if (calCulType === "plus") {
      setCount(count + 1);
      setIsAction(true);
    } else if (calCulType === "minus" && count > 1) {
      setCount(count - 1);
      setIsAction(true);
    } else if (calCulType === "minus" && count === 1) {
      toast({
        color: "white",
        title: "최소 수량은 1개입니다.",
        className: "bg-starbucks text-white",
        duration: 1000,
      });
      return;
    }
  };

  useEffect(() => {
    getCartItemData(cartItem).then((data) => {
      console.log(data);
      setCartItemData(data);
      setCount(data.cartQuantity);
    });
    getCartProductImageData(cartItem).then((data) => {
      setCartItemImg(data);
    });
  }, [cartItem]);

  useEffect(() => {
    if (isAction) {
      setTimeout(() => {
        setIsAction(false);
        console.log("isAction fetch");
      }, 2000);
    } else {
      console.log("isAction false");
    }
  }, [isAction]);

  return (
    <li className="flex w-full items-start gap-3 px-5 py-5">
      {cartItemImg && cartItemData && (
        <>
          <Checkbox
            id={`cartItem${cartItem}`}
            className="data-[state=checked]:bg-starbucks border-starbucks h-[20px] w-[20px]"
          />
          <div className="grid w-full grid-cols-6 gap-3">
            <div className="col-span-2 h-[90px] w-[90px] overflow-hidden rounded-sm">
              <Image
                src={cartItemImg.productImg}
                alt={cartItemImg.productImg}
                width={100}
                height={100}
                priority
                className="object-cover"
              />
            </div>
            <div className="col-span-4">
              <p className="text-sm font-bold">{cartItemData?.productName}</p>
              <div className="flex items-center justify-between gap-3 pt-3">
                <div className="flex w-1/2 items-center justify-between gap-2">
                  <MinusCircleIcon
                    size={20}
                    strokeWidth={1.5}
                    color={count < 2 ? "lightGray" : "green"}
                    onClick={() => handleCount("minus")}
                  />
                  <p className="font-extrabold">{count}</p>
                  <PlusCircleIcon
                    size={20}
                    strokeWidth={1.5}
                    color="green"
                    onClick={() => handleCount("plus")}
                  />
                </div>
                <p className="text-sm font-extrabold">
                  {cartItemData.price.toLocaleString()}원
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default CartListItem;
