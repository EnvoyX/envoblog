import { Skeleton } from "@/components/ui/skeleton";
import { getUserPosts } from "@/lib/utilty";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

// Blog posts grid in dashboard page for fallback
// Note: fallback components or loading components should be better not async (best practice)
export default async function BlogPostsGridSkeleton() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const datas = await getUserPosts(user?.id as string);
  const totalDatas = datas.length;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: totalDatas }).map((_, index) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm h-[400px] flex flex-col overflow-hidden"
          key={index}
        >
          {/* Image skeleton */}
          <Skeleton className="h-48 w-full rounded-none" />

          <div className="p-4 flex-1 flex flex-col gap-3">
            {/* Title skeleton */}
            <Skeleton className="h-6 w-3/4" />

            {/* Content skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* Footer skeleton */}
            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center">
                <Skeleton className="h-8 w-8 rounded-full mr-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
