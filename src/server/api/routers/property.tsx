import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const propertyRouter = createTRPCRouter({
    findPropertyById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const property = await prisma.property.findUnique({
        where: { id: input.id },
      });

      if (!property) {
        throw new Error(`Property with ID ${input.id} not found`);
      }

      return property;
    }),
});