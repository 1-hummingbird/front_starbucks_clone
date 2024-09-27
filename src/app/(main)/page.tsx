import { Suspense } from 'react';
import { componentList } from '@/datas/initial/mainComponentList';
import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';

export default async function Page() {
  const session = await getServerSession(options);
  console.log(session);

  return (
    <main className="min-h-screen w-full">
      <ul>
        {componentList.map((item) => {
          return (
            <Suspense key={item.id} fallback={<div>skeleton</div>}>
              <li className="mb-10">
                <item.Component />
              </li>
            </Suspense>
          );
        })}
      </ul>
    </main>
  );
}
