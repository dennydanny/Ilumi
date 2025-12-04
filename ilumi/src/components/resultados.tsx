"use client";

export default function Resultados() {
  return (
    <section className="relative overflow-hidden mb-12 sm:mb-16">
      <div className="relative text-center sm:text-left px-4 sm:px-8">
        {/* TEXTO GIGANTE (FUNDO) */}
        <p
          className="
            font-extrabold
            text-yellow-400
            leading-none
            select-none
            text-[4.5rem]
            sm:text-[7rem]
            md:text-[10rem]
            lg:text-[14rem]
            xl:text-[18rem]
          "
        >
          RESULTADOS
        </p>

        {/* TEXTO SOBREPOSTO */}
        <span
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            text-outline
            font-extrabold
            text-white
            text-xl
            sm:text-2xl
            md:text-3xl
            lg:text-4xl
            xl:text-[5rem]
            text-center
            whitespace-nowrap
          "
        >
          reais que importam
        </span>
      </div>
    </section>
  );
}
