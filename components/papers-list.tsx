import Link from "next/link";
import { cn } from "@/lib/utils";
import { badgeVariants } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Paper } from "@/app/papers/papers-data";

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
        <div key={year}>
          <h3 className="mb-2 text-lg font-bold">{year}</h3>

          <ul className="flex flex-col gap-4">
            {groupedPapers[year].map((paper) => (
              <li
                key={paper.id}
                className="flex flex-col gap-2 rounded-md p-4 hover:bg-accent"
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
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
