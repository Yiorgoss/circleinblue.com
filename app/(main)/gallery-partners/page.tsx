import * as React from "react";

import GridItem from "@components/grid-item"
import { galleries } from "@data/galleries"


export default function GalleryPartners() {
  return (
    <div className="pt-10">
      <h1 className="border-y border-primary bg-secondary-secondary py-10 text-center text-3xl">
        Our Gallery Partners
      </h1>
      <div className="py-10 mx-auto justify-center container flex flex-wrap bg-secondary-secondary ">
        {galleries.map((gallery, i) => (
          <div className="w-1/2 px-6 py-7" key={i}>
            <GridItem gallery={gallery} />
          </div>
        ))}
      </div>
    </div>
  );
}
