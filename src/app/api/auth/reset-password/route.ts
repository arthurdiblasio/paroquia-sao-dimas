import { hashPassword } from "lib/password";
import { prisma } from "lib/prisma";
import { verifyPasswordResetToken } from "lib/jwt";

export async function POST(req: Request) {
  const body = await req.json();
  const token = body?.token;
  const password = body?.password;

  if (
    !token ||
    typeof token !== "string" ||
    !password ||
    typeof password !== "string"
  ) {
    return Response.json(
      { error: "Token ou senha inválidos" },
      { status: 400 },
    );
  }

  try {
    const payload = verifyPasswordResetToken(token) as { userId?: string };

    if (!payload?.userId) {
      throw new Error("Token inválido");
    }

    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const hashedPassword = await hashPassword(password);

    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      { error: error instanceof Error ? error.message : "Token inválido" },
      { status: 400 },
    );
  }
}
