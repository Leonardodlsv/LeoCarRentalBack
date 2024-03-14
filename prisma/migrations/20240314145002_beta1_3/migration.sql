/*
  Warnings:

  - Added the required column `id_vehicles` to the `Booking` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "id_vehicles" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_id_vehicles_fkey" FOREIGN KEY ("id_vehicles") REFERENCES "Vehicles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
