"use client"

import Link from "next/link"
import Image from "next/image";
import { useParams } from "next/navigation"

import { Icons } from "@components/icons"

import { artists } from "@data/artists"

export default function ArtistPage() {

  const { name } = useParams()

  const artist = artists.filter((artist) => artist.url == name)[0]

  return (
    <div className="">
      <div className="text-balance relative py-10 ">
        <h1 className="w-full mx-auto bg-transparent pl-0 py-4 md:py-0 md:pl-10 text-center text-[7vw] leading-none">
          {`${artist.firstName}`} {`${artist.lastName}`}
        </h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-10 ">
        <p className="mx-auto max-w-[400px] self-center text-xl">{artist.description}</p>
        <Image
          className=""
          src={artist.imageUrl}
          alt={`${artist.firstName} ${artist.lastName} portrait`}
          height={400}
          width={400}
        />
      </div>
      <Link href={artist.externalUrl.url}>
        <div className={`${artist.externalUrl ? 'block' : 'hidden'} flex w-fit mx-auto py-14 text-2xl`}>
          <p className="hover:underline flex hover:text-blue-600">
            {artist.externalUrl.name}
            <Icons.externalLink />
          </p>
        </div>
      </Link>
      {/*
      <p className="mx-auto border-t border-primary py-24 text-center text-2xl tracking-wider">
        &ldquo;
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat
        &rdquo;
      </p>
      */}
    </div>
  );
}
