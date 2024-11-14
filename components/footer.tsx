import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center gap-8 px-6 pb-2 pt-8">
      <div className="group flex items-center gap-[3px] hover:font-medium">
        <Link href="/contact">email</Link>
        <Mail className="h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100" />
      </div>
      <div className="group flex items-center gap-[3px] hover:font-medium">
        <Link
          href="https://github.com/verasls"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </Link>
        <Github className="h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100" />
      </div>
    </footer>
  );
}
