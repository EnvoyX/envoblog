import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

async function DashboardPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Posts</h2>
        <Link
          className={buttonVariants({ variant: "default" })}
          href="/dashboard/create"
        >
          Create Post
        </Link>
      </div>
    </div>
  );
}

export default DashboardPage;
