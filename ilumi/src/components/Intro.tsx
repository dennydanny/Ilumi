"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function Intro() {
  return (
    <section className="montserrat flex-col text-left gap-8 max-w-4xl ml-8">
      <h1 className="text-6xl font-medium tracking-tight text-zinc-700 leading-tight text-balance ">
        Transformamos <span className="font-extrabold"> empresas</span> em{" "}
        <span className="relative font-extrabold bg-zinc-300">
          marcas de referência <br />
        </span>{" "}
        no digital.
      </h1>

      <h2 className="text-zinc-700 text-4xl leading-tight text-left mt-4">
        Nós criamos estratégias completas que posicionam sua empresa, aumentam
        seu faturamento e colocam você à frente da concorrência.
      </h2>

      <div className="flex gap-4 items-start flex-wrap mt-12 mb-10">
        <Button
          asChild
          className="bg-yellow-300 border-dashed border border-amber-400 hover:bg-yellow-400 text-zinc-700 text-2xl font-extrabold rounded-full px-8 py-6 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Link href="/proposta">QUERO RECEBER UMA PROPOSTA</Link>
        </Button>

        <Button
          size="icon"
          className=" bg-yellow-300 border-dashed border border-amber-400 hover:bg-yellow-500 text-zinc-700 font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg px-6 py-6"
          aria-label="Ir para proposta"
        >
          <ArrowRightIcon className="h-12 w-12" strokeWidth="4" />
        </Button>
      </div>
    </section>
  );
}
