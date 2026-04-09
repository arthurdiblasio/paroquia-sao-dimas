CREATE TYPE "FinancialReportStatus" AS ENUM ('STARTED', 'IN_PROGRESS', 'FINISHED');

ALTER TABLE "FinancialReport"
ADD COLUMN "status" "FinancialReportStatus" NOT NULL DEFAULT 'STARTED';

UPDATE "FinancialReport"
SET "status" = CASE
  WHEN "progressPercentage" >= 100 THEN 'FINISHED'::"FinancialReportStatus"
  WHEN "progressPercentage" > 0 THEN 'IN_PROGRESS'::"FinancialReportStatus"
  ELSE 'STARTED'::"FinancialReportStatus"
END;

ALTER TABLE "FinancialReport"
ALTER COLUMN "progressPercentage" SET DEFAULT 0;

ALTER TABLE "FinancialReport"
DROP COLUMN "totalCost",
DROP COLUMN "amountRaised",
DROP COLUMN "amountRemaining";

CREATE TABLE "FinancialReportPhase" (
    "id" TEXT NOT NULL,
    "reportId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "phaseOrder" INTEGER NOT NULL,
    "doneDetails" TEXT,
    "nextDetails" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FinancialReportPhase_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "FinancialReportPhaseMedia" (
    "phaseId" TEXT NOT NULL,
    "mediaId" TEXT NOT NULL,

    CONSTRAINT "FinancialReportPhaseMedia_pkey" PRIMARY KEY ("phaseId","mediaId")
);

CREATE UNIQUE INDEX "FinancialReportPhase_reportId_phaseOrder_key" ON "FinancialReportPhase"("reportId", "phaseOrder");

ALTER TABLE "FinancialReportPhase"
ADD CONSTRAINT "FinancialReportPhase_reportId_fkey"
FOREIGN KEY ("reportId") REFERENCES "FinancialReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "FinancialReportPhaseMedia"
ADD CONSTRAINT "FinancialReportPhaseMedia_phaseId_fkey"
FOREIGN KEY ("phaseId") REFERENCES "FinancialReportPhase"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "FinancialReportPhaseMedia"
ADD CONSTRAINT "FinancialReportPhaseMedia_mediaId_fkey"
FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "FinancialReportMedia" DROP CONSTRAINT "FinancialReportMedia_reportId_fkey";
ALTER TABLE "FinancialReportMedia" DROP CONSTRAINT "FinancialReportMedia_mediaId_fkey";

DROP TABLE "FinancialReportMedia";
