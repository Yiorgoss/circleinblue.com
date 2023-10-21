import Link from "next/link";
import * as React from "react";

import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { Carousel } from "@components/ui/carousel";

import { sitemap } from "@config/site";
import { Gallery } from "types"

export default function PartnerGalleries({ galleries }: { galleries: Gallery[] }) {

  const galleryImages = galleries.map(gallery => gallery.image)

  return (
    <div className=" grid-col-1 mb-10 grid border-y border-primary md:grid-cols-2">
      <div className="h-[500px]">
        <Carousel data={galleryImages} />
      </div>
      <div className="align-center flex flex-col justify-end bg-secondary-secondary pb-12">
        <p className="p-10 px-14 text-center font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Separator className="mx-auto mb-8 w-4/5 md:w-1/2 " />
        <Link className="mx-auto" href={sitemap.galleries}>
          <Button
            variant="outline"
            size="xl2"
            className=" mx-auto w-fit bg-secondary "
          >
            Galleries We Partner With
          </Button>
        </Link>
      </div>
    </div>
  );
}
