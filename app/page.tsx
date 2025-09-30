import BlogPostCard from "@/components/BlogPostCard";
import { getDatas } from "@/lib/utilty";

export default async function Home() {
  const datas = await getDatas();
  return (
    <main className="py-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {datas.map((data) => (
          <BlogPostCard data={data} key={data.id} />
        ))}
      </div>
    </main>
  );
}
