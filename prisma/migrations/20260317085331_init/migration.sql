/*
  Warnings:

  - A unique constraint covering the columns `[formId]` on the table `HireFormInfo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "HireFormInfo_formId_key" ON "HireFormInfo"("formId");
