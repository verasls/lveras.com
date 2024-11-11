import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import logo from "@/public/logo.png";

export default function Header() {
  return (
    <header className="top-0 flex h-14 w-full items-center justify-between px-4">
      <Image src={logo} alt="Lucas Veras' logo" width={36} />

      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/about">Papers</Link>
          </li>
          <li>
            <Link href="/about">Software</Link>
          </li>
        </ul>
      </nav>

      <ThemeToggle />
    </header>
  );
}
