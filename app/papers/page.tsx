import PapersList from "@/components/papers-list";
import { papers } from "@/app/papers/papers-data";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl pt-6">
      <h1 className="text-gradient mb-4 text-4xl font-bold tracking-tight">
        Papers
      </h1>
      <p>My published scientific papers</p>

      <PapersList papers={papers} />
    </div>
  );
}
