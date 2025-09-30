"use server";

import { prisma } from "@/utils/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return redirect("/api/auth/register");

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const imageUrl = formData.get("url") as string;
  await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrl,
      authorId: user?.id as string,
      authorName: user?.given_name as string,
      authorImage: user?.picture as string,
    },
  });
  return redirect("/dashboard");
}
