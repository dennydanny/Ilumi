"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { CircleCheckBig } from "lucide-react";

export function Exemplo() {
  return (
    <div className="bg-zinc-800 flex justify-center">
      <section className=" montserrat flex-col text-center gap-8 max-w-4xl ">
        <h1 className="text-6xl font-medium tracking-tight text-zinc-50 leading-tight text-balance mt-12">
          O problema não é você. É a <br/> falta de {""}
          <span className="relative font-extrabold ">
            estratrégia
            <br />
          </span>
        </h1>
        <div className="flex flex-wrap gap-6 justify-center mt-12 mb-12">
          {/* Card 1 */}
          <Card className="w-96 bg-red-500 text-zinc-50">
            <CardHeader>
              <CardTitle className="flex gap-4">
                <CircleCheckBig className="text-white size-9" />
                <p className="font-extrabold text-4xl">Fazer</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl text-left">
              <p>
                postagens <br /> constantes mas acabar sem ideia
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="w-96 bg-red-500 text-zinc-50">
            <CardHeader>
              <CardTitle className="flex gap-4">
                <CircleCheckBig className="text-white size-9" />
                <p className="font-extrabold text-4xl">Apertar</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl text-left">
              <p>
                o botão de <br /> impulsionar no Instagram e só atrair curiosos
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="w-96 bg-red-500 text-zinc-50">
            <CardHeader>
              <CardTitle className="flex gap-4">
                <CircleCheckBig className="text-white size-9" />
                <p className="font-extrabold text-4xl">Criar</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-3xl text-left">
              <p>
                uma identidade
                <br />
                visual, mas ainda se sentir genérico no mercado?
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
