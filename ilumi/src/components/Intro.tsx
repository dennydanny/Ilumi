"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function Intro() {
  return (
    <section className=" montserrat flex-col gap-8 max-w-4xl ">
      <h1 className="text-6xl font-extrabold tracking-tight text-zinc-700 leading-tight text-balance text-left">
        Transformamos empresas em{" "}
        <span className="relative font-extrabold bg-zinc-300">
          marcas de referência
          <span className="absolute inset-0 bg-[#ececec] -z-10 h-4 bottom-1 rounded-sm"></span>
        </span>{" "}
        no digital.
      </h1>

      <h2 className="text-zinc-700 text-4xl leading-relaxed text-left">
        Nós criamos estratégias completas que posicionam sua empresa, aumentam
        seu faturamento e colocam você à frente da concorrência.
      </h2>

      <div className="flex gap-4 justify-center flex-wrap">
        <Button
          asChild
          className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold rounded-full px-8 py-6 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Link href="/proposta">QUERO RECEBER UMA PROPOSTA</Link>
        </Button>

        <Button
          size="icon"
          className="bg-yellow-400 hover:bg-yellow-500 text-zinc-900 font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          aria-label="Ir para proposta"
        >
          <ArrowRightIcon className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
