import bcrypt from "bcrypt";
import { signToken } from "lib/jwt";
import { prisma } from "lib/prisma";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return Response.json(
      { error: "Usuário ou senha inválidos" },
      { status: 401 },
    );
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return Response.json(
      { error: "Usuário ou senha inválidos" },
      { status: 401 },
    );
  }

  const token = signToken({
    userId: user.id,
    role: user.role,
  });

  (await cookies()).set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  console.log("deu certo");

  return Response.json({ success: true });
}
