ALTER TABLE "Appointment"
ADD COLUMN "details" JSONB;

ALTER TABLE "AppointmentDocument"
ADD COLUMN "documentKey" TEXT,
ADD COLUMN "documentLabel" TEXT;
