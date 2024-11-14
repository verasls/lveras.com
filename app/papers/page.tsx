import Link from "next/link";
import PapersList from "@/components/papers-list";
import { papers } from "@/app/papers/papers-data";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl pt-6">
      <h1 className="text-gradient mb-4 text-4xl font-bold tracking-tight">
        Papers
      </h1>
      <p>
        Explore my published academic papers below. If you have any questions or
        would like to discuss my work, please feel free to{" "}
        <Link
          href="/contact"
          className="relative inline-block font-semibold text-primary transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:bg-primary after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
        >
          contact me
        </Link>
        !
      </p>

      <PapersList papers={papers} />
    </div>
  );
}
