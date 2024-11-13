import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Position } from "@/hooks/use-animated-cursor";

type AnimatedCursorProps = {
  position: Position;
  orientation: "horizontal" | "vertical";
  className?: string;
};

export function AnimatedCursor({
  position,
  orientation,
  className,
}: AnimatedCursorProps) {
  return (
    <motion.li
      animate={{
        ...position,
        transform:
          orientation === "horizontal" ? "translateY(-50%)" : "translateX(0)",
      }}
      data-orientation={orientation}
      className={cn(
        "absolute z-0 rounded-md bg-accent data-[orientation='horizontal']:top-1/2 data-[orientation='vertical']:left-0 data-[orientation='vertical']:w-full",
        className
      )}
    />
  );
}
