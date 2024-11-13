"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
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
        className="relative flex gap-8 uppercase tracking-widest"
      >
        {navData.map((nav) => (
          <NavItem key={nav.name} setPosition={setPosition}>
            <Link
              href={nav.href}
              data-active={pathname === nav.href}
              className="relative after:absolute after:-bottom-[6px] after:left-[20%] after:h-[2px] after:w-[60%] after:bg-foreground after:opacity-0 after:transition-opacity after:content-[''] after:focus-visible:hidden data-[active='true']:after:opacity-100"
            >
              {nav.name}
            </Link>
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
      className="relative z-10 block px-3 text-sm font-medium"
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
      className="absolute z-0 h-8 rounded bg-accent"
    />
  );
}
