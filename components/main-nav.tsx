"use client";

import * as React from "react";

import Link from "next/link";
import Image from "next/image"

import { NavItem } from "types";
import { CircularText } from "@components/circular-text";
import { Icons } from "@components/icons";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
} from "@components/ui/dialog";

export function MainNav({ items }: { items: NavItem[] }) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header className="flex w-screen flex-wrap h-[100px] justify-between border-b border-primary py-2">
      <div className="my-auto ml-4 md:ml-16 flex justify-center items-center ">
        <Link href="/"><Image src="/images/logo.png" alt="circle in blue logo" height={80} width={80} /></Link>
      </div>
      <div className="my-auto text-xl md:text-3xl font-black">Circle In Blue</div>

      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <DialogTrigger className="mr-4 md:mr-14">
          <div className="my-auto " onClick={() => setMenuOpen(!menuOpen)}>
            <Icons.menu className="h-[40px] w-[40px] stroke-1" />
          </div>
        </DialogTrigger>
        <DialogContent className="rounded-none bg-secondary-secondary p-0">
          <div className="flex flex-col">
            <div className="border-b-2 border-primary px-20">
              <div className="h-20 border-l-2 border-r-2 border-primary"></div>
            </div>
            <div className="px-20">
              <div className="flex-col py-5 items-center justify-center border-x-2 border-primary">
                {items.map(({ title, href }, i) => (
                  <div
                    className="mx-auto w-fit py-3"
                    onClick={() => setMenuOpen(false)}
                    key={i}
                  >
                  <Link href={href}>
                    <CircularText>
                      {title}
                    </CircularText>
                  </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t-2 border-primary px-20">
              <div className="h-20 border-l-2 border-r-2 border-primary"></div>
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
