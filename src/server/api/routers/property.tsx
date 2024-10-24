import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import {
    ScrapflyClient, ScrapeConfig
} from 'scrapfly-sdk';


export const propertyRouter = createTRPCRouter({
    //   addToShortlist: protectedProcedure
    //     .input(
    //       z.object({
    //         propertyId: z.string(),
    //       })
    //     )
    //     .mutation(async ({ ctx, input }) => {
    //       const userId = ctx.session.user.id;

    //       return ctx.db..create({
    //         data: {
              
    //         },
    //       });
    //     }),
});