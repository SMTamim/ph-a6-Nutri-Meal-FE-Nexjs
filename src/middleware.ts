import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthServices";

type TRole = keyof typeof roleBasedPrivateRoutes;

const authRoutes = ["/login", "/signup"];

const roleBasedPrivateRoutes = {
  customer: [/^\/dashboard\/user(\/.*)?$/],
  provider: [/^\/dashboard\/provider(\/.*)?$/]
};
const commonRoutes = [/^\/dashboard\/(orders|menu|profile|find-meals|meal-plans)(\/.*)?$/];

export const middleware = async (request: NextRequest) => {
  const user = await getCurrentUser();
  if (!user) {
    if (authRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(`/login?${request.nextUrl.pathname}`, request.url));
  }

  if (commonRoutes.some((route) => request.nextUrl.pathname.match(route))) {
    return NextResponse.next();
  }

  if (user.role && roleBasedPrivateRoutes[user.role as TRole]) {
    const routes = roleBasedPrivateRoutes[user.role as TRole];
    if (routes.some((route) => request.nextUrl.pathname.match(route))) {
      return NextResponse.next();
    }
  }
  // 🚨 Block unauthorized access 🚨
  const role = user.role === "customer" ? "user" : "provider";
  return NextResponse.redirect(new URL(`/dashboard/${role}`, request.url));
};

export const config = {
  matcher: [
    "/login",
    "/signup",
    "/dashboard",
    "/dashboard/:path*",
    "/dashboard/user",
    "/dashboard/user/:page",
    "/dashboard/provider",
    "/dashboard/provider/:page"
  ]
};
