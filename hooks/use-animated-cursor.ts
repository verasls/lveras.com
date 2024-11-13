import { useState } from "react";

export type Position = {
  left?: number;
  top?: number;
  width?: number;
  height?: number;
  opacity: number;
};

type Orientation = "horizontal" | "vertical";

export function useAnimatedCursor(orientation: Orientation = "horizontal") {
  const [position, setPosition] = useState<Position>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  function updatePosition(element: HTMLElement) {
    if (!element) return;

    const { width, height } = element.getBoundingClientRect();

    setPosition({
      left: orientation === "horizontal" ? element.offsetLeft : undefined,
      top: orientation === "vertical" ? element.offsetTop : undefined,
      width: orientation === "horizontal" ? width : undefined,
      height: orientation === "vertical" ? height : undefined,
      opacity: 1,
    });
  }

  function resetPosition() {
    setPosition((prevPosition) => ({ ...prevPosition, opacity: 0 }));
  }

  return { position, updatePosition, resetPosition };
}
