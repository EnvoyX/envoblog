import BlogPostCard from "@/components/BlogPostCard";
import { buttonVariants } from "@/components/ui/button";
import { getUserPosts } from "@/lib/utilty";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const datas = await getUserPosts(user?.id as string);
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {datas.map((data) => (
          <BlogPostCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
