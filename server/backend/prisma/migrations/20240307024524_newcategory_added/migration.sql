/*
  Warnings:

  - You are about to drop the column `locationId` on the `hotel` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `room` table. All the data in the column will be lost.
  - You are about to drop the column `hotelId` on the `room` table. All the data in the column will be lost.
  - You are about to drop the column `services` on the `room` table. All the data in the column will be lost.
  - You are about to drop the column `hotelId` on the `roomcategory` table. All the data in the column will be lost.
  - Added the required column `location_id` to the `Hotel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotel_id` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hotel_id` to the `RoomCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `room` DROP FOREIGN KEY `Room_categoryId_fkey`;

-- DropForeignKey
ALTER TABLE `room` DROP FOREIGN KEY `Room_hotelId_fkey`;

-- DropForeignKey
ALTER TABLE `roomcategory` DROP FOREIGN KEY `RoomCategory_hotelId_fkey`;

-- AlterTable
ALTER TABLE `hotel` DROP COLUMN `locationId`,
    ADD COLUMN `location_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `room` DROP COLUMN `categoryId`,
    DROP COLUMN `hotelId`,
    DROP COLUMN `services`,
    ADD COLUMN `category_id` INTEGER NOT NULL,
    ADD COLUMN `hotel_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `roomcategory` DROP COLUMN `hotelId`,
    ADD COLUMN `hotel_id` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Service` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `room_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hotel` ADD CONSTRAINT `Hotel_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `Location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoomCategory` ADD CONSTRAINT `RoomCategory_hotel_id_fkey` FOREIGN KEY (`hotel_id`) REFERENCES `Hotel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `RoomCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Room`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
