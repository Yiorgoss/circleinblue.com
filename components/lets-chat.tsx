import Link from "next/link";

import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";

import { sitemap } from "@config/site";

export default function LetsChat() {
  return (
    <div className="bg-secondary-secondary">
      <Separator className="mt-8" />
      <div className="container mx-auto text-center">
        <div className="p-10">
          <p className="text-xl">
            Circle in Blue believes in not only showcasing the artist but also
            the story behind the individual.
          </p>
          <p className="font-base mt-6 text-xl">
            Join our community of artists and we will feature your art through
            our partnered galleries.
          </p>
          <Link href={sitemap.contactUs}>
            <Button variant="outline" className="mt-8" size="xl2">
              Let&lsquo;s Chat
            </Button>
          </Link>
        </div>
      </div>
      <Separator className="mb-14" />
    </div>
  );
}
