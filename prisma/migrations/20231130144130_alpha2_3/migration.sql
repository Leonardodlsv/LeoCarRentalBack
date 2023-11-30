/*
  Warnings:

  - Added the required column `gas` to the `Vehicles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicles" ADD COLUMN     "gas" TEXT NOT NULL;
