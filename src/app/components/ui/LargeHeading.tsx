import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const largeHeadingVariants = cva(
  `text-black dark:text-white font-extrabold 
  text-center lg:text-left 
  leading-tight tracking-tighte`,
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text-2xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface LargeHeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof largeHeadingVariants> {}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  function LargeHeading({ className, size, ...props }, ref) {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(largeHeadingVariants({ className, size }))}
      />
    );
  }
);

export default LargeHeading;
