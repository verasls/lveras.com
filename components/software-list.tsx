import Link from "next/link";
import { Software } from "@/app/software/software-data";

type SoftwareListProps = {
  software: Array<Software>;
};

export default function SoftwareList({ software }: SoftwareListProps) {
  return (
    <>
      <h2 className="mb-2 mt-14 text-xl font-bold">Featured projects</h2>
      <div className="mt-3 flex flex-wrap gap-4">
        {software.map((software) => (
          <Link
            href="#"
            key={software.id}
            className="w-44 rounded-md hover:bg-accent"
          >
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
        ))}
      </div>
    </>
  );
}
