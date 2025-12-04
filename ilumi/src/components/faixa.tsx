"use client";

export function Faixa() {
  return (
    <div className="w-full">
      {/* FAIXA SUPERIOR */}
      <div className="relative overflow-hidden bg-orange-500 py-2 md:py-3 shadow-lg z-50">
        <div className="flex whitespace-nowrap animate-marquee">
          <p className="font-extrabold text-base sm:text-xl md:text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO •
          </p>
          <p className="font-extrabold text-base sm:text-xl md:text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO •
          </p>
        </div>
      </div>

      {/* TEXTO CENTRAL */}
      <div className="px-4 py-12 sm:px-8 sm:py-16 md:py-20">
        <h1
          className="
            montserrat
            text-zinc-700
            text-center
            leading-tight
            font-medium
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            xl:text-6xl
          "
        >
          A maioria das empresas investe{" "}
          <span className="font-extrabold">tempo, energia e dinheiro </span>
          no digital sem saber o que realmente funciona.
        </h1>
      </div>

      {/* FAIXA INFERIOR */}
      <div className="relative overflow-hidden bg-orange-500 py-2 md:py-3 shadow-lg z-50 mt-2 md:mt-4">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <p className="font-extrabold text-base sm:text-xl md:text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO •
          </p>
          <p className="font-extrabold text-base sm:text-xl md:text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO •
          </p>
        </div>
      </div>
    </div>
  );
}
