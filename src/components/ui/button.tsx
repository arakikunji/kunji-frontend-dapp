import * as React from "react";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex hover:scale-105 active:scale-95 transition-all items-center justify-center rounded-xl text-sm font-light focus:outline-none focus:ring-2 focus:ring-[#2054A5]/40 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-[#2054A5]/10 disabled:opacity-50 dark:focus:ring-[#2054A5]/40 disabled:pointer-events-none dark:focus:ring-offset-[#2054A5] data-[state=open]:bg-[#2054A5]/10 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-[#2054A5] text-white hover:bg-[#2054A5]/70 dark:bg-slate-50 dark:text-[#2054A5]",
        outline:
          "bg-transparent border border-slate-200 hover:bg-[#2054A5]/10 dark:border-[#2054A5]/70 dark:text-[#2054A5]/10",
        subtle:
          "bg-[#2054A5]/10 text-[#2054A5] hover:bg-slate-200 dark:bg-[#2054A5]/70 dark:text-[#2054A5]/10",
        ghost:
          "bg-transparent hover:bg-[#2054A5]/10 dark:hover:bg-slate-800 dark:text-[#2054A5]/10 dark:hover:text-[#2054A5]/10 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-[#2054A5] dark:text-[#2054A5]/10 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-5",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
