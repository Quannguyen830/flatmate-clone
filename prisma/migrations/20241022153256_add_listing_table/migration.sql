-- CreateTable
CREATE TABLE "PropertyListing" (
    "id" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "timeForAvailable" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "featureList" TEXT[],

    CONSTRAINT "PropertyListing_pkey" PRIMARY KEY ("id")
);
