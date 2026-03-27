/*
  Warnings:

  - You are about to drop the column `url_link` on the `hire_form_info` table. All the data in the column will be lost.
  - Added the required column `urlLink` to the `hire_form_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hire_form_info" DROP COLUMN "url_link",
ADD COLUMN     "urlLink" TEXT NOT NULL;
