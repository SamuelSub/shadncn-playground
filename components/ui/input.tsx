import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const EfoodInput = React.forwardRef<
  HTMLInputElement,
  InputProps & { label: string }
>(({ className, type, label, ...props }, ref) => {
  const labelRef = React.useRef<HTMLLabelElement | null>(null);

  const handleFocus = () => {
    if (!labelRef.current) return;
    labelRef.current.style.transform = "translateY(-2px)";
    labelRef.current.style.scale = "0.8";
    labelRef.current.style.color = "#9b9b9b";
  };

  const handleFocusExit = () => {
    if (!labelRef.current) return;
    labelRef.current.style.transform = "translateY(50%)";
    labelRef.current.style.scale = "1";
    labelRef.current.style.color = "hsl(var(--secondary))";
  };

  return (
    <div className="bg-muted-foreground p-[0.5rem] px-[1rem] leading-4 min-w-[400px]">
      <label
        ref={labelRef}
        htmlFor={label}
        className="block origin-top-left font-bold text-secondary translate-y-[50%] transition-all duration-300"
      >
        {label}
      </label>
      <input
        id={label}
        type={type}
        className={cn(
          "flex font-bold w-full rounded-md border-input bg-muted-foreground text-[1rem] file:border-0 file:bg-transparent placeholder:text-gray focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        onFocus={handleFocus}
        onBlur={handleFocusExit}
        ref={ref}
        {...props}
      />
    </div>
  );
});
EfoodInput.displayName = "Efood Input";

export { Input, EfoodInput };
