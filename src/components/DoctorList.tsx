// components/DoctorList.tsx
import React from 'react';
import { doctors, Doctor } from '../../public/data/doctors';

const DoctorList: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Recommended Doctors</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
        {doctors.map((doctor: Doctor) => (
          <div key={doctor.id} className="bg-white rounded-lg overflow-hidden">
            <div className="relative w-full h-48">
              <img src={doctor.imageUrl} alt={doctor.name} className="absolute inset-0 w-full h-full object-contain" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{doctor.name}</h3>
              <p className="text-gray-600">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
