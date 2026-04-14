import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 0);
const smtpUser = process.env.SMTP_USER;
const smtpPassword = process.env.SMTP_PASSWORD;
const fromAddress =
  process.env.EMAIL_FROM ?? "Paróquia São Dimas <no-reply@paroquia.com>";

if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
  throw new Error(
    "SMTP configuration is required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD",
  );
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPassword,
  },
});

export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html: string;
}) {
  await transporter.sendMail({
    from: fromAddress,
    to,
    subject,
    text,
    html,
  });
}
