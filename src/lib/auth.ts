import { cookies } from "next/headers"

import { verifyToken } from "../../lib/jwt"
import { prisma } from "../../lib/prisma"

type TokenPayload = {
  userId?: string
  role?: string
}

export async function getAuthenticatedUserId() {
  const token = (await cookies()).get("token")?.value

  if (!token) {
    return null
  }

  try {
    const payload = verifyToken(token) as TokenPayload

    return payload.userId ?? null
  } catch {
    return null
  }
}

export async function getAuthenticatedUserIdOrFallback() {
  const authenticatedUserId = await getAuthenticatedUserId()

  if (authenticatedUserId) {
    return authenticatedUserId
  }

  const fallbackUser = await prisma.user.findFirst({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
    },
  })

  return fallbackUser?.id ?? null
}
