import * as React from "react";

import { NavItem } from "types";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@components/ui/sheet";

export default function MobileNavMenu({ items }: { items: NavItem[] }) {
  return (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
    </Sheet>
  );
}

/*
   <nav className="relative inset-y-0 right-0 z-20 h-screen w-screen bg-slate-500/25 duration-200 animate-in slide-in-from-left ">
   <div className="z-10 ml-auto flex h-full w-3/4 flex-col justify-start bg-white ">
   <div className="px-5 pt-10">
   {items.map((item, i) => (
   <div className="py-5">{item.title}</div>
   ))}
   </div>
   </div>
   </nav>

 */
