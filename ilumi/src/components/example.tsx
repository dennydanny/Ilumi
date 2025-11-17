"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import Image from "next/image";

const Example = () => {
  const logos = [
    "/logos/BS.svg",
    "/logos/COIMBRA.svg",
    "/logos/CVC.svg",
    "/logos/TECNODIESEL.svg",
    "/logos/CLC.svg",
    "/logos/DEEPSOUL.svg",
    "/logos/LUV.svg",
    "/logos/NATURA.svg",
    "/logos/REGALLE.svg",
    "/logos/VIATREVISO.svg",
    "/logos/LAMOOZZI.svg",
    "/logos/GILBERTO.svg",
    "/logos/THEKING.svg",
    "/logos/LOCMAQ.svg",
    "/logos/DISTCOIMBRA.svg",
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-background py-10">
      {/* Marquee indo para a direita */}
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent direction="right">
          {logos.map((logo, index) => (
            <MarqueeItem className="mx-8" key={`right-${index}`}>
              <div className="h-52 w-72 bg-yellow-300/30 rounded-3xl flex items-center justify-center p-6">
                <Image
                  alt={`Logo ${index + 1}`}
                  src={logo}
                  width={240}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>

      {/* Marquee indo para a esquerda */}
      <Marquee>
        <MarqueeFade side="right" />
        <MarqueeFade side="left" />
        <MarqueeContent>
          {logos.map((logo, index) => (
            <MarqueeItem className="mx-8" key={`left-${index}`}>
              <div className="h-52 w-72 bg-yellow-300/30 rounded-3xl flex items-center justify-center p-6">
                <Image
                  alt={`Logo ${index + 1}`}
                  src={logo}
                  width={240}
                  height={160}
                  className="object-contain w-full h-full"
                />
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
};

export default Example;
