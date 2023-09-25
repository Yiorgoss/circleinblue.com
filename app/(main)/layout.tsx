import { MainNav } from "@components/main-nav";
import { Footer } from "@components/footer";

import { mainNav, footer } from "@config/site";
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden">
      <MainNav items={mainNav} />
      {children}
      <Footer items={footer} />
    </div>
  );
}
