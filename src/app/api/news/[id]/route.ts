import { prisma } from "lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  const body = await req.json();

  const news = await prisma.news.update({
    where: { id: params.id },
    data: {
      title: body.title,
      slug: body.slug,
      content: body.content,
      categoryId: body.categoryId,
      published: body.published,
    },
  });

  return Response.json(news);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } },
) {
  await prisma.news.delete({
    where: { id: params.id },
  });

  return Response.json({ success: true });
}
