-- CreateEnum
CREATE TYPE "bank_account_types" AS ENUM ('CHECKING', 'INVESTIMENT', 'CASH');

-- CreateTable
CREATE TABLE "bank_accounts" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "intial_balance" DOUBLE PRECISION NOT NULL,
    "type" "bank_account_types" NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);
