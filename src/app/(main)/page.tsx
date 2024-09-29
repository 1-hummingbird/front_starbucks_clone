import { getExhibitionList } from '@/action/exhibitionAction';
import AllProducts from '@/components/pages/main/AllProducts';
import BestItems from '@/components/pages/main/BestItems';
import ExhibitionSlide from '@/components/pages/main/ExhibitionSlide';
import NewProducts from '@/components/pages/main/NewProducts';
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';

export default async function Page() {
  const session = await getServerSession(options);
  console.log(session);

  const exhibitionList = await getExhibitionList();

  return (
    <main className="flex min-h-screen w-full flex-col gap-5">
      <ExhibitionSlide exhibitionList={exhibitionList} />
      <AllProducts />
      <BestItems />
      <NewProducts />
    </main>
  );
}
