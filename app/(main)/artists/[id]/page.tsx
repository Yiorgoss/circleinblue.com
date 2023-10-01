import Image from "next/image";
import artists from "@data/mock-artist";
import ArtistArtwork from "@components/artist-artwork"

export default function ArtistPage() {
  const artist = artists[0];

  return (
    <div className="">
      <div className="relative text-balance">
        <h1 className="w-full text-left pl-10 text-[15vw] text-[min(15vw, 10px)] bg-transparent leading-none">{`${artist.firstName}`}<br/> {`${artist.lastName}`}</h1>
        <Image
          className="absolute bottom-[-40%] right-0 lg:right-[10vw] "
          src={artist.image_url}
          alt={`${artist.firstName} ${artist.lastName} portrait`}
          height={400}
          width={400}
        />
      </div>
      <div className="container mx-auto py-10 grid grid-cols-2 ">
        <p className="mx-auto max-w-[400px] text-xl">{artist.description_1}</p>
        <p className="col-start-2 row-start-2 mx-auto max-w-[400px] text-xl">
          {artist.description_2}
        </p>
      </div>
      <div className="">
        <ArtistArtwork artwork={artist.artwork}/>
      </div>
      <p className="text-2xl tracking-wider border-t text-center border-primary py-24 mx-auto">"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat"</p>
    </div>
  );
}
