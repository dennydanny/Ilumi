"use client";

interface Card {
  id: number;
  title: string;
  description: string;
  embedUrl: string;
}

export default function VideoCards() {
  const cards: Card[] = [
    {
      id: 1,
      title: "Fernando Fernandes | Porto Velho",
      description: "Imóveis de alto padrão em Porto Velho",
      embedUrl: "https://www.youtube.com/embed/P58V1zVF67o",
      //TODO: adicionar logo das emprsa, lado esquerdo do nome
    },
    {
      id: 2,
      title: "Suav | Porto Velho",
      description: "Esmalteria | Escovaria | Depilação | Podologia | Make | Sobrancelhas",
      embedUrl: "https://www.youtube.com/embed/T9Rax2jv5zU",
    },
    {
      id: 3,
      title: "Suav | Porto Velho",
      description: "Esmalteria | Escovaria | Depilação | Podologia | Make | Sobrancelhas",
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
      description: "Há 25 anos, sendo referência em qualidade gráfica. Calendários, agendas, livros, pastas, folhetos e muito mais",
      embedUrl: "https://www.youtube.com/embed/FDWDKfDocEo",
    },
  ];

  return (
    <main className="bg-white text-zinc-800 flex items-center justify-center flex-col py-16 ">
      <div className="flex gap-8 overflow-x-auto px-8 py-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex-shrink-0 w-80 bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Card Container */}
            <div className="flex flex-col h-auto">
              {/* Vídeo dentro do card */}
              <iframe
                src={card.embedUrl}
                title={card.title}
                className="w-full h-80 rounded-t-3xl"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              
              {/* Texto dentro do card */}
              <div className="p-6">
                <h3 className="font-extrabold text-lg text-zinc-900">{card.title}</h3>
                <p className="text-sm text-zinc-600 mt-2">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}