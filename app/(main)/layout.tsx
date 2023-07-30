import { MainNav } from "@components/main-nav";

import { siteConfig } from "@config/site";
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainNav items={siteConfig.mainNav}>{children}</MainNav>;
}
