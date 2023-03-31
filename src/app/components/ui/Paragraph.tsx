import { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const paragraphVariants = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 text-center mb-2",
  {
    variants: {
      size: {
        default: "text-base sm:text-lg",
        small: "text-sm sm:text-base",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  function Paragraph({ className, size, children, ...props }, ref) {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ className, size }))}
      >
        {children}
      </p>
    );
  }
);

export default Paragraph;
