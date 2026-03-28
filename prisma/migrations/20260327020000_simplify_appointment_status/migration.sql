ALTER TYPE "AppointmentStatus" RENAME TO "AppointmentStatus_old";

CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'APPROVED', 'CANCELLED');

ALTER TABLE "Appointment"
ALTER COLUMN "status" DROP DEFAULT;

ALTER TABLE "Appointment"
ALTER COLUMN "status" TYPE "AppointmentStatus"
USING (
  CASE
    WHEN "status"::text = 'APPROVED' THEN 'APPROVED'::"AppointmentStatus"
    WHEN "status"::text = 'REJECTED' THEN 'CANCELLED'::"AppointmentStatus"
    ELSE 'PENDING'::"AppointmentStatus"
  END
);

ALTER TABLE "Appointment"
ALTER COLUMN "status" SET DEFAULT 'PENDING';

DROP TYPE "AppointmentStatus_old";
