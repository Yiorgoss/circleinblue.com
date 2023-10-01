import { Button } from "@components/ui/button";

export function EmailSignup() {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary py-10 font-medium">
      <h3 className="w-fit border-b border-primary px-3 py-2 text-lg font-medium">
        Join Our Community
      </h3>
      <div className="items-between flex w-full max-w-[50%] justify-between space-x-2 border-b border-primary pb-2 pt-10">
        <input
          type="email"
          placeholder="email"
          className="w-full bg-inherit focus:border-0 focus:outline-0 focus:placeholder:text-transparent"
        />
        <Button type="submit" variant="ghost">
          SUBSCRIBE
        </Button>
      </div>
    </div>
  );
}
