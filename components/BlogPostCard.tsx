import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  data: {
    id: string;
    title: string;
    content: string;
    imageUrl: string;
    authorId: string;
    authorName: string;
    authorImage: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

function BlogPostCard({ data }: BlogPostCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg border-gray-200 bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-700 transition-all hover:shadow-lg hover:scale-105">
      <Link href={`/post/${data.id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={data.imageUrl}
            className="object-cover transition-transform duration-300"
            alt="Image for Block"
            fill
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
            {data.title}
          </h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-slate-400 line-clamp-3">
            {data.content}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative size-8 overflow-hidden rounded-full">
                <Image
                  src={data.authorImage}
                  alt={data.authorName}
                  className="object-cover"
                  fill
                ></Image>
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-slate-200">
                {data.authorName}
              </p>
            </div>
            {/* <time className="text-base text-gray-500 dark:text-slate-100">
              {data.createdAt.toLocaleDateString()}
            </time> */}
            <time className="text-base text-gray-500 dark:text-slate-500">
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              }).format(data.createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default BlogPostCard;
