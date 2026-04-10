import { cookies } from "next/headers";

import { verifyToken } from "../../lib/jwt";

type TokenPayload = {
  userId?: string;
  role?: string;
};

export async function getAuthenticatedUserId() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const payload = verifyToken(token) as TokenPayload;

    return payload.userId ?? null;
  } catch {
    return null;
  }
}

export async function getAuthenticatedUserRole() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return null;
  }

  try {
    const payload = verifyToken(token) as TokenPayload;

    return payload.role ?? null;
  } catch {
    return null;
  }
}
