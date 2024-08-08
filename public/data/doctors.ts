// data/doctors.ts
export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  imageUrl: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    specialty: "Pediatrics",
    imageUrl: "/imgs/docter.jfif",
  },
  {
    id: 2,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    imageUrl: "/imgs/docter.jfif",
  },
  {
    id: 3,
    name: "Dr. Emily Davis",
    specialty: "Dermatology",
    imageUrl: "/imgs/docter.jfif",
  },
];
