/*
  Warnings:

  - The primary key for the `Property` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `city` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Property` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Property` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[propertyId]` on the table `Property` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `imagesLength` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `link` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overviewDetails` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `overviewFeatures` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerName` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyFeatures` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `propertyId` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shortDescription` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Property" DROP CONSTRAINT "Property_pkey",
DROP COLUMN "city",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "imagesLength" TEXT NOT NULL,
ADD COLUMN     "imagesList" TEXT[],
ADD COLUMN     "link" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "overviewDetails" JSONB NOT NULL,
ADD COLUMN     "overviewFeatures" JSONB NOT NULL,
ADD COLUMN     "ownerName" TEXT NOT NULL,
ADD COLUMN     "price" TEXT[],
ADD COLUMN     "propertyFeatures" JSONB NOT NULL,
ADD COLUMN     "propertyId" TEXT NOT NULL,
ADD COLUMN     "shortDescription" TEXT NOT NULL,
ADD COLUMN     "shortFeatureList" TEXT[],
ADD COLUMN     "tagList" TEXT[],
ADD COLUMN     "timeForAvailable" TEXT[],
ADD CONSTRAINT "Property_pkey" PRIMARY KEY ("propertyId");

-- CreateIndex
CREATE UNIQUE INDEX "Property_propertyId_key" ON "Property"("propertyId");
