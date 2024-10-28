/*
  Warnings:

  - The primary key for the `Property` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `propertyId` on the `Property` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Property_propertyId_key";

-- AlterTable
ALTER TABLE "Property" DROP CONSTRAINT "Property_pkey",
DROP COLUMN "propertyId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Property_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Property_id_key" ON "Property"("id");
