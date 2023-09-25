import Image from "next/image";

import DoubleDivider from "@components/ui/double-divider";

export default function GalleryShowcase({
  gallery,
  left,
}: {
  gallery: { name: string; description: string; image: string };
  left: boolean;
}) {
  return (
    <div
      className={`${
        left && "flex-row-reverse"
      } container flex h-[400px] w-full items-center justify-center border-y border-primary bg-secondary-secondary`}
    >
      <Image
        className="h-full w-1/3 p-10"
        src={gallery.image}
        alt="Gallery Image"
        width={300}
        height={300}
      />
      <DoubleDivider className="mr-10" axis="vertical" />
      <div className="flex w-3/4 flex-col justify-center py-10 text-center">
        <h2 className="text-3xl">{gallery.name}</h2>
        <p className="p-10 text-lg ">{gallery.description}</p>
      </div>
    </div>
  );
}
