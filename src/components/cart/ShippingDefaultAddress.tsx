import { ShippingAddressType } from '@/types/responseType';
import Link from 'next/link';

const ShippingDefaultAddress = ({
  shippingDefaultAddress,
}: {
  shippingDefaultAddress: ShippingAddressType;
}) => {
  return (
    <>
      <div className="bg-slate-200 p-3">
        <ul className="flex justify-between">
          <div className="flex gap-2">
            <li className="font-bold">{shippingDefaultAddress.name}</li>
            <li className="font-bold">
              {shippingDefaultAddress.addressNickname}
            </li>
            <li className="text-xs italic text-green-500">
              {shippingDefaultAddress.memo}
            </li>{' '}
          </div>
          <div>
            <button className="px-2 text-xs text-rose-900">
              <Link href="/cart/subadress">배송지 변경</Link>
            </button>
          </div>
        </ul>
        <p className="pt-1">{shippingDefaultAddress.address}</p>
        <p className="py-3">{shippingDefaultAddress.phone}</p>
      </div>
    </>
  );
};

export default ShippingDefaultAddress;
