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
    <div className="flex flex-col items-center justify-center gap-6 bg-background py-8 sm:py-10">
      {/* ===== MARQUEE DIREITA ===== */}
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />

        <MarqueeContent direction="right">
          {logos.map((logo, index) => (
            <MarqueeItem
              className="mx-4 sm:mx-6 md:mx-8"
              key={`right-${index}`}
            >
              <div
                className="
                  flex items-center justify-center
                  h-28 w-44
                  sm:h-36 sm:w-56
                  md:h-44 md:w-64
                  lg:h-52 lg:w-72
                  bg-yellow-300/30
                  rounded-2xl sm:rounded-3xl
                  p-3 sm:p-4 md:p-6
                "
              >
                <Image
                  alt={`Logo ${index + 1}`}
                  src={logo}
                  width={240}
                  height={160}
                  className="object-contain w-full h-full"
                  priority={index < 4}
                />
              </div>
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>

      {/* ===== MARQUEE ESQUERDA ===== */}
      <Marquee>
        <MarqueeFade side="right" />
        <MarqueeFade side="left" />

        <MarqueeContent>
          {logos.map((logo, index) => (
            <MarqueeItem className="mx-4 sm:mx-6 md:mx-8" key={`left-${index}`}>
              <div
                className="
                  flex items-center justify-center
                  h-28 w-44
                  sm:h-36 sm:w-56
                  md:h-44 md:w-64
                  lg:h-52 lg:w-72
                  bg-yellow-300/30
                  rounded-2xl sm:rounded-3xl
                  p-3 sm:p-4 md:p-6
                "
              >
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
