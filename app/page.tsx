import BlogPostCard from "@/components/BlogPostCard";
import { BlogPostsGridSkeleton } from "@/components/BlogPostsGridSkeleton";
import { getDatas } from "@/lib/utilty";
import { Suspense } from "react";

export const revalidate = 60;

async function BlogPosts() {
  const datas = await getDatas();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {datas.map((data) => (
        <BlogPostCard data={data} key={data.id} />
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>
      <Suspense fallback={<BlogPostsGridSkeleton />}>
        <BlogPosts />
      </Suspense>
    </main>
  );
}
