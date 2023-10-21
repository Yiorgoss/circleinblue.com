import Link from "next/link";
import Image from "next/image";

import { Icons } from "@components/icons";
import { Gallery } from "types";

export default function GridItem({ gallery }: { gallery: Gallery }) {
  return (
    <div className="flex flex-col border border-primary justify-between">
      <Image
        className="object-cover w-full h-[300px] border-b border-primary "
        src={gallery.image}
        alt={gallery.name + " alt text"}
        height={300}
        width={300}
      />
      <div className=" px-6 flex flex-col">
        <h2 className="text-2xl pt-8 pb-3">{gallery.name} </h2>
        <p className="text-lg">{gallery.description}</p>
        {gallery.externalUrl && (
          <Link className="flex text-blue-600 hover:underline py-4 " href={gallery.externalUrl}>
            <h3 className="text-base">{gallery.name} website</h3>
            <Icons.externalLink className="h-[14px] w-[14px]" />
          </Link>
        )}
      </div>
    </div>
  );
}
