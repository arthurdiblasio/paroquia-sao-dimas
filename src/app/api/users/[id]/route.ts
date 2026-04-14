import { prisma } from "lib/prisma";
import { getAuthenticatedUserRole } from "@/lib/auth";

type Props = {
  params: Promise<{ id: string }>;
};

export async function PATCH(req: Request, { params }: Props) {
  const role = await getAuthenticatedUserRole();

  if (role !== "ADMIN") {
    return Response.json({ error: "Não autorizado." }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();

  if (!email || !email.includes("@")) {
    return Response.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return Response.json({ error: "Usuário não encontrado." }, { status: 404 });
  }

  const emailInUse = await prisma.user.findUnique({
    where: { email },
  });

  if (emailInUse && emailInUse.id !== id) {
    return Response.json({ error: "E-mail já cadastrado." }, { status: 409 });
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { email },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return Response.json(updatedUser);
}

export async function DELETE(req: Request, { params }: Props) {
  const role = await getAuthenticatedUserRole();

  if (role !== "ADMIN") {
    return Response.json({ error: "Não autorizado." }, { status: 401 });
  }

  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
  });

  if (!user) {
    return Response.json({ error: "Usuário não encontrado." }, { status: 404 });
  }

  await prisma.user.delete({
    where: { id },
  });

  return Response.json({ success: true });
}
