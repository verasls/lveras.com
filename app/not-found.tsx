import { headers } from "next/headers";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function NotFound() {
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
          Page not found
        </h1>
        <p className="text-base">Sorry, this page doesn&apos;t exist</p>
        <p className="mb-8">
          If you need some content that is no longer available,{" "}
          <Link
            href="/contact"
            className="relative inline-block font-semibold text-primary transition-all duration-200 ease-in-out after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:transform after:bg-primary after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100"
          >
            let me know
          </Link>
        </p>

        {deviceType === "mobile" ? (
          <Button variant="ghost" className="-ml-4">
            Tap to go somewhere else
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
            to go somewhere else
          </p>
        )}
      </div>
    </div>
  );
}
