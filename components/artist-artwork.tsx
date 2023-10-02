"use client";

import Image from "next/image";
import * as React from "react";

import { Card, CardContent, CardHeader } from "./ui/card";

import DoubleDivider from "@components/ui/double-divider";

export default function ArtistArtwork({
  artwork,
}: {
  artwork: {
    name: string;
    description: string;
    image_url: string;
    price: number;
  }[];
}) {
  return (
    <div className=" mx-auto border-t border-primary bg-secondary-secondary py-10">
      <Card className=" rounded-none border-0 bg-inherit shadow-none outline-0 ">
        <CardHeader className="py-10 text-center text-4xl">
          Available Artwork
        </CardHeader>
        <CardContent className="flex w-full justify-between gap-8 overflow-x-auto md:justify-center  md:gap-16">
          {artwork.map((item, i) => (
            <CardContent className="h-full overflow-hidden p-0" key={i}>
              <Image
                className="object-cover"
                src={item.image_url}
                alt={`${item.name}`}
                height={500}
                width={300}
              />
              <div className="">
                <div className="pt-12">{item.name}</div>
                <DoubleDivider axis="horizontal" />
                <div className="ml-auto w-fit border-b border-primary pt-2 text-right text-base">
                  ${item.price}
                </div>
              </div>
            </CardContent>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
