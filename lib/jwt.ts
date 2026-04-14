import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}

export function signPasswordResetToken(payload: object) {
  return jwt.sign({ ...payload, purpose: "password_reset" }, JWT_SECRET, {
    expiresIn: "1h",
  });
}

export function verifyPasswordResetToken(token: string) {
  const payload = jwt.verify(token, JWT_SECRET) as { purpose?: string };

  if (payload?.purpose !== "password_reset") {
    throw new Error("Token de redefinição inválido");
  }

  return payload;
}
