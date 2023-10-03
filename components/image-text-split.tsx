import Image from "next/image";
import Link from "next/link";
import { Button } from "@components/ui/button";
import DoubleDivider from "@components/ui/double-divider";
import { Separator } from "@components/ui/separator";

import { sitemap } from "@config/site";

export default function ImageTextSplit() {
  return (
    <div className="mt-10 h-full w-full flex-col justify-center border-y-[1px] border-primary md:flex ">
      <div className="relative m-0 h-full w-full overflow-hidden p-0 md:ml-10 md:w-3/4 md:pr-6">
        <Image
          className="w-screen object-cover"
          width={600}
          height={300}
          src="/images/landing-1.jpg"
          alt="none"
        />
      </div>
      <div className="1/4 flex bg-secondary-secondary">
        <DoubleDivider axis="vertical" />
        <div className="flex flex-col justify-center p-5">
          <div className="py-10 text-center text-2xl font-normal ">
            Lorem ipsum dolor sit amet, consectetur magna aliqua. Ut enim ad
            minim veniam.
          </div>
          <div className="flex flex-wrap gap-8 ">
            <Separator className="bg-primary" />
            <Link className="mx-auto" href={sitemap.aboutUs}>
              <Button variant="outline" size="lg">
                Read About Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
