
import { cn } from "@/lib/utils";

export const DotPatternBackground = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#FFA500_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30",
        className
      )}
    />
  );
};
