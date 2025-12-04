"use client";

interface Card {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
  logo?: string;
}

export default function VideoCards() {
  const cards: Card[] = [
    {
      id: 1,
      title: "Fernando Fernandes | Porto Velho",
      description: "Imóveis de alto padrão em Porto Velho",
      embedUrl: "https://www.youtube.com/embed/P58V1zVF67o",
    },
    {
      id: 2,
      title: "Suav | Porto Velho",
      description:
        "Esmalteria | Escovaria | Depilação | Podologia | Make | Sobrancelhas",
      embedUrl: "https://www.youtube.com/embed/T9Rax2jv5zU",
    },
    {
      id: 3,
      title: "Suav | Porto Velho",
      description:
        "Esmalteria | Escovaria | Depilação | Podologia | Make | Sobrancelhas",
      embedUrl: "https://www.youtube.com/embed/fqcihkBi70k",
    },
    {
      id: 4,
      title: "lamoozzi.oficial | Porto Velho",
      description: "Lamoozzi Pizza & Burger",
      embedUrl: "https://www.youtube.com/embed/dO_vfqZqLiU",
      logo: "/logos/lamoozzi.svg",
    },
    {
      id: 5,
      title: "Gráfica Imediata",
      description:
        "Há 25 anos, sendo referência em qualidade gráfica. Calendários, agendas, livros, pastas, folhetos e muito mais",
      embedUrl: "https://www.youtube.com/embed/FDWDKfDocEo",
    },
  ];

  return (
    <main className="bg-white text-zinc-800 py-12 md:py-16">
      {/* Mobile = carrossel | Desktop = grid */}
      <div
        className="
          flex gap-6 overflow-x-auto px-4
          md:grid md:grid-cols-2 lg:grid-cols-3
          md:gap-8 md:overflow-visible md:px-8
          max-w-7xl mx-auto
          scroll-smooth
        "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              shrink-0 w-72
              md:w-full
              bg-white rounded-3xl shadow-lg
              overflow-hidden border border-gray-200
              hover:shadow-xl transition
            "
          >
            {/* Vídeo Responsivo (16:9 real) */}
            <div className="relative w-full aspect-video">
              <iframe
                src={card.embedUrl}
                title={card.title}
                className="absolute inset-0 w-full h-full rounded-t-3xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Texto */}
            <div className="p-5 flex flex-col gap-2">
              <h3 className="font-extrabold text-base md:text-lg text-zinc-900">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-zinc-600 leading-snug">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
