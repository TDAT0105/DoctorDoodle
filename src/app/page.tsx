import Navbar from "@/components/NavBar";
import bg from '../assets/images/japan-cupyb43e8vl4w2n7.jpg';

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div
        className="bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
          height: "500px", // Chiều cao bằng toàn bộ viewport height
          width: "100%", // Chiếm toàn bộ chiều rộng của màn hình
          backgroundSize: "cover", // Đảm bảo hình nền phủ toàn bộ không gian
          backgroundPosition: "center center" // Canh giữa hình nền
        }}
      >
      </div>
      <div className="pt-16 pl-16">
        <h1 className="text-2xl">Top Rated Doctors Near You</h1>
      </div>


    </>
  );
}
