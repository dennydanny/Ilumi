"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function Decolar() {
  return (
    <section className="montserrat flex flex-row items-stretch justify-between gap-16 px-8 mb-18">
      {/* Texto e botões */}
      <div className="flex flex-col text-left gap-8 max-w-3xl text-zinc-700">
        <h1 className="text-6xl font-medium tracking-tight leading-tight text-balance">
          Quer saber como sua marca pode{" "}
          <span className="relative font-extrabold bg-zinc-300 px-2">
            decolar também?
          </span>
        </h1>

        <h2 className="text-4xl font-light leading-tight mt-4">
          Responda um formulário rápido e receba uma proposta estratégica
          pensada só pra você.
        </h2>

        <div className="flex gap-4 flex-wrap">
          <Button
            asChild
            className="bg-yellow-300 border-dashed border border-amber-400 hover:bg-yellow-400 text-zinc-700 text-2xl font-extrabold rounded-full px-8 py-6 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Link href="/proposta">DECOLAR MINHA MARCA</Link>
          </Button>

          <Button
            size="icon"
            className="bg-yellow-300 border-dashed border border-amber-400 hover:bg-yellow-500 text-zinc-700 font-bold rounded-full transition-all duration-300 shadow-md hover:shadow-lg px-6 py-6"
            aria-label="Ir para proposta"
          >
            <ArrowRightIcon className="h-12 w-12" strokeWidth={4} />
          </Button>
        </div>
      </div>

      {/* Figura ao lado */}
      <figure className="bg-amber-500 shrink-0 rounded-2xl shadow-lg p-50" />
    </section>
  );
}
