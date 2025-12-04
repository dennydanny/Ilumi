"use client";

import Image from "next/image";

const etapas = [
  {
    titulo: "Diagnóstico",
    texto1:
      "Analisamos profundamente seu negócio, concorrentes e público-alvo e descobrimos o que impede seu crescimento, identificando oportunidades que podem colocar sua marca em destaque.",
    imagemEsquerda: false,
    imagem: "/image-cards/diagnostico.jpg",
  },
  {
    titulo: "Planejamento",
    texto1:
      "Definimos uma estratégia personalizada com base nos seus objetivos e criamos um plano de ação que une branding, conteúdo e performance tudo com foco em resultados mensuráveis.",
    imagemEsquerda: true,
    imagem: "/image-cards/planejamento.jpg",
  },
  {
    titulo: "Aprovação",
    texto1:
      "Apresentamos o plano de forma clara e visual, você acompanha cada etapa, aprova direcionamentos e participa das decisões estratégicas com total transparência.",
    imagemEsquerda: false,
    imagem: "/image-cards/aprovacao.png",
  },
  {
    titulo: "Execução",
    texto1:
      "Nossa equipe coloca em prática todo o plano: identidade visual, campanhas, conteúdos e anúncios. Entregamos uma presença digital completa e profissional para sua marca.",
    imagemEsquerda: true,
    imagem: "/image-cards/execucao.jpg",
  },
  {
    titulo: "Monitoramento",
    texto1:
      "Acompanhamos, ajustamos e otimizamos cada resultado, relatórios mensais e métricas em tempo real mostram o impacto das ações e garantem evolução contínua.",
    imagemEsquerda: false,
    imagem: "/image-cards/monitoramento.jpg",
  },
];

export function Diagnostico() {
  return (
    <main className="flex flex-col gap-y-20 px-4 md:px-8 mb-32">
      {etapas.map((etapa, index) => (
        <article
          key={index}
          className={`
            flex flex-col gap-10 items-center
            md:flex-row md:items-stretch md:justify-between md:gap-16
            ${etapa.imagemEsquerda ? "md:flex-row-reverse" : ""}
          `}
        >
          {/* Texto */}
          <div className="flex flex-col justify-center text-center md:text-left gap-5 max-w-3xl montserrat text-zinc-800">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900">
              {etapa.titulo}
            </h2>

            <p className="text-base md:text-xl lg:text-2xl font-medium text-zinc-700 leading-relaxed">
              {etapa.texto1}
            </p>
          </div>

          {/* Imagem */}
          <div className="w-full md:w-[400px]">
            <Image
              src={etapa.imagem}
              alt={`Imagem para ${etapa.titulo}`}
              width={400}
              height={300}
              className="rounded-xl shadow-sm w-full h-auto object-cover"
            />
          </div>
        </article>
      ))}
    </main>
  );
}
