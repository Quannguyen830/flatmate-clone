import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { homeRouter } from "./routers/home";
import { propertyRouter } from "./routers/property";
import { listRouter } from "./routers/list";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  home: homeRouter,
  list: listRouter,
  property: propertyRouter
});

// if (process.env.NODE_ENV === "production") {
//   initCronJobs();
// }

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
