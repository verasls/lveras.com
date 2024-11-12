export default function Page() {
  return (
    <div className="mx-auto flex h-[calc(100vh-80px-64px)] max-w-3xl flex-1 items-center justify-start px-6">
      <div>
        <h1 className="mb-5 text-5xl font-bold tracking-tight">Lucas Veras</h1>
        <p className="text-base">
          PhD candidate in Physical Activity and Health
        </p>
        <p className="mb-8">Faculty of Sport, University of Porto</p>

        <p className="text-sm font-medium">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-sm">⌘</span>K
          </kbd>{" "}
          to start
        </p>
      </div>
    </div>
  );
}
