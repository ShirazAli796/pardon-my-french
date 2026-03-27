-- CreateTable
CREATE TABLE "organization_info" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "organization_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hire_form_info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "expire_date" TIMESTAMP(3) NOT NULL,
    "url_link" TEXT NOT NULL,
    "organizationId" INTEGER NOT NULL,

    CONSTRAINT "hire_form_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "form_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "field" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "options" TEXT[],
    "formId" INTEGER,

    CONSTRAINT "field_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "hire_form_info" ADD CONSTRAINT "hire_form_info_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organization_info"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "field" ADD CONSTRAINT "field_formId_fkey" FOREIGN KEY ("formId") REFERENCES "form"("id") ON DELETE SET NULL ON UPDATE CASCADE;
