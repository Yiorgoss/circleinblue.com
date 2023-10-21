import { Suspense } from "react";
import dynamic from "next/dynamic"

import ImageTextSplit from "@components/image-text-split";
const FeaturedList = dynamic(() => import('../../components/featured-list'))
const LetsChat = dynamic(() => import('../../components/lets-chat'))
const PartnerGalleries = dynamic(() => import('../../components/partner-galleries'))

import { Artist } from "types";
import { artists } from "@data/artists";
import { galleries } from '@data/galleries'

export default function Home() {
  const featuredArtists: Promise<Artist[]> = new Promise((res, _) => {
    res(artists);
  });


  return (
    <div className="mx-auto">
      <div className="w-full h-full md:h-[calc(100vh-100px)] pb-20">
        <ImageTextSplit />
      </div>
      <div className="">
        <Suspense fallback={<p>Loading</p>}>
          <FeaturedList dataPromise={featuredArtists} />
        </Suspense>
      </div>
      <LetsChat />
      <PartnerGalleries galleries={galleries} />
    </div>
  );
}
