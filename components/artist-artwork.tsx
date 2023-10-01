"use client";

import Link from "next/link";
import Image from 'next/image'
import * as React from "react";

import { Card, CardContent, CardHeader } from "./ui/card";

import { Separator } from "@components/ui/separator";
import { Button } from "@components/ui/button";
import DoubleDivider from "@components/ui/double-divider"
import { Artist } from "types";

import { sitemap } from "@config/site";


export default function ArtistArtwork({
  artwork
}: {
  artwork:{name:string;description:price; price:number}[]
}) {
  return (
    <div className="mx-auto py-10 border-t border-primary bg-secondary-secondary">
      <Card className=" rounded-none border-0 bg-inherit shadow-none outline-0 ">
        <CardHeader className="text-center py-10 text-4xl">
          Available Artwork
        </CardHeader>
        <CardContent className="flex w-full justify-between gap-8 overflow-x-auto md:justify-center  md:gap-16">
          {artwork.map((item, i) => (
            <Link href={`${sitemap.artists}/${item.url}`} key={i}>
              <CardContent className="h-full overflow-hidden p-0">
                <Image
                  className="object-cover"
                  src={item.image_url}
                  alt={`${item.name}`}
                  height={500}
                  width={300}
                />
              <div className="">
              <div className="pt-12">
                {item.name}
                </div>
                <DoubleDivider axis="horizontal"/>
                <div className="border-b ml-auto border-primary text-right w-fit pt-2 text-base">${item.price}</div>
              </div>
              </CardContent>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
