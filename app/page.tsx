import { headers } from "next/headers";
import { Button } from "@/components/ui/button";

export default async function Page() {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent") || "";
  const isMac = /Macintosh/.test(userAgent);
  const isMobile =
    /iPad|iPhone|iPod/.test(userAgent) || /android/i.test(userAgent);
  const deviceType = isMobile ? "mobile" : isMac ? "mac" : "other";

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

        {deviceType === "mobile" ? (
          <Button variant="ghost" className="-ml-4">
            Tap to start
          </Button>
        ) : (
          <p className="text-sm font-medium">
            Press{" "}
            {deviceType === "mac" ? (
              <>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                  ⌘
                </kbd>{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                  K
                </kbd>
              </>
            ) : (
              <>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                  ctrl
                </kbd>{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium text-muted-foreground">
                  K
                </kbd>
              </>
            )}{" "}
            to start
          </p>
        )}
      </div>
    </div>
  );
}
