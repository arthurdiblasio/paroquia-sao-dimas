import { prisma } from "lib/prisma";

export async function GET() {
  const categories = await prisma.newsCategory.findMany({
    orderBy: {
      name: "asc",
    },
  });

  return Response.json(categories);
}
