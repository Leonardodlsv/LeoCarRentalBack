/*
  Warnings:

  - You are about to drop the column `id_vehicles` on the `Booking` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_id_vehicles_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "id_vehicles";
