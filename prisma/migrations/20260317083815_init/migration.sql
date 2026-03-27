/*
  Warnings:

  - You are about to drop the `field` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `form` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hire_form_info` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organization_info` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "field" DROP CONSTRAINT "field_formId_fkey";

-- DropForeignKey
ALTER TABLE "hire_form_info" DROP CONSTRAINT "hire_form_info_organizationId_fkey";

-- DropTable
DROP TABLE "field";

-- DropTable
DROP TABLE "form";

-- DropTable
DROP TABLE "hire_form_info";

-- DropTable
DROP TABLE "organization_info";

-- CreateTable
CREATE TABLE "OrganizationInfo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "OrganizationInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HireFormInfo" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "expireDate" TIMESTAMP(3) NOT NULL,
    "urlLink" TEXT NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "HireFormInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Field" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" TEXT[],
    "url" TEXT,
    "formId" INTEGER NOT NULL,

    CONSTRAINT "Field_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "HireFormInfo" ADD CONSTRAINT "HireFormInfo_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "OrganizationInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HireFormInfo" ADD CONSTRAINT "HireFormInfo_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Field" ADD CONSTRAINT "Field_formId_fkey" FOREIGN KEY ("formId") REFERENCES "Form"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
