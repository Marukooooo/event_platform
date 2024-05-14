import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
//认情况下，clerkMiddleware不会保护任何路由。所有路由都是公共的，您必须选择加入路由保护。

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
