"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-foreground">
      <h2 className="text-2xl font-bold text-white">Something went wrong</h2>
      <p className="text-muted-foreground text-sm">{error.message}</p>
      <Button
        onClick={reset}
        variant="outline"
        size="sm"
        className="mt-2 border-white/20 text-white hover:bg-white/5"
      >
        Try again
      </Button>
    </div>
  );
}
