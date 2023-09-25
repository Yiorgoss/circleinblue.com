import Image from "next/image";

const SVGCircle = ({ text }: { text: string }) => {
  return (
    <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 75 75
          m 60  0
          a 60 60 0 1 0 -120 0
          a 60 60 0 1 0  120 0
          "
        stroke="black"
        id="myTextPath"
        fill="green"
        stroke-width="2"
        fill-opacity="0.5"
      />
      <text textLength="200%" stroke="text-red-400" strokeWidth="0">
        <textPath xlinkHref="#myTextPath">
          <tspan dy="10%">{text}</tspan>
        </textPath>
      </text>
    </svg>
  );
};

export function CircularText({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative -my-6 flex h-[100px] w-[200px] items-center justify-center ">
      <div className="flex h-full items-center justify-start">{children}</div>
      <Image
        className="absolute bottom-0 right-0 top-0 hidden group-hover:block"
        src="/circleinblue-button.svg"
        alt="circle in blue logo"
        width="100"
        height="100"
      />
    </div>
  );
}

/*
      <svg width="100" height="100">
          <path
              d="M 0 0
          A 50 50 0 0 1 0 0
          Z
          "
              stroke="red"
              fill="blue"
          />
      </svg>
   <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
   <circle id="myTextPath" cx="50" cy="50" r="50" />
   </svg>

   <text fill="text-primary" stroke-width="0">
   <textPath xlinkHref="#myTextPath">
   <tspan dy="5">{text}</tspan>
   </textPath>
   </text>
 */
