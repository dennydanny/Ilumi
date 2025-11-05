"use client";

import Image from "next/image";

interface Card {
  id: number;
  title: string;
  description: string;
  logo: string;
}

export default function VideoCards() {
  const cards: Card[] = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      logo: "LOGO",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      logo: "LOGO",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      logo: "LOGO",
    },
    {
      id: 4,
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      logo: "LOGO",
    },
  ];

  return (
    <main className="bg-white text-zinc-800 flex items-center justify-center min-h-screen">
      <div className="flex gap-8 overflow-x-auto px-8 py-12">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center max-w-xs text-center space-y-4"
          >
            <Image
              src="https://placehold.co/250x450/333/FFF?text=▶"
              alt={`Thumbnail de ${card.title}`}
              width={800}
              height={800}
              className="rounded-3xl shadow-md object-cover"
              unoptimized 
            />
            <div>
              <h3 className="font-extrabold text-xl">{card.title}</h3>
              <p className="text-sm text-zinc-600 mt-2">{card.description}</p>
              <p className="font-bold mt-4">{card.logo}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
