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
        left && "md:flex-row-reverse"
      } flex h-full md:flex-row pt-10 md:pt-0 md:h-[400px] w-full flex-col items-center justify-center border-y border-primary bg-background`}
    >
      <Image
        className="h-full w-full p-0 md:w-1/3 md:p-10"
        src={gallery.image}
        alt="Gallery Image"
        width={300}
        height={300}
      />
      <DoubleDivider className="mr-10" axis="vertical" />
      <div className="flex px-6 md:px-0 flex-col justify-center py-10 text-center">
        <h2 className="text-3xl pb-5">{gallery.name}</h2>
        <p className="p-0 md:p-10 text-lg ">{gallery.description}</p>
      </div>
    </div>
  );
}
