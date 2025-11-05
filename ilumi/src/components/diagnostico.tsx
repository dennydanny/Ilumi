"use client";

const etapas = [
  {
    titulo: "Diagnóstico",
    texto1: "Analisamos profundamente seu negócio, concorrentes e público-alvo e descobrimos o que impede seu crescimento, identificando oportunidades que podem colocar sua marca em destaque.",
    imagemEsquerda: false,
  },
  {
    titulo: "Planejamento",
    texto1:
      "Definimos uma estratégia personalizada com base nos seus objetivos e criamos um plano de ação que une branding, conteúdo e performance tudo com foco em resultados mensuráveis.",
    imagemEsquerda: true,
  },
  {
    titulo: "Aprovação",
    texto1: "Apresentamos o plano de forma clara e visual, você acompanha cada etapa, aprova direcionamentos e participa das decisões estratégicas com total transparência.",
    imagemEsquerda: false,
  },
  {
    titulo: "Execução",
    texto1:
      "Nossa equipe coloca em prática todo o plano: identidade visual, campanhas, conteúdos e anúncios. Entregamos uma presença digital completa e profissional para sua marca.",
    imagemEsquerda: true,
  },
  {
    titulo: "Monitoramento",
    texto1: "Acompanhamos, ajustamos e otimizamos cada resultado, relatórios mensais e métricas em tempo real mostram o impacto das ações e garantem evolução contínua.",
    imagemEsquerda: false,
  },
];

export function Diagnostico() {
  return (
    <main className="flex flex-col gap-y-24 mb-32">
      {etapas.map((etapa, index) => (
        <article
          key={index}
          className={`flex flex-row items-stretch justify-between px-8 gap-16 ${
            etapa.imagemEsquerda ? "flex-row-reverse" : ""
          }`}
        >
          {/* Texto */}
          <div className="flex flex-col justify-center text-left gap-6 max-w-3xl montserrat text-zinc-800">
            {/* Título */}
            <h2 className="text-6xl font-extrabold tracking-tight text-zinc-900">
              {etapa.titulo}
            </h2>
            {/* Lead */}
            <p className="text-2xl font-medium text-zinc-700 leading-snug">
              {etapa.texto1}
            </p>
          </div>
          {/* Figura */}
          <figure className="bg-amber-500 flex flex-col gap-6 rounded-xl shadow-sm p-40" />
        </article>
      ))}
    </main>
  );
}
