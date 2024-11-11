import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import ThemeToggle from "@/components/theme-toggle";
import logo from "@/public/logo.png";

const navData = [
  { name: "About", href: "/about" },
  { name: "Papers", href: "/papers" },
  { name: "Software", href: "/software" },
];

export default function Header() {
  return (
    <header className="top-0 flex h-14 w-full items-center justify-between px-4">
      <Link href="/">
        <Image src={logo} alt="Lucas Veras' logo" width={36} />
      </Link>
      <MainNav navData={navData} />
      <ThemeToggle />
    </header>
  );
}
