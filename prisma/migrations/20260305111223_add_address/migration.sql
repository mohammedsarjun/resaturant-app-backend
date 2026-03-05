/*
  Warnings:

  - Added the required column `address` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cuisine` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tables` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "contact" TEXT NOT NULL,
ADD COLUMN     "cuisine" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "tables" INTEGER NOT NULL;
