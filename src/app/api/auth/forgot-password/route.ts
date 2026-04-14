import { signPasswordResetToken } from "lib/jwt";
import { prisma } from "lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const email = body?.email;

  if (!email || typeof email !== "string") {
    return Response.json({ error: "Email inválido" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return Response.json({ success: true });
  }

  const token = signPasswordResetToken({
    userId: user.id,
    email: user.email,
  });

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
  const resetUrl = `${appUrl}/login/reset?token=${encodeURIComponent(token)}`;

  if (process.env.NODE_ENV !== "production") {
    console.log("[forgot-password] password reset link:", resetUrl);
  }

  return Response.json({
    success: true,
    debugLink: process.env.NODE_ENV !== "production" ? resetUrl : undefined,
  });
}
