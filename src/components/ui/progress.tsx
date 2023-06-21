import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/utils/cn";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-[#2F2D2D]",
      className
    )}
    {...props}
    style={{
      // Fix overflow clipping in Safari
      // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
      transform: "translateZ(0)",
    }}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[#FFC529] transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
