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
    <main className="py-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight mb-8">
          Your Blog Posts
        </h1>
        <Link
          className={`${buttonVariants({
            variant: "default",
          })} hover:scale-105 mb-8 transition-all`}
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
    </main>
  );
}

export default DashboardPage;
