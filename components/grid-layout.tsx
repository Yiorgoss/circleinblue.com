import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardFooter } from "@components/ui/card";
import DoubleDivider from "@components/ui/double-divider";

import { Artist } from "types";

const GridItem = ({ item }: { item: Artist }) => {
  return (
    <div className="mx-auto max-w-[300px]">
      <Link href={`/artists/${item.url}`}>
        <Image
          className="w-full object-cover"
          src={item.image_url}
          alt={`${item.firstName} ${item.lastName} photo`}
          height={300}
          width={300}
        />
        <div className="flex flex-col">
          <div className="mx-auto my-2">
            {item.firstName} {item.lastName}
          </div>
          <DoubleDivider className="mx-auto w-3/4" axis="horizontal" />
        </div>
      </Link>
    </div>
  );
};
export default function GridLayout({ data }: { data: Artist[] }) {
  return (
    <div className="flex flex-wrap justify-around py-14">
      {data.map((item, i) => (
        <div className="my-14 w-1/3 ">
          <GridItem item={item} />
        </div>
      ))}
    </div>
  );
}
