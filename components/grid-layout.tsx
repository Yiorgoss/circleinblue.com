import Link from "next/link";
import Image from "next/image";
import DoubleDivider from "@components/ui/double-divider";

import { Artist } from "types";

const GridItem = ({ item }: { item: Artist }) => {
  return (
    <div className="mx-auto h-full max-w-[300px] overflow-hidden ">
      <Link href={`/artists/${item.url}`}>
        <Image
          className="w-full border border-primary object-cover h-[300px] 
"
          src={item.imageUrl}
          alt={`${item.firstName} ${item.lastName} photo`}
          height={300}
          width={300}
        />
        <div className="flex flex-col ">
          <div className="mx-auto -mb-1 mt-2">
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
    <div className="flex flex-col flex-wrap justify-around py-14 md:flex-row">
      {data.map((item, i) => (
        <div className="my-6 w-full md:my-14 md:w-1/3 h-full " key={i}>
          <GridItem item={item} />
        </div>
      ))}
    </div>
  );
}
