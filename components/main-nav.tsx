"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

type MainNavProps = {
  navData: Array<{
    name: string;
    href: string;
  }>;
};

export default function MainNav({ navData }: MainNavProps) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav>
      <ul
        onMouseLeave={() => {
          setPosition((previousPosition) => ({
            ...previousPosition,
            opacity: 0,
          }));
        }}
        className="relative flex gap-8"
      >
        {navData.map((nav) => (
          <NavItem key={nav.name} setPosition={setPosition}>
            <Link href={nav.href}>{nav.name}</Link>
          </NavItem>
        ))}

        <Cursor position={position} />
      </ul>
    </nav>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

function NavItem({ children, setPosition }: NavItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width: width,
          opacity: 1,
        });
      }}
      className="relative z-10 block px-3 text-sm font-medium text-white mix-blend-difference"
    >
      {children}
    </li>
  );
}

type CursorProps = {
  position: Position;
};

function Cursor({ position }: CursorProps) {
  return (
    <motion.li
      animate={{ ...position, top: "50%", transform: "translateY(-50%)" }}
      className="absolute z-0 h-8 rounded bg-black"
    />
  );
}
