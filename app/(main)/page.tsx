import { Suspense } from "react";

import ImageTextSplit from "@components/image-text-split";
import FeaturedList from "@components/featured-list";
import LetsChat from "@components/lets-chat";
import PartnerGalleries from "@components/partner-galleries";

import { Skeleton } from "@components/ui/skeleton";

import { getFeaturedProducts } from "@lib/medusa";

import { Artist } from "types";
import mockArtists from "@data/mock-artist";

export default function Home() {
  const featuredArtists: Promise<Artist[]> = new Promise((res, _) => {
    res(mockArtists);
  });

  const partnerGalleries = [
    "/images/landing-5.jpg",
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
  ];

  return (
    <div className="mx-auto">
      <div className="h-[calc(100vh-100px)] pb-20">
        <ImageTextSplit />
      </div>
      <div className="">
        <Suspense fallback={<p>Loading</p>}>
          <FeaturedList dataPromise={featuredArtists} />
        </Suspense>
      </div>
      <LetsChat />
      <PartnerGalleries partners={partnerGalleries} />
    </div>
  );
}
