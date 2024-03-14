/*
  Warnings:

  - You are about to drop the column `id_user` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Vehicles` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `country` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_name` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_passport` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_id_user_fkey";

-- DropForeignKey
ALTER TABLE "Vehicles" DROP CONSTRAINT "Vehicles_authorId_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "id_user",
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "full_name" TEXT NOT NULL,
ADD COLUMN     "id_passport" TEXT NOT NULL,
ADD COLUMN     "phone_number" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Vehicles" DROP COLUMN "authorId";

-- DropTable
DROP TABLE "User";

-- CreateIndex
CREATE UNIQUE INDEX "Booking_email_key" ON "Booking"("email");
