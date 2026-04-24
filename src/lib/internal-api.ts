import { headers } from "next/headers"

function normalizePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`
}

export async function getInternalApiUrl(path: string) {
  const headersList = await headers()
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host")
  const protocol = headersList.get("x-forwarded-proto") ?? "http"

  if (host) {
    return `${protocol}://${host}${normalizePath(path)}`
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"

  return `${appUrl}${normalizePath(path)}`
}

export async function fetchInternalApi<T>(path: string, init?: RequestInit) {
  const headersList = await headers()
  const cookie = headersList.get("cookie")
  const response = await fetch(await getInternalApiUrl(path), {
    ...init,
    cache: init?.cache ?? "no-store",
    headers: {
      ...(cookie ? { cookie } : {}),
      ...init?.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Internal API request failed: ${path}`)
  }

  return response.json() as Promise<T>
}

export async function fetchInternalApiOrNull<T>(path: string, init?: RequestInit) {
  const headersList = await headers()
  const cookie = headersList.get("cookie")
  const response = await fetch(await getInternalApiUrl(path), {
    ...init,
    cache: init?.cache ?? "no-store",
    headers: {
      ...(cookie ? { cookie } : {}),
      ...init?.headers,
    },
  })

  if (response.status === 404) {
    return null
  }

  if (!response.ok) {
    throw new Error(`Internal API request failed: ${path}`)
  }

  return response.json() as Promise<T>
}
