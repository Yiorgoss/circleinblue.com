import Image from "next/image";
import * as React from "react";

import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";
import { Carousel } from "@components/ui/carousel";
import { Icons } from "@components/icons";
import GalleryShowcase from "@components/gallery-showcase";

const galleries = [
  {
    name: "Domus Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://placebear.com/400/400",
  },
  {
    name: "Domus Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://placebear.com/400/400",
  },
  {
    name: "Domus Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://placebear.com/400/400",
  },
  {
    name: "Domus Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    image: "https://placebear.com/400/400",
  },
];

export default function GalleryPartners() {
  return (
    <div className="pt-10">
      <h1 className="border-y border-primary bg-secondary-secondary py-10 text-center text-5xl">
        Our Gallery Partners
      </h1>
      <div className="my-10 ">
        {galleries.map((gallery, i) => (
          <div className="my-10 py-6">
            <GalleryShowcase left={i % 2 == 0} gallery={gallery} />
          </div>
        ))}
      </div>
    </div>
  );
}
