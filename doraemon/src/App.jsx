import React from "react"; // Mengimpor React untuk digunakan dalam komponen
import AOS from "aos"; // Mengimpor AOS (Animate On Scroll) untuk animasi scroll
import "aos/dist/aos.css"; // Mengimpor file CSS AOS agar animasi dapat diterapkan
import Navbar from "../src/components/Navbar"; // Mengimpor komponen Navbar dari folder yang sesuai
import Hero from "../src/components/Hero/Hero"; // Mengimpor komponen Hero dari folder yang sesuai

const App = () => {
  // Menggunakan useEffect untuk menginisialisasi AOS saat komponen pertama kali dimuat
  React.useEffect(() => {
    AOS.init({
      duration: 600, // Durasi animasi AOS (dalam milidetik)
      easing: "ease-in-sine", // Jenis easing untuk animasi (transisi lebih halus)
      offset: 100, // Menentukan jarak sebelum animasi dimulai setelah scroll
    });
  }, []); // Array kosong berarti efek hanya dijalankan sekali saat komponen pertama kali dimuat

  return (
    <div className="overflow-hidden">
      {/* Menampilkan komponen Navbar */}
      <Navbar />
      {/* Menampilkan komponen Hero */}
      <Hero />
    </div>
  );
};

export default App; // Mengekspor komponen App untuk digunakan di file lain
