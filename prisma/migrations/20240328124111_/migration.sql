/*
  Warnings:

  - A unique constraint covering the columns `[id_passport]` on the table `Booking` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Booking_id_passport_key" ON "Booking"("id_passport");
