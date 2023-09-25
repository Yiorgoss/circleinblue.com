import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Button } from "@components/ui/button";
import DoubleDivider from "@components/ui/double-divider";
import { Separator } from "@components/ui/separator";

import { sitemap } from "@config/site";

export default function ImageTextSplit() {
  return (
    <div className="mt-10 flex h-[500px] w-full justify-center border-y-[1px] border-primary ">
      <div className="ml-10 h-full w-3/4 overflow-hidden pr-6">
        <Image
          className="w-full object-cover"
          width={600}
          height={300}
          src="https://placebear.com/g/300/600"
          alt="none"
        />
      </div>
      <div className="1/4 flex bg-secondary-secondary">
        <DoubleDivider axis="vertical" />
        <div className="flex flex-col justify-center p-5">
          <div className="py-10 text-2xl font-thin">
            Lorem ipsum dolor sit amet, consectetur magna aliqua. Ut enim ad
            minim veniam.
          </div>
          <div className="flex flex-wrap gap-8 ">
            <Separator className="bg-primary" />
            <Link className="mx-auto" href={sitemap.aboutUs}>
              <Button
                variant="outline"
                size="lg"
                className="mx-auto border-primary bg-inherit hover:border-primary hover:bg-primary/90 hover:text-slate-50"
              >
                Read About Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
