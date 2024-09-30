import { Category } from '@/types/responseType';
import Link from 'next/link';

const AllProductIcon = ({ item }: { item: Category }) => {
  return (
    <li className="max-h-[200px]" key={item.id}>
      <Link
        href={`/${item.url}`}
        className="flex flex-col justify-center gap-4"
      >
        {item.component && <item.component />}
        <div className="mt-[5px] h-[18px] text-center">
          <p className="font-nanum text-[14px]">{item.category}</p>
        </div>
      </Link>
    </li>
  );
};

export default AllProductIcon;
