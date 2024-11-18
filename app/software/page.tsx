import Link from "next/link";
import { readCranVersion } from "@/lib/data-services";
import SoftwareList from "@/components/software-list";
import { software } from "@/app/software/software-data";

export default async function Page() {
  const softwareWithVersions = await Promise.all(
    software.map(async (software) => {
      if (software.type === "R package") {
        const version = await readCranVersion(software.title);
        return { ...software, version };
      }

      return software;
    })
  );

  return (
    <div className="mx-auto max-w-3xl pt-6">
      <h1 className="text-gradient mb-4 text-4xl font-bold tracking-tight">
        Software
      </h1>
      <p>
        I&apos;m enthusiastic about side projects—sometimes more than I should
        be! These projects are one of my favorite ways to learn, and I often
        jump from one to the next. Here are a few featured projects, but you can
        explore them all on my{" "}
        <Link
          href="https://github.com/verasls?tab=repositories"
          className="relative inline-block font-semibold text-primary transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:bg-primary after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          github repos
        </Link>
        .
      </p>

      <SoftwareList software={softwareWithVersions} />
    </div>
  );
}
