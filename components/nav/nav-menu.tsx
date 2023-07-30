import * as React from "react";

import Link from "next/link";

import { NavItem } from "types";

export default function NavMenu({ items }: { items: NavItem[] }) {
  return (
    <nav className="flex w-screen justify-center gap-10 py-5 ">
      {items.map(({ href, title }, i) => (
        <Link className="border-primary hover:border-b-2" href={href}>
          {title}
        </Link>
      ))}
    </nav>
  );
}
