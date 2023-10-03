"use client";

import Link from "next/link";

import DoubleDivider from "@components/ui/double-divider";
import { EmailSignup } from "@components/email-signup";
import { Icons } from "@components/icons";

const SocialIcon: Map<string, React.JSX.Element> = new Map([
  ["instagram", <Icons.instagram className="h-5 w-5" key={'ig'}/>],
  ["linkedin", <Icons.linkedIn className="h-5 w-5" key={'li'}/>],
]);
const LeftSide = ({
  socials,
  nav,
}: {
  socials: { title: string; href: string }[];
  nav: { title: string; href: string }[];
}) => {
  return (
    <div className="grid grid-cols-2 bg-secondary-secondary px-10 pt-0 md:pt-10">
      <div className="mx-auto flex flex-col py-6 md:py-0">
        <h2 className="w-fit border-b border-primary px-3 py-2 text-lg font-medium">
          Find Us
        </h2>
        <ul className="mt-4 ">
          {socials.map(({ title, href }, i) => (
            <li className="pt-4" key={i}>
              <Link href={href}>{SocialIcon.get(title)}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto flex flex-col py-6 md:py-0">
        <h2 className="w-fit border-b border-primary px-3 py-2 text-lg font-medium">
          Helpful Links
        </h2>
        <ul className="mt-4 text-base md:text-lg">
          {nav.map(({ title, href }, i) => (
            <li className="pt-4" key={i}>
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
    <div className="">
      <DoubleDivider axis="horizontal" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px border-b border-primary bg-primary">
        <LeftSide socials={items.socials} nav={items.nav} />
        <EmailSignup />
      </div>
      <div
        className="flex h-14 w-full animate-pulse items-center justify-center hover:cursor-pointer "
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
      >
        <div className="text-lg">Back to Top</div>
        <Icons.arrowUp className="h-10 w-10" />
      </div>
    </div>
  );
}
