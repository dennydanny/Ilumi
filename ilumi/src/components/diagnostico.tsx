"use client";

const etapas = [
  {
    titulo: "Diagnóstico",
    texto1: "Analisamos profundamente seu negócio, correntes e público-alvo.",
    texto2:
      "Descobrimos o que impede seu crescimento e identificamos oportunidades que podem colocar sua marca em destaque.",
    imagemEsquerda: false,
  },
  {
    titulo: "Planejamento",
    texto1:
      "Definimos uma estratégia personalizada com base nos seus objetivos.",
    texto2:
      "Criamos um plano de ação que une branding, conteúdo e performance — tudo com foco em resultados mensuráveis.",
    imagemEsquerda: true,
  },
  {
    titulo: "Aprovação",
    texto1: "Apresentamos o plano de forma clara e visual.",
    texto2:
      "Você acompanha cada etapa, aprova direcionamentos e participa das decisões estratégicas com total transparência.",
    imagemEsquerda: false,
  },
  {
    titulo: "Execução",
    texto1:
      "Nossa equipe coloca em prática todo o plano: identidade visual, campanhas, conteúdos e anúncios, entregando uma presença digital completa e profissional.",
    imagemEsquerda: true,
  },
  {
    titulo: "Monitoramento",
    texto1: "Acompanhamos, ajustamos e otimizamos cada resultado.",
    texto2:
      "Relatórios mensais e métricas em tempo real mostram o impacto das ações e garantem evolução contínua.",
    imagemEsquerda: false,
  },
];

export function Diagnostico() {
  return (
    <main className="flex flex-col gap-y-16">
      {etapas.map((etapa, index) => (
        <article
          key={index}
          className={`flex flex-row items-stretch justify-between px-8 gap-16 ${
            etapa.imagemEsquerda ? "flex-row-reverse" : ""
          }`}
        >
          {/* Texto */}
          <div className="flex flex-col text-left gap-8 max-w-4xl montserrat text-zinc-700">
            <h1 className="text-6xl font-extrabold tracking-tight text-balance">
              {etapa.titulo}
            </h1>
            <p className="font-thin text-5xl mt-2">{etapa.texto1}</p>
            {etapa.texto2 && (
              <span className="font-thin text-5xl ">{etapa.texto2}</span>
            )}
          </div>

          {/* Figura (tamanho fixo como em Parceria) */}
          <figure className="bg-amber-500 flex flex-col gap-6 rounded-xl shadow-sm p-40" />
        </article>
      ))}
    </main>
  );
}
