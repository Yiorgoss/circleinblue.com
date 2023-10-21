import Link from "next/link";
import Image from "next/image";

import { Button } from "@components/ui/button";

import { sitemap } from "@config/site";

export default function WhoWeAre() {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-0 -z-10 grid grid-cols-5 md:grid-cols-10">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div
                className=" border-r-[1px] border-primary opacity-10 last:border-0"
                key={i}
              ></div>
            ))}
        </div>
        <div className="inset-0 flex h-screen flex-col items-start justify-center py-10 md:h-[calc(100vh-150px)] md:items-center">
          <h1 className="ml-0 mt-10 text-6xl font-semibold md:ml-[-300px] md:pt-0">
            Who We Are
          </h1>
          <p className="w-full pl-10 md:w-[500px]">
            We are a premier online art gallery showcasing talented artists
            hailing from the vibrant Mediterranean and Middle Eastern region.
            Through strategic partnerships with esteemed physical art galleries,
            we have perfected a collaborative model to showcase the exquisite
            creations of our portfolio artists to a large audience of
            collectors.
          </p>
        </div>
      </div>
      <div className="h-16 border-t border-primary"></div>
      <div className="border-y border-primary bg-secondary-secondary py-20 px-2 text-left ">
        <h2 className="text-5xl font-medium">Our Mission</h2>
        <p className="mx-auto mt-10 w-3/4 xl:w-[800px]">
          CircleInBlue’s mission is to discover and partner with a diverse
          spectrum of artists, ensuring that their remarkable artworks receive
          the recognition they deserve, captivating art collectors from all
          walks of life, and ultimately becoming prized additions to their
          collections. tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
      </div>

      <div className="py-6 md:py-10 ">
        <h2 className="pb-10 pt-6 text-center text-5xl font-medium md:pt-0 ">
          Our Founder
        </h2>
        <div className="flex flex-col items-center justify-center gap-x-20 md:flex-row">
          <div className="my-6 h-full ">
            <Image
              className=""
              src="/images/founder.jpeg"
              alt="picture"
              height={700}
              width={400}
            />
          </div>
          <p className="w-full text-center px-2 md:w-1/4">
            Randa, the Founder of CircleInBlue, boasts a rich background as an
            Art consultant, previously splitting her time between Paris and
            London while collaborating with prestigious auction houses and
            galleries. Her primary mission has always been to unearth emerging
            artists and propel them onto the global stage. Commencing her
            career in the realm of Modern Art and Middle Eastern Art, Randa
            has gained significant recognition for her role in promoting
            Lebanese artists within the Greek gallery scene and elevating
            Greek artists to international prominence.
            <br />
            Speaking five languages — English, Greek, Arabic, French, and
            Italian — Randa provides invaluable counsel to high net worth
            individuals and foundations seeking to make informed investments
            in Modern Art, Middle Eastern Art, and Islamic Art.
          </p>
        </div>
      </div>
      <div className="border-y border-primary bg-secondary-secondary py-20 text-center">
        <h3 className="text-5xl font-medium">Our Partnerships</h3>
        <p className="container mb-6 mt-10 w-full md:w-[800px]">
          We collaborate with brands, galleries, communities, and cultural
          heritage foundations that are dedicated to leaving a lasting mark on
          the art world, enriching it, and expanding opportunities for emerging
          artists. Our partners come from diverse global and regional
          backgrounds, all sharing a deep commitment to the values of art and
          creativity.
        </p>
        <Link href={sitemap.galleries}>
          <Button variant="outline" className="mt-8">
            View Our Partners
          </Button>
        </Link>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center py-10 md:flex-row">
        <Image
          className="object-cover"
          src="/images/artist.webp"
          alt="artist portrait"
          height={600}
          width={400}
        />
        <div className="ml-0 flex w-full flex-col items-center justify-around md:ml-10 md:w-[400px]">
          <h3 className="py-10 text-5xl font-medium md:py-0">The Artists</h3>
          <p className="mb-6 mt-0 md:mt-10">
            Our artists form a vibrant community, representing various cultural
            backgrounds, drawing inspiration from the constantly evolving global
            landscape. Their artworks serve as a profound expression of their
            enduring value and creativity.
          </p>
          <Link href={sitemap.artists}>
            <Button variant="outline" size="lg">
              Meet The Artists
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-y border-primary bg-secondary-secondary py-20 text-left px-2">
        <h3 className="text-5xl font-medium">Join Our Community</h3>
        <p className="text-balance mb-6 mt-10 md:mb-6">
          Keen on being represented?
        </p>
        <Link href={sitemap.contactUs}>
          <Button variant="outline" size="lg">
            Get In Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}
