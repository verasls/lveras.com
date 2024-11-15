import { Box, Footprints } from "lucide-react";
import React from "react";

export type Software = {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  type: "R package" | undefined;
  version?: string;
};

export const software: Array<Software> = [
  {
    id: 1,
    icon: <Box />,
    title: "lvmisc",
    description: "R package for data analysis and visualization",
    type: "R package",
  },
  {
    id: 2,
    icon: <Footprints />,
    title: "impactr",
    description:
      "R package for accelerometry-based mechanical loading prediction",
    type: "R package",
  },
];
