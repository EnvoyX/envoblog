import { prisma } from "../utils/prisma";

export async function getData() {
  const datas = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
    },
  });
  return datas;
}
