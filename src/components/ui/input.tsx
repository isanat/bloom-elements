import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  isError?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  helperText?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isError, isSuccess, isLoading, helperText, disabled, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          type={type}
          disabled={disabled || isLoading}
          className={cn(
            "flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-colors",
            isError && "border-red-500 focus-visible:ring-red-500/50",
            isSuccess && "border-green-500 focus-visible:ring-green-500/50",
            isLoading && "border-yellow-500 opacity-75",
            !isError && !isSuccess && !isLoading && "border-input focus-visible:ring-ring",
            className,
          )}
          ref={ref}
          aria-invalid={isError}
          aria-describedby={helperText ? `helper-${props.id}` : undefined}
          {...props}
        />
        {helperText && (
          <p
            id={`helper-${props.id}`}
            className={cn(
              "mt-1.5 text-xs font-medium",
              isError && "text-red-500",
              isSuccess && "text-green-500",
              isLoading && "text-yellow-600",
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
