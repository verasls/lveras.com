import CommandMenuHomeText from "@/components/command-menu-home-text";

export default function Page() {
  return (
    <div className="mx-auto flex h-[calc(100vh-80px-64px)] max-w-3xl flex-1 items-center justify-start px-6">
      <div>
        <h1 className="text-gradient mb-5 text-5xl font-bold tracking-tight">
          Lucas Veras
        </h1>
        <p className="text-base">
          PhD candidate in Physical Activity and Health
        </p>
        <p className="mb-8">Faculty of Sport, University of Porto</p>

        <CommandMenuHomeText />
      </div>
    </div>
  );
}
