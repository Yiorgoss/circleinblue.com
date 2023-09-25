import Image from "next/image";
import artists from "@data/mock-artist";

export default function ArtistPage() {
  const artist = artists[0];

  return (
    <div className="">
      <div className="relative">
        <h1 className="w-full bg-transparent text-[17vw] leading-none">{`${artist.firstName} ${artist.lastName}`}</h1>
        <Image
          className="absolute bottom-0 right-1/4 -z-10"
          src={artist.image_url}
          alt={`${artist.firstName} ${artist.lastName} portrait`}
          height={400}
          width={400}
        />
      </div>
      <div className="container mx-auto mt-10 grid grid-cols-2 ">
        <p className="mx-auto max-w-[400px] text-xl">{artist.description_1}</p>
        <p className="col-start-2 row-start-2 mx-auto max-w-[400px] text-xl">
          {artist.description_2}
        </p>
      </div>
    </div>
  );
}
