"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export function Decolar() {
  return (
    <section
      className="
        montserrat
        flex flex-col-reverse items-center
        md:flex-row md:items-stretch
        justify-between
        gap-10 md:gap-16
        px-4 md:px-8
        mb-16
        max-w-7xl mx-auto
      "
    >
      {/* TEXTO + BOTÕES */}
      <div
        className="
          flex flex-col
          text-center md:text-left
          gap-6 md:gap-8
          max-w-3xl
          text-zinc-700
        "
      >
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-medium
            tracking-tight
            leading-tight
            text-balance
          "
        >
          Quer saber como sua marca pode{" "}
          <span className="relative font-extrabold bg-zinc-300 px-2">
            decolar também?
          </span>
        </h1>

        <h2
          className="
            text-base
            sm:text-lg
            md:text-xl
            lg:text-2xl
            font-light
            leading-relaxed
            mt-2 md:mt-4
          "
        >
          Responda um formulário rápido e receba uma proposta estratégica
          pensada só pra você.
        </h2>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
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
              DECOLAR MINHA MARCA
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
      </div>

      {/* IMAGEM */}
      <Image
        src="/image-cards/parceiros.jpg"
        alt="Imagem de parceiros"
        width={450}
        height={400}
        className="
          w-full
          max-w-xs sm:max-w-sm md:max-w-md
          rounded-xl
          shadow-sm
        "
        priority
      />
    </section>
  );
}
