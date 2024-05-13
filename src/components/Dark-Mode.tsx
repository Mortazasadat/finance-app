"use client";
import { Eclipse, Moon, Sun } from "lucide-react";
import { Button } from "./Button";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      size="small"
      variants="ghost"
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
      }}
    >
      {<Eclipse className="w-4 h-4" />}
    </Button>
  );
}
