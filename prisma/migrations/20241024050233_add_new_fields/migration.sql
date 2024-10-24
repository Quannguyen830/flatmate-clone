/*
  Warnings:

  - A unique constraint covering the columns `[link]` on the table `PropertyListing` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "PropertyListing_link_key" ON "PropertyListing"("link");
