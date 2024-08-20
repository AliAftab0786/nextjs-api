// app/api/patients/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { Patient } from '../types';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const patientData: Patient = await req.json();

  try {
    const patient = await prisma.patient.create({
      data: {
        email: patientData.email,
        phone: patientData.phone,
        name: patientData.name,
        birthDate: new Date(patientData.birthDate),
        gender: patientData.gender,
        address: patientData.address,
        occupation: patientData.occupation,
        emergencyContactNumber: patientData.emergencyContactNumber,
        currentMedication: patientData.currentMedication,
        pastMedicalHistory: patientData.pastMedicalHistory,
        allergies: patientData.allergies,
        image: patientData.image,
        treatmentPlace: patientData.treatmentPlace,
      },
    });
    return NextResponse.json(patient, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create patient' }, { status: 500 });
  }
}
