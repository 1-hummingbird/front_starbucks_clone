import HomeLogo from '../icons/header/HomeLogo';
import Input from '@/components/ui/input';

const ProductHeader = () => {
  return (
    <header className="flex h-14 items-center gap-2">
      <HomeLogo w={120} h={40} />
      <input className="search-input w-[35%]" />
      {/* 뒤로가기, 입력 폼, */}
    </header>
  );
};

export default ProductHeader;
