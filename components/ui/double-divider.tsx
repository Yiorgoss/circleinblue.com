import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@lib/utils";

const axisVariants = cva("border-primary", {
  variants: {
    axis: {
      vertical: "h-full w-[20px] border-x",
      horizontal: "h-[20px] w-full border-y-[1px] ",
    },
    defaultVariants: {
      axis: "vertical",
    },
  },
});

interface DoubleDividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof axisVariants> {}

export default function DoubleDivider({ axis, className }: DoubleDividerProps) {
  return <div className={cn(axisVariants({ axis, className }))}></div>;
}
