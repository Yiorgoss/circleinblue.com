import * as React from "react";

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
      <div className="py-10 bg-secondary-secondary ">
        {galleries.map((gallery, i) => (
          <div className="py-10 " key={i}>
            <GalleryShowcase left={i % 2 == 1} gallery={gallery} />
          </div>
        ))}
      </div>
    </div>
  );
}
