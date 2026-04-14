import bcrypt from "bcrypt";
import { prisma } from "lib/prisma";
import { getAuthenticatedUserRole } from "@/lib/auth";

const allowedRoles = ["ADMIN", "COMUNICACAO"] as const;

type UserRole = (typeof allowedRoles)[number];

export async function POST(req: Request) {
  const role = await getAuthenticatedUserRole();

  if (role !== "ADMIN") {
    return Response.json({ error: "Não autorizado." }, { status: 401 });
  }

  const body = await req.json();
  const name = String(body?.name ?? "").trim();
  const email = String(body?.email ?? "")
    .trim()
    .toLowerCase();
  const password = String(body?.password ?? "");
  const userRole = String(
    body?.role ?? "COMUNICACAO",
  ).toUpperCase() as UserRole;

  if (!name || !email || !password) {
    return Response.json(
      { error: "Nome, e-mail e senha são obrigatórios." },
      { status: 400 },
    );
  }

  if (!email.includes("@")) {
    return Response.json({ error: "E-mail inválido." }, { status: 400 });
  }

  if (!allowedRoles.includes(userRole)) {
    return Response.json({ error: "Role inválido." }, { status: 400 });
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return Response.json({ error: "E-mail já cadastrado." }, { status: 409 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: userRole,
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });

  return Response.json({ user });
}
