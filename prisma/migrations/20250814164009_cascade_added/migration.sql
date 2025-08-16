-- DropForeignKey
ALTER TABLE `changelog` DROP FOREIGN KEY `ChangeLog_task_id_fkey`;

-- DropForeignKey
ALTER TABLE `statuses` DROP FOREIGN KEY `Statuses_project_id_fkey`;

-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_project_id_fkey`;

-- DropForeignKey
ALTER TABLE `task` DROP FOREIGN KEY `Task_status_id_fkey`;

-- DropIndex
DROP INDEX `ChangeLog_task_id_fkey` ON `changelog`;

-- DropIndex
DROP INDEX `Statuses_project_id_fkey` ON `statuses`;

-- DropIndex
DROP INDEX `Task_project_id_fkey` ON `task`;

-- DropIndex
DROP INDEX `Task_status_id_fkey` ON `task`;

-- AddForeignKey
ALTER TABLE `Statuses` ADD CONSTRAINT `Statuses_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `Project`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Task` ADD CONSTRAINT `Task_status_id_fkey` FOREIGN KEY (`status_id`) REFERENCES `Statuses`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ChangeLog` ADD CONSTRAINT `ChangeLog_task_id_fkey` FOREIGN KEY (`task_id`) REFERENCES `Task`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
