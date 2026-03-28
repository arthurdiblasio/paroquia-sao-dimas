-- AlterTable
ALTER TABLE "Church"
ADD COLUMN "isMainChurch" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "Church_single_main_church_idx"
ON "Church" ("isMainChurch")
WHERE "isMainChurch" = true;
