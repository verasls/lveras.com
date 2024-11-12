"use client";

import { Button } from "@/components/ui/button";

export default function CommandMenuHomeText() {
  const isMac = /Macintosh/.test(navigator.userAgent);
  const isMobile =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    /android/i.test(navigator.userAgent);

  if (isMobile)
    return (
      <Button variant="ghost" className="-ml-4">
        Tap to start
      </Button>
    );

  return (
    <p className="text-sm font-medium">
      Press{" "}
      <kbd className="pointer-events-none inline-flex h-5 select-none items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
        {isMac ? <span className="text-sm">⌘</span> : <span>ctrl</span>}K
      </kbd>{" "}
      to start
    </p>
  );
}
