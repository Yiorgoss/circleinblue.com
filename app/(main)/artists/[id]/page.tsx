import Image from "next/image";
import artists from "@data/mock-artist";
import ArtistArtwork from "@components/artist-artwork";

export default function ArtistPage() {
  const artist = artists[0];

  return (
    <div className="">
      <div className="text-balance relative">
        <h1 className="text-[min(15vw, 10px)] w-full bg-transparent pl-0 py-4 md:py-0 md:pl-10 text-center md:text-left text-[15vw] leading-none">
          {`${artist.firstName}`}
          <br /> {`${artist.lastName}`}
        </h1>
          <Image
            className="relative md:absolute bottom-[-40%] right-0 lg:right-[10vw] "
            src={artist.image_url}
            alt={`${artist.firstName} ${artist.lastName} portrait`}
            height={400}
            width={400}
          />
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-10 ">
        <p className="mx-auto max-w-[400px] text-xl">{artist.description_1}</p>
        <p className="col-start-1 py-5 md:col-start-2 row-start-2 mx-auto max-w-[400px] text-xl">
          {artist.description_2}
        </p>
      </div>
      <div className="">
        <ArtistArtwork artwork={artist.artwork} />
      </div>
      <p className="mx-auto border-t border-primary py-24 text-center text-2xl tracking-wider">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat
      </p>
    </div>
  );
}
