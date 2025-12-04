"use client";

import Image from "next/image";

export function Parceria() {
  return (
    <main className="px-4 md:px-8">
      <article
        className="
          flex flex-col-reverse
          md:flex-row
          items-center justify-between
          gap-10 md:gap-16
          max-w-7xl mx-auto
        "
      >
        {/* Texto */}
        <div
          className="
            flex flex-col text-center md:text-left
            gap-6
            max-w-4xl
            montserrat text-zinc-700
          "
        >
          <h1
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-tight
              text-balance
            "
          >
            Seremos seus parceiros de investimento.
          </h1>

          <p
            className="
              text-base
              sm:text-lg
              md:text-xl
              lg:text-2xl
              font-light
              leading-relaxed
            "
          >
            Nossa metodologia validada em diferentes nichos já ajudou empresas
            de todos os portes a vender mais, atrair melhor e se posicionar como
            referência na região.
          </p>
        </div>

        {/* Imagem */}
        <Image
          src="/image-cards/parceiros.jpg"
          alt="Imagem de parceiros de negócio"
          width={400}
          height={300}
          className="
            w-full
            max-w-sm
            md:max-w-md
            rounded-xl
            shadow-sm
          "
          priority
        />
      </article>
    </main>
  );
}
