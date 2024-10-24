/*
  Warnings:

  - You are about to drop the column `featureList` on the `PropertyListing` table. All the data in the column will be lost.
  - Added the required column `imagesLength` to the `PropertyListing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PropertyListing" DROP COLUMN "featureList",
ADD COLUMN     "features" TEXT[],
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "imagesLength" INTEGER NOT NULL;
