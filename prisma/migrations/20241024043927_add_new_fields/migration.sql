/*
  Warnings:

  - You are about to drop the `_PropertyToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_PropertyToUser" DROP CONSTRAINT "_PropertyToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_PropertyToUser" DROP CONSTRAINT "_PropertyToUser_B_fkey";

-- DropTable
DROP TABLE "_PropertyToUser";

-- CreateTable
CREATE TABLE "_PropertyListingToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PropertyListingToUser_AB_unique" ON "_PropertyListingToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PropertyListingToUser_B_index" ON "_PropertyListingToUser"("B");

-- AddForeignKey
ALTER TABLE "_PropertyListingToUser" ADD CONSTRAINT "_PropertyListingToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "PropertyListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PropertyListingToUser" ADD CONSTRAINT "_PropertyListingToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
