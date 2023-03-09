-- CreateTable
CREATE TABLE "company" (
    "cnpj" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "segment" TEXT NOT NULL,
    "number" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "company_cnpj_key" ON "company"("cnpj");
