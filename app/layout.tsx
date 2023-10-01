import Providers from "@lib/providers";
import "styles/globals.css";

import { Playfair, } from 'next/font/google'

const playfair = Playfair(
{subsets:['latin'],

variable:'--font-playfair'}
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html>
      <body className="font-normal leading-loose text-xl tracking-wide">
        <Providers>
          <main className={` ${playfair.variable}`}>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
