import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPostById } from "@/lib/utilty";
import Image from "next/image";
import Link from "next/link";

async function idPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getPostById(id);
  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full flex flex-col items-center gap-4">
          <h1 className="text-3xl">
            {" "}
            <span className="font-bold">404</span> Post not found
          </h1>
          <p className="text-lg">
            The post you are looking for does not exist or has been deleted.
          </p>
          <Link href="/">
            <Button variant={"outline"}>Go back to home</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href="/" className={buttonVariants({ variant: "secondary" })}>
        Back to posts
      </Link>
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={data.authorImage}
                alt={data.authorName}
                className="object-cover"
                fill
              ></Image>
            </div>
            <p className="font-medium">{data.authorName}</p>
          </div>
          <p className="text-base font-semibold text-gray-500 dark:text-slate-400">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(data.createdAt)}
          </p>
        </div>
      </div>
      <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
        <Image
          src={data.imageUrl}
          alt={data.title}
          className="object-cover"
          fill
          priority
        ></Image>
      </div>
      <Card>
        <CardContent>
          <p className="text-gray-700 dark:text-slate-300">{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default idPostPage;
