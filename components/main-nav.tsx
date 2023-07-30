"use client";

import * as React from "react";

import Link from "next/link";

import { NavItem } from "types";
import { Icons } from "@components/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTrigger,
} from "@components/ui/sheet";
import { Button } from "@components/ui/button";

export function MainNav({
  items,
  children,
}: {
  items: NavItem[];
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = React.useState(true);

  console.log(items);
  return (
    <header className="flex w-screen flex-wrap justify-between py-2">
      <div className="my-auto ml-4 md:ml-16">Logo</div>
      <div className="my-auto">Circle In Blue</div>

      <Sheet>
        <SheetTrigger>
          <button
            className="my-auto mr-4 md:mr-16"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icons.alignRight className="h-[60px] w-[60px] stroke-1" />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="mt-[10vh] gap-6">
            {items.map(({ title, href }, i) => (
              <Link href={href} className="">
                <Button variant="link" className="py-8 text-xl focus:border-0">
                  {title}
                </Button>
              </Link>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
}
