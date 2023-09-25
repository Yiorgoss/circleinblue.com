"use client";

import * as React from "react";

import Link from "next/link";

import { NavItem } from "types";
import { CircularText } from "@components/circular-text";
import { Icons } from "@components/icons";
import ActiveLink from "@components/ui/active-link";
import { Button } from "@components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@components/ui/dialog";

export function MainNav({ items }: { items: NavItem[] }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="flex w-screen flex-wrap justify-between border-b border-primary py-2">
      <div className="my-auto ml-4 md:ml-16">Logo</div>
      <div className="my-auto">Circle In Blue</div>

      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <DialogTrigger className="mr-4 md:mr-14">
          <div className="my-auto " onClick={() => setMenuOpen(!menuOpen)}>
            <Icons.menu className="h-[60px] w-[60px] stroke-1" />
          </div>
        </DialogTrigger>
        <DialogContent className="rounded-none bg-secondary-secondary p-0">
          <div className="flex flex-col">
            <div className="h-20 border-b-2 border-l-2 border-r-2 border-primary"></div>
            <div className="py-4 text-left ">
              {items.map(({ title, href }, i) => (
                <div
                  className="py-3"
                  onClick={() => setMenuOpen(false)}
                  key={i}
                >
                  <CircularText>
                    <Link href={href}>{title}</Link>
                  </CircularText>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}

/*

<div className="absolute left-0 top-0 h-full w-1/6 border-r border-primary bg-transparent"></div>
<div className="absolute right-0 top-0 h-full w-1/6 border-l border-primary bg-transparent"></div>
<div className="absolute top-0 h-1/6 w-full border-b border-primary bg-transparent"></div>
<div className="absolute bottom-0 h-1/6 w-full border-t border-primary bg-transparent"></div>
*/
