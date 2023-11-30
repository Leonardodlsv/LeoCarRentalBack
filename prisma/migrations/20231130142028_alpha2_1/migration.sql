/*
  Warnings:

  - A unique constraint covering the columns `[image]` on the table `Vehicles` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `image` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Vehicles_image_key" ON "Vehicles"("image");
