import { Diagnostico } from "@/components/diagnostico";
import { Problema } from "@/components/problema";
import { Faixa } from "@/components/faixa";
import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import { Parceria } from "@/components/parceria";
import Metodologia from "@/components/metodologia";
import Image from "next/image";
import Resultados from "@/components/resultados";
import VideoCards from "@/components/videoCards";
import Clientes from "@/components/clientes";
import Example from "@/components/example";
import { Decolar } from "@/components/decolar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="flex justify-center font-sans dark:bg-black">
      <main className="relative flex min-h-screen w-full flex-col bg-white dark:bg-black">
        <header
          id="intro"
          className="flex justify-between items-center gap-4 px-4
           sm:flex-col
           md:flex-row md:items-center md:justify-between
           max-w-7xl mx-auto w-full mt-4"
        >
          <Image
            className="dark:invert"
            src="/uri-logo.svg"
            alt="Logo da Uri"
            width={100}
            height={20}
            priority
          />
          <Header />
        </header>
        <section
          className="
            flex flex-col px-4 mt-12
            max-w-7xl mx-auto w-full
            text-base font-medium
            md:flex-row
          "
        >
          <Intro />
        </section>
        <div
          className="
            mx-auto -mb-25 size-16
            sm:size-20
            bg-yellow-400 hover:bg-yellow-500
            rounded-full transition-all duration-300
            hover:shadow-lg border-18 border-white z-50
          "
        />
        <article className="px-4">
          <section id="problema" className="mt-16">
            <Problema />
          </section>
          <div >
            <Faixa />
          </div>
          <section
            className="
              flex flex-col mt-16
              max-w-7xl mx-auto w-full
              md:flex-row
            "
          >
            <Parceria />
          </section>
          <section id="metodologia" className="mt-16">
            <Metodologia />
          </section>
          <section
            className="
              flex flex-col mt-16
              max-w-7xl mx-auto w-full
              md:flex-row
            "
          >
            <Diagnostico />
          </section>
          <section className="mt-16">
            <Resultados />
          </section>
        </article>
        <section className="px-4 mt-20">
          <VideoCards />
          <Clientes />
          <Example />
        </section>
        <footer className="px-4 mt-20">
          <div
            className="
              flex flex-col
              max-w-7xl mx-auto w-full
              font-medium
              md:flex-row
            "
          >
            <Decolar />
          </div>
        </footer>
        <BackToTop />
      </main>
    </div>
  );
}
