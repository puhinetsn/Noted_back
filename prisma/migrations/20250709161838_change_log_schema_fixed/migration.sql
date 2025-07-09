/*
  Warnings:

  - Added the required column `new_field_value` to the `ChangeLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `changelog` ADD COLUMN `new_field_value` VARCHAR(191) NOT NULL;
