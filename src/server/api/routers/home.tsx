import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import {
    ScrapflyClient, ScrapeConfig
} from 'scrapfly-sdk';


export const homeRouter = createTRPCRouter({
    //   createComment: protectedProcedure
    //     .input(
    //       z.object({
    //         content: z.string().min(1, "Comment cannot be empty"),
    //         postId: z.string(),
    //         parentId: z.string().optional(),
    //       })
    //     )
    //     .mutation(async ({ ctx, input }) => {
    //       const userId = ctx.session.user.id;

    //       return ctx.db.comment.create({
    //         data: {
    //           content: input.content,
    //           post: { connect: { id: input.postId } },
    //           user: { connect: { id: userId } },
    //           parent: input.parentId ? { connect: { id: input.parentId } } : undefined,
    //         },
    //       });
    //     }),
});