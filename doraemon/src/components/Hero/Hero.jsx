import React from "react";
import { FaYoutube, FaStar } from "react-icons/fa";
import DoraImgJpg from "../../assets/doraeimg.jpg";  // Impor gambar JPG Doraemon
import DoraImgWebp from "../../assets/doraimg.webp";  // Impor gambar WebP Doraemon

const Hero = () => {
    // State untuk memantau status play (apakah video sedang diputar atau tidak)
    const [isPlay, setIsPlay] = React.useState(false);

    // Fungsi untuk mengubah status play (toggle)
    const handlePlay = () => {
        setIsPlay(!isPlay);
    }

    return (
        <div className="min-h-[700px] center flex-col relative">
            <div className="container mt-12 sm:mt-0 pb-20 sm:gap-0 relative z-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0">
                    {/* Bagian konten teks */}
                    <div className="space-y-3 md:space-y-7 flex flex-col justify-center text-center sm:text-left px-10 sm:px-0">
                        <div data-aos="fade-up">
                            <h1 className="text-4xl md:text-6xl font-bold">Watch Now in</h1>
                            <h1 className="text-6xl font-bold text-primary">3D</h1>
                        </div>
                        <p className="text-gray-500 text-sm font-semibold">
                            The first full story in the Doraemon 
                            series was published in 
                            January 1970
                        </p>
                        <div className="mx-auto sm:mx-0">
                            {/* Tombol untuk play video */}
                            <button 
                            onClick={handlePlay}
                            className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md transform transition duration-200 ease-in-out hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                Play on
                                <FaYoutube className="text-2xl" />
                            </button>
                        </div>
                    </div>

                    {/* Bagian konten gambar */}
                    <div className="relative">
                      <img src={DoraImgJpg} alt="Doraemon" className="w-[180px] sm:w-[240px] mx-auto relative z-30" />
                    </div>

                    {/* Bagian konten review */}
                    <div className="sm:pl-16 md:pl-24 flex justify-center sm:justify-end">
                        <div className="flex items-center justify-end">
                            <div className="space-y-3">
                               <img src={DoraImgWebp} alt="" className="w-full 
                               h-[100px] object-cover 
                               rounded-xl shadow-md hover:scale-110 
                               duration-200 cursor-pointer " />
                               <p className="text-sm flex items-center gap-2">
                               4.7{" "}
                                   <span>
                                       <FaStar className="text-primary" />
                                   </span>
                             </p>
                            <p className="text-sm text-grapy-400">Bandai Figurtszero Doraemont</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            {/* Bagian baru yang ditambahkan di bagian bawah */}
            <div className="absolute bottom-0 left-0 w-full">
                <div className="grid sm:grid-cols-3 container">
                    {/* Kolom pertama */}
                    <div className="sm:block">
                        <div className="font-semibold">
                            <p className="text-gray-500">by : zidan_0108</p>
                            <p className="text-sm text-primary">Indonesia</p>
                        </div>
                        <div className="font-semibold">
                            <p className="text-gray-500">30Nov, 2024</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hero;
