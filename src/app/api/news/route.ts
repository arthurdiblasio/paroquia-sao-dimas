import { prisma } from "lib/prisma";

export async function GET() {
  const news = await prisma.news.findMany({
    include: {
      category: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return Response.json(news);
}

export async function POST(req: Request) {
  const body = await req.json();

  const news = await prisma.news.create({
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content,
      categoryId: body.categoryId,
      published: false,
      createdById: body.userId,
    },
  });

  return Response.json(news);
}
