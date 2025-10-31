"use client";

export function Faixa() {
  return (
    <div>
      {/* FAIXA SUPERIOR - vai da direita para a esquerda */}
      <div className="relative overflow-hidden bg-orange-500 py-3 shadow-lg z-50">
        <div className="flex whitespace-nowrap animate-marquee">
          <p className="font-extrabold text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ
            NÃO ESTÁ SOZINHO
          </p>
          <p className="font-extrabold text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ
            NÃO ESTÁ SOZINHO
          </p>
        </div>
      </div>

      {/* TEXTO CENTRAL */}
      <div>
        <h1 className="montserrat text-zinc-700 text-7xl text-center p-24">
          A maioria das empresas investe <span className=" font-extrabold">tempo, energia e dinheiro </span>{" "}
          no digital sem saber o que realmente funciona.
        </h1>
      </div>

      {/* FAIXA INFERIOR - mesma animação, mas invertida */}
      <div className="relative overflow-hidden bg-orange-500 py-3 shadow-lg z-50 mt-4">
        <div className="flex whitespace-nowrap animate-marquee-reverse">
          <p className="font-extrabold text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ
            NÃO ESTÁ SOZINHO
          </p>
          <p className="font-extrabold text-3xl text-white mx-4">
            VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ
            SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO
            ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ NÃO ESTÁ SOZINHO • VOCÊ
            NÃO ESTÁ SOZINHO
          </p>
        </div>
      </div>
    </div>
  );
}
