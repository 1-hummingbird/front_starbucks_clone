import Link from "next/link";

interface cartData {
  name: string;
  addressNickname: string;
  address: string;
  memo: string;
  phone: string;
}

const CartAdress = ({ cartData }: { cartData: cartData }) => {
  return (
    <>
      <div className="bg-slate-200 p-3">
        <ul className="flex justify-between">
          <div className="flex gap-2">
            <li className="font-bold">{cartData.name}</li>
            <li className="font-bold">{cartData.addressNickname}</li>
            <li className="text-xs italic text-green-500">
              {cartData.memo}
            </li>{" "}
          </div>
          <div>
            <button className="px-2 text-xs text-rose-900">
              <Link href="/cart/subadress">배송지 변경</Link>
            </button>
          </div>
        </ul>
        <p className="pt-1">{cartData.address}</p>
        <p className="py-3">{cartData.phone}</p>
      </div>
    </>
  );
};

export default CartAdress;
