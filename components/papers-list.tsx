import Link from "next/link";
import { Paper } from "@/app/papers/papers-data";

type PapersListProps = {
  papers: Array<Paper>;
};

function formatAuthors(authors: string) {
  return authors.replace("/Veras L/g", "<strong>Veras L</strong>");
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
    <>
      <p>My published scientific papers</p>
      <div>
        {sortedYears.map((year) => (
          <div key={year}>
            <h3>{year}</h3>

            <ul>
              {groupedPapers[year].map((paper) => (
                <li key={paper.id}>
                  <h4>{paper.title}</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: formatAuthors(paper.authors),
                    }}
                  />
                  <p>{paper.journal}</p>

                  <div>
                    {paper.doi ? (
                      <Link href={`https://doi.org/${paper.doi}`}>doi</Link>
                    ) : null}

                    {paper.pmid ? (
                      <Link
                        href={`https://pubmed.ncbi.nlm.nih.gov/${paper.pmid}`}
                      >
                        pubmed
                      </Link>
                    ) : null}

                    {paper.code ? (
                      <Link href={`https://github.com/verasls/${paper.code}`}>
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
    </>
  );
}
