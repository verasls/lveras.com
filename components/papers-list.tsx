"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { Paper } from "@/app/papers/papers-data";

type Position = {
  top: number;
  height: number;
  opacity: number;
};

type PapersListProps = {
  papers: Array<Paper>;
};

function formatAuthors(authors: string) {
  return authors
    .split(/,\s*(?:and\s*)?/)
    .map((author, index, array) => {
      const formattedAuthor =
        author === "Veras L"
          ? `<strong class="whitespace-nowrap">Veras L</strong>`
          : `<span class="whitespace-nowrap">${author}</span>`;

      return index === array.length - 1
        ? formattedAuthor
        : `${formattedAuthor}, `;
    })
    .join("");
}

export default function PapersList({ papers }: PapersListProps) {
  const groupedPapers = papers.reduce(
    (accumulator, paper) => {
      if (!accumulator[paper.year]) {
        accumulator[paper.year] = [];
      }

      accumulator[paper.year].push(paper);

      return accumulator;
    },
    {} as Record<number, Array<Paper>>
  );

  const sortedYears = Object.keys(groupedPapers)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="mt-14 flex flex-col gap-6">
      {sortedYears.map((year) => (
        <PapersPerYear key={year} year={year} papers={groupedPapers[year]} />
      ))}
    </div>
  );
}

type PapersPerYearProps = {
  year: number;
  papers: Array<Paper>;
};

function PapersPerYear({ year, papers }: PapersPerYearProps) {
  const [position, setPosition] = useState<Position>({
    top: 0,
    height: 0,
    opacity: 0,
  });

  return (
    <div>
      <h3 className="mb-2 text-lg font-bold">{year}</h3>

      <ul
        onMouseLeave={() => {
          setPosition((previousPosition) => ({
            ...previousPosition,
            opacity: 0,
          }));
        }}
        className="relative flex flex-col gap-4"
      >
        {papers.map((paper) => (
          <PapersListItem
            key={paper.id}
            paper={paper}
            setPosition={setPosition}
          />
        ))}

        <Cursor position={position} />
      </ul>
    </div>
  );
}

type PapersListItemProps = {
  paper: Paper;
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
};

function PapersListItem({ paper, setPosition }: PapersListItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      key={paper.id}
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { height, top } = ref.current.getBoundingClientRect();
        const offsetTop = ref.current.offsetTop;

        setPosition({
          top: offsetTop,
          height: height,
          opacity: 1,
        });
      }}
      className="relative z-10 flex flex-col gap-2 rounded-md p-4"
    >
      <h4 className="text-lg font-semibold">{paper.title}</h4>
      <p
        dangerouslySetInnerHTML={{
          __html: formatAuthors(paper.authors),
        }}
        className="text-sm"
      />
      <p className="text-sm italic">{paper.journal}</p>

      <div className="mt-3 flex h-5 items-center gap-2">
        {paper.doi ? (
          <Link
            href={`https://doi.org/${paper.doi}`}
            className={cn(
              badgeVariants({ variant: "outline" }),
              "border-foreground text-xs font-light uppercase tracking-wide hover:bg-background/40"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            doi
          </Link>
        ) : null}

        {paper.pmid ? (
          <Link
            href={`https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}`}
            className={cn(
              badgeVariants({ variant: "outline" }),
              "border-foreground text-xs font-light uppercase tracking-wide hover:bg-background/40"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            pubmed
          </Link>
        ) : null}

        {paper.code ? (
          <Link
            href={`https://github.com/verasls/${paper.code}`}
            className={cn(
              badgeVariants({ variant: "outline" }),
              "border-foreground text-xs font-light uppercase tracking-wide hover:bg-background/40"
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            code
          </Link>
        ) : null}
      </div>
    </li>
  );
}

type CursorProps = {
  position: Position;
};

function Cursor({ position }: CursorProps) {
  return (
    <motion.li
      animate={{ ...position, left: "0", transform: "translateX(0)" }}
      className="absolute z-0 w-full rounded-md bg-accent"
    />
  );
}
