"use client";

import {
  BookText,
  CircleCheck,
  Code,
  House,
  Link,
  Mail,
  Terminal,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

type CommandAction = {
  name: string;
  shortcut: Array<string>;
  icon: React.ReactNode;
  action: () => void;
};

export default function CommandMenu() {
  const router = useRouter();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const generalActions: Array<CommandAction> = [
    {
      name: "Copy",
      shortcut: ["L"],
      icon: <Link />,
      action: () => {
        navigator.clipboard.writeText(window.location.href);
        toast({
          description: (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="text-foreground">
                  <CircleCheck className="h-4 w-4 text-green-700" />
                </div>
                <span className="font-medium">Copied!</span>
              </div>
              <p>You can now share wherever you like.</p>
            </div>
          ),
        });
      },
    },
    {
      name: "View source",
      shortcut: ["S"],
      icon: <Code />,
      action: () =>
        window.open("https://github.com/verasls/lveras.com", "_blank"),
    },
    {
      name: "Send email",
      shortcut: ["E"],
      icon: <Mail />,
      action: () => router.push("/contact"),
    },
  ];

  const goToActions: Array<CommandAction> = [
    {
      name: "Home",
      shortcut: ["G", "H"],
      icon: <House />,
      action: () => router.push("/"),
    },
    {
      name: "About",
      shortcut: ["G", "A"],
      icon: <User />,
      action: () => router.push("/about"),
    },
    {
      name: "Papers",
      shortcut: ["G", "P"],
      icon: <BookText />,
      action: () => router.push("/papers"),
    },
    {
      name: "Software",
      shortcut: ["G", "S"],
      icon: <Terminal />,
      action: () => router.push("/software"),
    },
  ];

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="hidden">Command menu</DialogTitle>
      <DialogDescription className="hidden">
        Command menu with shortcuts to website actions
      </DialogDescription>

      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="General">
          {generalActions.map((action) => (
            <CommandItem
              key={action.name}
              onSelect={() => {
                action.action();
                setOpen((open) => !open);
              }}
            >
              {action.icon}
              <span>{action.name}</span>
              <CommandShortcut>
                <div className="flex gap-[2px]">
                  {action.shortcut.map((shortcut) => (
                    <span
                      key={`${action.name}-${shortcut}`}
                      className="inline-flex h-5 items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
                    >
                      {shortcut}
                    </span>
                  ))}
                </div>
              </CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Go to">
          {goToActions.map((action) => (
            <CommandItem
              key={action.name}
              onSelect={() => {
                action.action();
                setOpen((open) => !open);
              }}
            >
              {action.icon}
              <span>{action.name}</span>
              <CommandShortcut>
                <div className="flex gap-[2px]">
                  {action.shortcut.map((shortcut) => (
                    <span
                      key={`${action.name}-${shortcut}`}
                      className="inline-flex h-5 items-center justify-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
                    >
                      {shortcut}
                    </span>
                  ))}
                </div>
              </CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
