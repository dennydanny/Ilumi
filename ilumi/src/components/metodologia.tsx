"use client";

export default function Metodologia() {
  return (
    <section className="relative overflow-hidden mt-12 md:mt-20  md:px-8">
      <div className="relative text-center md:text-left">
        {/* Texto de fundo */}
        <p
          className="
            font-extrabold text-orange-500 leading-none select-none 
            text-[4rem]
            md:text-[8rem]
            lg:text-[12rem]
            xl:text-[16rem]
          "
        >
          METODOLOGIA
        </p>

        {/* Texto principal */}
        <span
          className="
            absolute inset-0 flex items-center justify-center
            text-3xl md:text-5xl lg:text-6xl
            font-extrabold text-outline
          "
        >
          Conheça nossa
        </span>
      </div>
    </section>
  );
}
