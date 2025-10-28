import { Header } from "@/components/Header";
import { Intro } from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col  bg-white dark:bg-black">
        <div className="flex flex-row justify-around items-center mt-4">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 text-pretty md:text-balance text-base font-medium sm:flex-row">
          <Intro />
        </div>
      </main>
    </div>
  );
}
