"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

export function Intro() {
  return (
    <section
      className="
        montserrat
        flex flex-col gap-6
        text-left
        w-full max-w-4xl
        px-4 mx-auto
        md:ml-8 md:px-0
      "
    >
      <h1
        className="
          text-3xl leading-tight
          sm:text-4xl
          md:text-6xl
          font-medium tracking-tight
          text-zinc-700 text-balance
        "
      >
        Transformamos <span className="font-extrabold"> empresas</span> em{" "}
        <span className="relative font-extrabold bg-zinc-300">
          marcas de referência <br />
        </span>{" "}
        no digital.
      </h1>

      <h2
        className="
          text-zinc-700
          text-lg leading-tight
          sm:text-2xl
          md:text-4xl
          mt-2
        "
      >
        Nós criamos estratégias completas que posicionam sua empresa, aumentam
        seu faturamento e colocam você à frente da concorrência.
      </h2>

      <div className="flex gap-4 flex-nowrap justify-center md:justify-start">
        <Button
          asChild
          className="
              bg-yellow-300
              border-dashed border border-amber-400
              hover:bg-yellow-400
              text-zinc-700
              text-sm sm:text-base md:text-xl
              font-extrabold
              rounded-full
              px-6 sm:px-8
              py-4 sm:py-6
              transition-all duration-300
              shadow-md hover:shadow-lg
            "
        >
          <Link href="https://wa.me/5569993837283" target="_blank">
            QUERO RECEBER UMA PROPOSTA
          </Link>
        </Button>

        <Button
          asChild
          size="icon"
          className="
              bg-yellow-300
              border-dashed border border-amber-400
              hover:bg-yellow-500
              text-zinc-700 font-bold
              rounded-full
              transition-all duration-300
              shadow-md hover:shadow-lg
              px-5 py-5 sm:px-6 sm:py-6
            "
          aria-label="Ir para proposta"
        >
          <Link href="https://wa.me/5569993837283" target="_blank">
            <ArrowRightIcon
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
              strokeWidth={4}
            />
          </Link>
        </Button>
      </div>
    </section>
  );
}
