import { Diagnostico } from "@/components/diagnostico";
import { Exemplo } from "@/components/exemplo";
import { Faixa } from "@/components/faixa";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Parceria } from "@/components/parceria";
import Metodologia from "@/components/metodologia";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans dark:bg-black ">
      <main className="relative flex min-h-screen w-full flex-col bg-white dark:bg-black">
        {/* Cabeçalho */}
        <header className="flex flex-row justify-between max-w-7xl mx-auto w-full items-center mt-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <Header />
        </header>
        <section className="flex flex-col text-pretty md:text-balance text-base max-w-7xl mx-auto w-full font-medium sm:flex-row mt-20">
          <Intro />
        </section>

        {/* Bola amarela sobreposta */}
        <div
          className="mx-auto -mb-8 size-20
                     bg-yellow-400 hover:bg-yellow-500 rounded-full 
                     transition-all duration-300 hover:shadow-lg 
                     border-24 border-white z-50"
        ></div>
        <article>
          <Exemplo />
          <div>
            <Faixa />
          </div>
          <div className="flex flex-col text-pretty md:text-balance text-base max-w-7xl mx-auto w-full font-medium sm:flex-row mt-20">
            <Parceria />
          </div>
          <div>
            <Metodologia />
          </div>
          <div className="flex flex-col text-pretty md:text-balance text-base max-w-7xl mx-auto w-full font-medium sm:flex-row mt-20">
            <Diagnostico />
          </div>
        </article>
      </main>
    </div>
  );
}
