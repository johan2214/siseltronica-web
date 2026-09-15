import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, cookies, redirect } = context;

  // Protect all /admin routes except the login page
  if (url.pathname.startsWith("/admin") && !url.pathname.includes("/admin/login")) {
    const accessToken = cookies.get("sb-access-token");
    const refreshToken = cookies.get("sb-refresh-token");

    if (!accessToken && !refreshToken) {
      return redirect("/admin/login");
    }
  }

  return next();
});
