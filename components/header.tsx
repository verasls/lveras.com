import Image from "next/image";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.png";

const navData = [
  { name: "About", href: "/about" },
  { name: "Papers", href: "/papers" },
  { name: "Software", href: "/software" },
];

export default function Header() {
  return (
    <>
      <header className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-background/90 px-3 pb-8 pt-2">
        <Button asChild variant="ghost" size="icon">
          <Link href="/" className="select-none">
            <Image src={logo} alt="Lucas Veras' logo" width={24} />
          </Link>
        </Button>
        <MainNav navData={navData} />
        <ThemeToggle />
      </header>
      <div className="h-20" />
    </>
  );
}
