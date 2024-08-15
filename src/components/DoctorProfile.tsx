'use client';
import React from 'react';
import { doctors, Doctor } from '../../public/data/Doctor';

const DoctorList: React.FC = () => {
    // Lọc chỉ 6 bác sĩ đầu tiên từ danh sách
    const visibleDoctors = doctors.slice(0, 6);

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl text-dark-blue font-bold mb-4">
                Top Rated <span className="text-primary-grey">Doctors</span> Near You
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
                {visibleDoctors.map((doctor: Doctor) => (
                    <div key={doctor.id} className="bg-white rounded-lg overflow-hidden border-2 border-gray-200  pb-2 pl-2 pr-2">
                        <div className="relative w-full h-48">
                            <img src={doctor.imageUrl} alt={doctor.name} className="absolute inset-0 w-full h-full object-contain" />
                        </div>
                        <div className="">
                            <h3 className="font-semibold overflow-hidden">{doctor.name}</h3>

                            <h4 className="text-gray-600 overflow-hidden">{doctor.address}</h4>

                            <div className="flex justify-center pt-8">
                                <button className='w-full rounded-md border-2 border-dark-blue py-2 px-4 flex items-center justify-center text-dark-blue 
                   hover:bg-dark-blue hover:text-white transition duration-300'>
                                    Consult Now
                                </button>

                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-8">
                <a href='#' className='text-primary-grey underline underline-offset-2 hover:text-dark-blue transition duration-300'>View all</a>
            </div>
        </div>
    );
};

export default DoctorList;
