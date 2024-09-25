import { ShippingAddressType } from '@/types/responseType';
import Link from 'next/link';

const ShippingDefaultAddress = ({
  shippingDefaultAddress,
}: {
  shippingDefaultAddress: ShippingAddressType;
}) => {
  return (
    <section>
      <div className="bg-[#f7f7f8] px-5 py-5">
        <ul className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
            <li className="font-bold">{shippingDefaultAddress.name}</li>
            <li className="text-sm font-bold">
              {`(${shippingDefaultAddress.addressNickname})`}
            </li>
            <li className="flex items-center justify-center bg-[#deefe9] px-[4px] py-[2px] text-[0.6rem] text-[#33b881]">
              기본
            </li>
          </div>
          <div>
            <button className="px-2 text-xs text-rose-900">
              <Link href="/cart/subadress">배송지 변경</Link>
            </button>
          </div>
        </ul>
        <p className="py-2 text-sm">{shippingDefaultAddress.address} </p>
      </div>
    </section>
  );
};

export default ShippingDefaultAddress;
