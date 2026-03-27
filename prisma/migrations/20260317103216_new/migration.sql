/*
  Warnings:

  - You are about to drop the `HireFormInfo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrganizationInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "HireFormInfo" DROP CONSTRAINT "HireFormInfo_formId_fkey";

-- DropForeignKey
ALTER TABLE "HireFormInfo" DROP CONSTRAINT "HireFormInfo_organizationId_fkey";

-- DropTable
DROP TABLE "HireFormInfo";

-- DropTable
DROP TABLE "OrganizationInfo";

-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HiringForms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,
    "urlLink" TEXT NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "HiringForms_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HiringForms" ADD CONSTRAINT "HiringForms_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HiringForms" ADD CONSTRAINT "HiringForms_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
