import GridLayout from "@components/grid-layout";
import data from "@data/mock-artist";

export default function () {
  return (
    <div className="mt-20">
      <div className="font-xl border-y border-primary bg-secondary-secondary pb-14 pt-10 text-xl">
        <p className="mx-auto w-fit border-b border-primary px-4 py-3">
          Meet the Artists
        </p>
      </div>
      <div className="">
        <GridLayout data={...data} />
      </div>
    </div>
  );
}
