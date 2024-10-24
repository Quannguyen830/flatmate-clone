import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import {
    ScrapflyClient, ScrapeConfig
} from 'scrapfly-sdk';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const listRouter = createTRPCRouter({
    getAllPropertyListings: publicProcedure.query(async () => {
        try {
            const listings = await prisma.propertyListing.findMany();
            return listings;
        } catch (error) {
            console.error('Error fetching property listings:', error);
            throw new Error('Failed to fetch property listings');
        }
    }),

    getShortlistListings: publicProcedure.query(async ({ ctx }) => {
        const userId = ctx.session?.user?.id;

        if (!userId) {
            throw new Error("User not authenticated");
        }

        const userWithShortlist = await prisma.user.findUnique({
            where: { id: userId },
            select: {
                shortlist: true,
            },
        });

        return userWithShortlist?.shortlist ?? [];
    }),
})