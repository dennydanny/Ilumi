"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden p-2 rounded-lg border border-zinc-300"
        aria-label="Abrir menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <NavigationMenu
        className={`
          ${open ? "block" : "hidden"}
          absolute right-0 mt-4 w-48 rounded-xl bg-white shadow-lg p-4
          md:static md:block md:shadow-none md:bg-transparent md:p-0
        `}
      >
        <NavigationMenuList className="flex flex-col gap-4 font-bold md:flex-row md:gap-8">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#intro"
                onClick={() => setOpen(false)}
                className="block"
              >
                Início
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#problema"
                onClick={() => setOpen(false)}
                className="block"
              >
                Sobre nós
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#metodologia"
                onClick={() => setOpen(false)}
                className="block"
              >
                Serviços
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
