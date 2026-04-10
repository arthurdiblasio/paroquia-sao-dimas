import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("token")?.value;

  if (!token || !JWT_SECRET) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { role?: string };

    if (
      pathname === "/admin/agendamentos" ||
      pathname.startsWith("/admin/agendamentos/")
    ) {
      if (payload.role !== "ADMIN") {
        return NextResponse.redirect(new URL("/admin", req.url));
      }
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
