import DoctorList from '@/components/DoctorList';
import React from 'react';

interface DoctorDetailProps {
  name: string;
  specialization: string;
  experience: number;
  description: string;
}
const DoctorDetail: React.FC<DoctorDetailProps> = ({ name, specialization, experience, description }) => {
  return (
  <div className="w-full container mx-auto font-sans ">
    <div className="md:flex flex justify-center">
      <div className="md:flex-shrink-0">
        <img className="h-80 w-full object-cover md:w-48" src="/imgs/docter.jfif" alt="Doctor Image" />
        <button className="w-full bg-white text-indigo-500 border border-indigo-500 font-bold py-2 px-4 rounded-full mt-2 hover:bg-indigo-500 hover:text-white transition duration-300">
          Đặt lịch ngay
        </button>
      </div>

        <div className="ml-3 p-8">
            <h1 className="block mt-1 text-4xl leading-tight font-light">{name}</h1>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold ml-1">
            {specialization}
            </div>
            <div className="w-full container mx-auto font-sans mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-x">
                <div className="p-4">
                    <h2 className="text-xl font-normal">QUALIFICATION</h2>
                </div>
                <div className="p-4 text-neutral-500">
                    <p>M.D Facts, MS - Obstetrics and Gynaecoly.</p>
                </div>
            </div>

            <div className="w-full container mx-auto font-sans mt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-x">
                    <div className="p-4">
                    <h2 className="text-xl font-normal">CERTIFICATION</h2>
                    </div>
                    <div className="p-4">
                    <ul className="list-disc list-inside text-neutral-500">
                        <li>National Specialist Register in Pregnancy</li>
                        <li>Gynecology Department of Science Major</li>
                    </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-x mt-4">
                    <div className="p-4">
                    <h2 className="text-xl font-normal">AWARDS</h2>
                    </div>
                    <div className="p-4">
                    <ul className="list-disc list-inside text-neutral-500">
                        <li>Pregnancy Care of Women 2016</li>
                        <li>Best Doctor for Women</li>
                        <li>Prescription of Medicine</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>

    <DoctorList />
  </div>
);


};

export default DoctorDetail;
