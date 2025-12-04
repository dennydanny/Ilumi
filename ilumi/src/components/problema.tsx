"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";

export function Problema() {
  return (
    <div className="bg-zinc-800 flex justify-center ">
      <section className="montserrat flex flex-col text-center gap-8 w-full max-w-6xl">
        <h1
          className="
            mt-12
            text-3xl leading-tight
            sm:text-4xl
            md:text-6xl
            tracking-tight text-zinc-50 text-balance
          "
        >
          O problema não é você. É a falta de{" "}
          <span className="relative font-extrabold bg-zinc-700 px-2">
            estratégia.
          </span>
        </h1>
        <p
          className="
            text-white font-extrabold
            text-xl
            sm:text-3xl
            md:text-5xl
            mt-6
          "
        >
          SABEMOS QUE VOCÊ JÁ TENTOU:
        </p>
        <div
          className="
            flex flex-col gap-6
            md:flex-row md:justify-center
            mt-12 mb-12
          "
        >
          <Card className="w-full md:w-96 bg-red-500 text-zinc-50">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <CircleCheckBig className="text-white h-7 w-7 md:h-9 md:w-9" />
                <p className="font-extrabold text-xl md:text-4xl">Fazer</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base md:text-3xl text-left">
              <p>
                postagens constantes <br /> mas acabar sem ideias
              </p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-96 bg-red-500 text-zinc-50">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <CircleCheckBig className="text-white h-7 w-7 md:h-9 md:w-9" />
                <p className="font-extrabold text-xl md:text-4xl">Apertar</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base md:text-3xl text-left">
              <p>
                o botão de <br /> impulsionar no Instagram e só atrair curiosos
              </p>
            </CardContent>
          </Card>
          <Card className="w-full md:w-96 bg-red-500 text-zinc-50">
            <CardHeader>
              <CardTitle className="flex gap-4 items-center">
                <CircleCheckBig className="text-white h-7 w-7 md:h-9 md:w-9" />
                <p className="font-extrabold text-xl md:text-4xl">Criar</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-base md:text-3xl text-left">
              <p>
                uma identidade <br />
                visual, mas ainda se sentir genérico no mercado?
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
