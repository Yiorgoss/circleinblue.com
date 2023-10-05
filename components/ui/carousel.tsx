"use client";

import Image from "next/image";
import * as React from "react";

import { Icons } from "@components/icons";

const Carousel = ({ data }: { data: string[] }) => {
  const [curr, setCurr] = React.useState(0);

  const cycleImages = (direction: "left" | "right") => {
    if (direction == "right") {
      if (curr == 0) {
        setCurr(data.length - 1);
      } else {
        setCurr(curr - 1);
      }
    } else {
      setCurr((curr + 1) % data.length);
    }
    console.log(curr);
  };

  return (
    <div className="relative">
      <Icons.chevronLeft
        className="absolute inset-y-0 left-0 z-20 my-auto h-16 w-16 cursor-pointer"
        onClick={() => cycleImages("left")}
      />
      <div className="relative h-[500px] w-full overflow-hidden">
        {data.map((src, i) => {
          return (
            <div
              className={`${
                curr === i ? "relative" : "hidden"
              } h-full w-full overflow-hidden bg-blue-300`}
              key={i}
            >
              <Image
                className="h-full w-full object-cover"
                src={src}
                alt={`carousel-image-${i}`}
                height={400}
                width={400}
              />
            </div>
          );
        })}
      </div>

      <Icons.chevronRight
        className="absolute inset-y-0 right-0 z-20 my-auto h-16 w-16 cursor-pointer "
        onClick={() => cycleImages("right")}
      />
    </div>
  );
};

export { Carousel };
