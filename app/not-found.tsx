import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 text-foreground">
      <h1 className="text-6xl font-bold text-purple">404</h1>
      <h2 className="text-2xl font-semibold text-white">Page not found</h2>
      <p className="text-muted-foreground text-center max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button asChild variant="outline" className="mt-2 border-white/20 text-white hover:bg-white/5">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
