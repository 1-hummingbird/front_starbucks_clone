import { componentList } from "@/datas/initial/mainComponentList";
import { Suspense } from "react";

export default function Page() {
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
