import Image from "next/image";

import { Button } from "@components/ui/button";
import { Separator } from "@components/ui/separator";

export default function WhoWeAre() {
  return (
    <div className="w-full text-lg">
      <div className="relative">
        <div className="grid h-screen grid-cols-10">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <div className=" border-r-[1px] border-primary opacity-10 last:border-0"></div>
            ))}
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="ml-[-300px] text-6xl font-semibold">Who We Are</h1>
          <p className="w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu
          </p>
        </div>
      </div>
      <div className="border-y border-primary bg-secondary-secondary py-20 text-center">
        <h2 className="text-5xl font-medium">Our Mission</h2>
        <p className="mx-auto mt-10 w-3/4 xl:w-[800px]">
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu
        </p>
      </div>

      <div className="container flex items-center justify-center ">
        <p className="w-1/4 text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu
        </p>
        <div className="relative my-20 h-full pl-[100px]">
          <Image
            className=""
            src="https://placebear.com/400/400"
            alt="picture"
            height={300}
            width={300}
          />
          <h2 className="absolute top-0 ml-[-100px] text-5xl font-medium">
            Our Founder
          </h2>
        </div>
      </div>
      <div className="border-y border-primary bg-secondary-secondary py-20 text-center">
        <h3 className="text-5xl font-medium">Our Collaborations</h3>
        <p className="container mb-6 mt-10 w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum
        </p>
        <Button variant="outline">View Our Partners</Button>
      </div>
      <div className="container mx-auto flex items-center justify-center py-10">
        <Image
          src="https://placebear.com/300/500"
          alt="artist portrait"
          height={500}
          width={300}
        />
        <div className="ml-10 flex w-[400px] flex-col items-center justify-around">
          <h3 className="text-5xl font-medium">The Artists</h3>
          <p className="mb-6 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Button variant="outline" size="lg">
            Meet The Artists
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center border-y border-primary bg-secondary-secondary py-20">
        <h3 className="text-5xl font-medium">Join Our Community</h3>
        <p className="mb-6 mt-10">
          Interested in being a featured Artist on our page?
        </p>
        <Button variant="outline" size="lg">
          Get In Touch
        </Button>
      </div>
    </div>
  );
}

/*

<div className="relative h-screen bg-red-300">
        </div>
</div>
*/
