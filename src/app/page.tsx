import Image from "next/image";
import { Suspense } from "react";
import DashBoard from './screen/dashboard/page';
import Categorias from './screen/categorias/page';
import Sites from './screen/sites/page';

export default function Home() {
  return (
    <main className={`flex flex-col`}>
      <Suspense fallback={<p>Carregando repositorios...</p>}>
        <DashBoard/>
      </Suspense>
      <Suspense fallback={<p>Carregando repositorios...</p>}>
        <Sites/>
      </Suspense>
    </main>
  );
}
