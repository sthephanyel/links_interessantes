import React, { Suspense } from "react";
import DashBoard from './screen/dashboard/page';
import Sites from './screen/sites/page';
import Loading from "./loading";

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <Suspense fallback={<p>Carregando repositorios...</p>}>
        <DashBoard/>
      </Suspense>
      <Suspense fallback={<Loading/>}>
        <Sites/>
      </Suspense>
    </main>
  );
}
