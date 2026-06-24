"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#000319] text-white">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-white/60 text-sm">{error.message}</p>
        <button
          onClick={reset}
          className="mt-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/15 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
