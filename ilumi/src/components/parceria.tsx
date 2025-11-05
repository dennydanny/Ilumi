"use client";

export function Parceria() {
  return (
    <main>
      <article className="flex flex-row items-center justify-between px-8 gap-16">
        <div className="flex flex-col text-left gap-8 max-w-4xl montserrat text-zinc-700">
          <h1 className="text-6xl font-extrabold tracking-tight text-balance">
            Seremos seus parceiros de investimento.
          </h1>
          <p className="font-thin text-4xl mt-4">
            Nossa metodologia validada em diferentes nichos já ajudou empresas
            de todos os portes a vender mais, atrair melhor e se posicionar como
            referência na região.
          </p>
        </div>
        <figure className="bg-amber-500 flex flex-col gap-6 rounded-xl py-6 shadow-sm w-96 h-96" />
      </article>
      
    </main>
  );
}
