"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { AnimatedCursor } from "@/components/animated-cursor";
import { Software } from "@/app/software/software-data";
import { useAnimatedCursor } from "@/hooks/use-animated-cursor";

type SoftwareListProps = {
  software: Array<Software>;
};

export default function SoftwareList({ software }: SoftwareListProps) {
  const { position, updatePosition, resetPosition } =
    useAnimatedCursor("horizontal");

  return (
    <>
      <h2 className="mb-2 mt-14 text-xl font-bold">Featured projects</h2>
      <ul
        onMouseLeave={resetPosition}
        className="relative mt-3 flex flex-wrap gap-4"
      >
        {software.map((software) => (
          <SoftwareListItem key={software.id} updatePosition={updatePosition}>
            <Link href="#">
              <div className="flex h-full flex-col p-5">
                <div className="flex-grow">
                  {software.icon}
                  <div>
                    <h3 className="mb-1 mt-3 font-bold">{software.title}</h3>
                    <p className="text-foreground/90">{software.description}</p>
                  </div>
                </div>
                {software.type === "R package" && software.version ? (
                  <p className="mt-3 text-sm font-semibold text-muted-foreground">
                    v{software.version}
                  </p>
                ) : null}
              </div>
            </Link>
          </SoftwareListItem>
        ))}

        <AnimatedCursor
          position={position}
          orientation="horizontal"
          className="data-[orientation='horizontal']:h-[232px]"
        />
      </ul>
    </>
  );
}

type SoftwareListItemProps = {
  children: React.ReactNode;
  updatePosition: (element: HTMLElement) => void;
};

function SoftwareListItem({ children, updatePosition }: SoftwareListItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => ref.current && updatePosition(ref.current)}
      className="z-10 w-44"
    >
      {children}
    </li>
  );
}
