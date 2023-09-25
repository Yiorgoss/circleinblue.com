"use client";

import Link from "next/link";

import DoubleDivider from "@components/ui/double-divider";
import { Separator } from "@components/ui/separator";
import { EmailSignup } from "@components/email-signup";
import { Icons } from "@components/icons";

const LeftSide = ({
  socials,
  nav,
}: {
  socials: { title: string; href: string }[];
  nav: { title: string; href: string }[];
}) => {
  return (
    <div className="grid grid-cols-2 bg-secondary pt-10">
      <div className="mx-auto flex flex-col">
        <h2 className="w-fit border-b border-primary px-3 py-2 text-lg font-medium">
          Find Us
        </h2>
        <ul className="mt-3">
          {socials.map(({ title, href }, i) => (
            <li className="" key={i}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto flex flex-col">
        <h2 className="w-fit border-b border-primary px-3 py-2 text-lg font-medium">
          Helpful Links
        </h2>
        <ul className="mt-4">
          {nav.map(({ title, href }, i) => (
            <li className="" key={i}>
              <Link href={href}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function Footer({
  items,
}: {
  items: {
    socials: { title: string; href: string }[];
    nav: { title: string; href: string }[];
  };
}) {
  return (
    <div className="mt-10">
      <DoubleDivider axis="horizontal" />
      <div className="grid grid-cols-2 gap-px border-b border-primary bg-primary">
        <LeftSide socials={items.socials} nav={items.nav} />
        <EmailSignup />
      </div>
      <div
        className="flex h-20 w-full animate-pulse items-center justify-center hover:cursor-pointer "
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <div className="text-xl">Back to Top</div>
        <Icons.arrowUp className="h-14 w-14" />
      </div>
    </div>
  );
}
