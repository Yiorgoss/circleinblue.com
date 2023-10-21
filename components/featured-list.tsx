"use client";

import Link from "next/link";
import Image from "next/image";
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
    <div className="mx-0 mr-auto md:container md:mx-auto ">
      <Card className=" rounded-none border-0 bg-inherit px-0 shadow-none outline-0 ">
        <CardContent className="flex w-full justify-between gap-8 overflow-x-auto md:justify-center  md:gap-16">
          {data.slice(0, 3).map((item, i) => (
            <Link href={`${sitemap.artists}/${item.url}`} key={i}>
              <CardContent className="overflow-y-hidden h-full w-1/2 min-w-[300px] overflow-x-auto p-0 md:overflow-hidden">
                <Image
                  className="h-[300px] object-cover border-primary border"
                  src={item.imageUrl}
                  alt={`${item.firstName} ${item.lastName} profile image`}
                  height={300}
                  width={300}
                />
                <div className="pt-2 text-center">
                  {item.firstName} {item.lastName}
                </div>
              </CardContent>
            </Link>
          ))}
        </CardContent>
        <CardHeader className="mx-auto w-full md:w-1/2">
          <Separator className="mb-6" />
          <Link className="w-fit mx-auto" href={sitemap.artists}>
            <Button variant="outline" size="xl2" className="mx-auto">
              Meet Our Artists
            </Button>
          </Link>
        </CardHeader>
      </Card>
    </div>
  );
}
