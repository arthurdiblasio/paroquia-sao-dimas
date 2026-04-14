import { signPasswordResetToken } from "lib/jwt";
import { prisma } from "lib/prisma";
import { sendEmail } from "lib/email";

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

  const subject = "Redefinição de senha - Paróquia São Dimas";
  const text = `Você solicitou a redefinição de senha. Use o link a seguir para criar uma nova senha:\n\n${resetUrl}\n\nSe você não solicitou, ignore esta mensagem.`;
  const html = `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6;">
      <h1 style="color:#092070;">Redefinição de senha</h1>
      <p>Olá ${user.name},</p>
      <p>Recebemos uma solicitação para redefinir sua senha. Clique no botão abaixo para continuar:</p>
      <p><a href="${resetUrl}" style="display:inline-block;padding:12px 20px;background:#092070;color:#fff;text-decoration:none;border-radius:8px;">Redefinir senha</a></p>
      <p>Se o botão não funcionar, copie e cole este link no navegador:</p>
      <p style="word-break:break-all;">${resetUrl}</p>
      <p>Se você não solicitou a redefinição, ignore esta mensagem.</p>
    </div>
  `;

  await sendEmail({
    to: user.email,
    subject,
    text,
    html,
  });

  return Response.json({ success: true });
}
