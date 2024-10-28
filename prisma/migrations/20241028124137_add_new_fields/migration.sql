/*
  Warnings:

  - You are about to drop the column `link` on the `PropertyListing` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `PropertyListing` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "PropertyListing_link_key";

-- AlterTable
ALTER TABLE "PropertyListing" DROP COLUMN "link";

-- CreateIndex
CREATE UNIQUE INDEX "PropertyListing_id_key" ON "PropertyListing"("id");
