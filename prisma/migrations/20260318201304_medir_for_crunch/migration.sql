-- CreateTable
CREATE TABLE "CrunchMedia" (
    "crunchId" TEXT NOT NULL,
    "mediaId" TEXT NOT NULL,

    CONSTRAINT "CrunchMedia_pkey" PRIMARY KEY ("crunchId","mediaId")
);

-- AddForeignKey
ALTER TABLE "CrunchMedia" ADD CONSTRAINT "CrunchMedia_crunchId_fkey" FOREIGN KEY ("crunchId") REFERENCES "Church"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CrunchMedia" ADD CONSTRAINT "CrunchMedia_mediaId_fkey" FOREIGN KEY ("mediaId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
