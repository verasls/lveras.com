"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { AnimatedCursor } from "@/components/animated-cursor";
import { useAnimatedCursor } from "@/hooks/use-animated-cursor";

type MainNavProps = {
  navData: Array<{
    name: string;
    href: string;
  }>;
};

export default function MainNav({ navData }: MainNavProps) {
  const pathname = usePathname();
  const { position, updatePosition, resetPosition } =
    useAnimatedCursor("horizontal");

  return (
    <nav>
      <ul
        onMouseLeave={resetPosition}
        className="relative flex gap-8 uppercase tracking-widest"
      >
        {navData.map((nav) => (
          <NavItem key={nav.name} updatePosition={updatePosition}>
            <Link
              href={nav.href}
              data-active={pathname === nav.href}
              className="relative after:absolute after:-bottom-1 after:left-[20%] after:h-[2px] after:w-[60%] after:bg-foreground after:opacity-0 after:transition-opacity after:content-[''] after:focus-visible:hidden data-[active='true']:after:opacity-100"
            >
              {nav.name}
            </Link>
          </NavItem>
        ))}

        <AnimatedCursor
          position={position}
          orientation="horizontal"
          className="data-[orientation='horizontal']:h-8"
        />
      </ul>
    </nav>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  updatePosition: (element: HTMLElement) => void;
};

function NavItem({ children, updatePosition }: NavItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => ref.current && updatePosition(ref.current)}
      className="relative z-10 block px-3 text-sm font-medium"
    >
      {children}
    </li>
  );
}
