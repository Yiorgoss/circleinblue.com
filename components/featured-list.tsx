"use client";

import Link from "next/link";
import Image from 'next/image'
import * as React from "react";

import { Card, CardContent, CardHeader } from "./ui/card";

import { Separator } from "@components/ui/separator";
import { Button } from "@components/ui/button";
import { Artist } from "types";

import { sitemap } from "@config/site";

export default function FeaturedList({
  dataPromise,
}: {
  dataPromise: Promise<Artist[]>;
}) {
  const data = React.use(dataPromise);
  if (!data?.length) return;
  return (
    <div className="md:container mx-0 mr-auto md:mx-auto ">
      <Card className=" rounded-none px-0 border-0 bg-inherit shadow-none outline-0 ">
        <CardContent className="flex w-full justify-between gap-8 overflow-x-auto md:justify-center  md:gap-16">
          {data.slice(0, 3).map((item, i) => (
            <Link href={`${sitemap.artists}/${item.url}`} key={i}>
              <CardContent className="h-full w-1/2 min-w-[300px] overflow-auto md:overflow-hidden p-0">
                <Image
                  className=""
                  src={item.image_url}
                  alt={`${item.firstName} ${item.lastName} profile image`}
                  height={300}
                  width={300}
                />
                <div className="pt-2 text-center">{item.firstName} {item.lastName}</div>
              </CardContent>
            </Link>
          ))}
        </CardContent>
        <CardHeader className="mx-auto w-full md:w-1/2">
          <Separator className="mb-6" />
          <Button variant="outline" size="xl2" className="mx-auto">
            <Link className="w-full" href={sitemap.artists}>Meet Our Artists</Link>
          </Button>
        </CardHeader>
      </Card>
    </div>
  );
}
