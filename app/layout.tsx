import Providers from "@lib/providers";
import "styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Providers>
          <main className="relative">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
