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
    "https://placebear.com/g/400/300",
    "https://placebear.com/g/400/500",
    "https://placebear.com/g/300/400",
    "https://placebear.com/g/500/400",
  ];

  return (
    <div className="mx-auto">
      <ImageTextSplit />
      <div className="my-10">
        <Suspense fallback={<p>Loading</p>}>
          <FeaturedList dataPromise={featuredArtists} />
        </Suspense>
      </div>
      <LetsChat />
      <PartnerGalleries partners={partnerGalleries} />
    </div>
  );
}
