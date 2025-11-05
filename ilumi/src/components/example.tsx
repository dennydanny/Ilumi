"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import Image from "next/image";

const Example = () => (
  <div className="flex flex-col items-center justify-center gap-4 bg-background py-10">
    {/* Marquee indo para a esquerda (padrão) */}
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent direction="right">
        {new Array(10).fill(null).map((_, index) => (
          <MarqueeItem className="mx-8 h-52 w-72" key={`left-${index}`}>
            <Image
              alt={`Placeholder ${index}`}
              src={`https://placehold.co/300x200/transparent/yellow/text=logos?random=${index}`}
              width={300}
              height={200}
              unoptimized
              className="overflow-hidden bg-yellow-300/30 rounded-3xl"
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>

    {/* Marquee invertido (voltando) */}
    <Marquee>
      <MarqueeFade side="right" />
      <MarqueeFade side="left" />
      <MarqueeContent>
        {new Array(10).fill(null).map((_, index) => (
          <MarqueeItem className="mx-8 h-52 w-72" key={`right-${index}`}>
            <Image
              alt={`Placeholder ${index}`}
              src={`https://placehold.co/300x200/transparent/yellow/text=logos?random=${
                index + 10
              }`}
              width={300}
              height={200}
              unoptimized
              className="overflow-hidden bg-yellow-300/30 rounded-3xl"
            />
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);

export default Example;
