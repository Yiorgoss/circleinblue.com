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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu
          </p>
        </div>
      </div>
      <div className="h-16 border-t border-primary"></div>
      <div className="border-y border-primary bg-secondary-secondary py-20 text-center">
        <h2 className="text-5xl font-medium">Our Mission</h2>
        <p className="mx-auto mt-10 w-3/4 xl:w-[800px]">
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu
        </p>
      </div>

      <div className="py-6 md:py-10 ">
          <h2 className="pt-6 pb-10 text-center text-5xl font-medium md:pt-0 ">
            Our 
            Founder
          </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-x-20">
        <div className="my-6 h-full ">
          <Image
            className=""
            src="https://placebear.com/400/400"
            alt="picture"
            height={300}
            width={300}
          />
        </div>
        <p className="w-full text-center md:w-1/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
        </div>
      </div>
      <div className="border-y border-primary bg-secondary-secondary py-20 text-center">
        <h3 className="text-5xl font-medium">Our Collaborations</h3>
        <p className="container mb-6 mt-10 w-full md:w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </p>
        <Link href={sitemap.galleries}>
          <Button variant="outline" className="mt-8">
            View Our Partners
          </Button>
        </Link>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center py-10 md:flex-row">
        <Image
          src="https://placebear.com/300/500"
          alt="artist portrait"
          height={500}
          width={300}
        />
        <div className="ml-0 flex w-full flex-col items-center justify-around md:ml-10 md:w-[400px]">
          <h3 className="py-10 text-5xl font-medium md:py-0">The Artists</h3>
          <p className="mb-6 mt-0 md:mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href={sitemap.artists}>
            <Button variant="outline" size="lg">
              Meet The Artists
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-y border-primary bg-secondary-secondary py-20 text-center">
        <h3 className="text-5xl font-medium">Join Our Community</h3>
        <p className="text-balance mb-6 mt-10 md:mb-6">
          Interested in being a featured <br /> Artist on our page?
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
