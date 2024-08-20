export interface Patient {
    email: string;
    phone: string;
    name: string;
    birthDate: string; // ISO 8601 string
    gender: string;
    address: string;
    occupation: string;
    emergencyContactNumber?: string;
    currentMedication?: string;
    pastMedicalHistory?: string;
    allergies?: string;
    image?: string;
    treatmentPlace?: string;
  }