/*
  Warnings:

  - You are about to drop the column `mobail` on the `userdetails` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[mobile]` on the table `UserDetails` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `mobile` to the `UserDetails` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `UserDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `UserDetails_mobail_key` ON `userdetails`;

-- AlterTable
ALTER TABLE `userdetails` DROP COLUMN `mobail`,
    ADD COLUMN `mobile` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `UserDetails_mobile_key` ON `UserDetails`(`mobile`);
