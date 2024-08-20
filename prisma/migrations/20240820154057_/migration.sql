-- CreateTable
CREATE TABLE "Patient" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "emergencyContactNumber" TEXT,
    "currentMedication" TEXT,
    "pastMedicalHistory" TEXT,
    "allergies" TEXT,
    "image" TEXT,
    "treatmentPlace" TEXT,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);
