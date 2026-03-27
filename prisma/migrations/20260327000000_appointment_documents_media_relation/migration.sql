ALTER TABLE "AppointmentDocument"
DROP COLUMN "fileUrl",
ADD COLUMN "mediaId" TEXT NOT NULL;

ALTER TABLE "AppointmentDocument"
ADD CONSTRAINT "AppointmentDocument_mediaId_fkey"
FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
