
import GridLayout from "@components/grid-layout";
import { artists } from "@data/artists";

export default function Artists() {
  return (
    <div className="mt-20">
      <div className="font-xl border-y border-primary bg-secondary-secondary py-5 md:pb-14 md:pt-10 text-xl">
        <p className="mx-auto w-fit border-b border-primary px-4 py-3">
          Meet the Artists
        </p>
      </div>
      <div className="">
        <GridLayout data={...artists} />
      </div>
    </div>
  );
}
