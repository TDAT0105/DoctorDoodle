import Navbar from "@/components/Navbar";
import DoctorDetail from "@/pages/detailDocter";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <div className="home-container">
        </div>
          {/* <h1 className="text-center text-2xl font-bold my-4">Welcome to Our Medical Center</h1> */}
          <DoctorDetail
            name="Dr. John Doe"
            specialization="Cardiologist"
            experience={10}
            description="Dr. John Doe is a highly experienced cardiologist with a decade of practice in treating cardiovascular diseases."
          />
        </div>
      </div>
  )
}
