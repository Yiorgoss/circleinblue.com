import Image from "next/image";
import Link from "next/link";

import { Icons } from "@components/icons";
import DoubleDivider from "@components/ui/double-divider";

export default function GalleryShowcase({
  gallery,
  left,
}: {
  gallery: {
    name: string;
    description: string;
    image: string;
    externalUrl?: string;
  };
  left: boolean;
}) {
  return (
    <div
      className={`${
        left && "md:flex-row-reverse"
      } flex h-full w-full flex-col items-center justify-center border-y border-primary bg-background pt-10 md:h-[400px] md:flex-row md:pt-0`}
    >
      <div className="relative h-full w-full p-0 md:w-1/3 md:p-10">
        <Image
          className="h-full w-full object-cover"
          src={gallery.image}
          alt="Gallery Image"
          width={300}
          height={300}
        />

        <div
          className={`absolute top-0 p-0 md:p-10 ${
            left ? "right-0" : "left-0"
          } `}
        >
          <Link href={gallery.externalUrl ?? "#"}>
            <Icons.externalLink className="" />
          </Link>
        </div>
      </div>
      <DoubleDivider className="mr-10" axis="vertical" />
      <div className="flex flex-col justify-center px-6 py-10 text-center md:px-0">
        <h2 className="pb-5 text-3xl">{gallery.name}</h2>
        <p className="p-0 text-lg md:p-10 ">{gallery.description}</p>
      </div>
    </div>
  );
}
