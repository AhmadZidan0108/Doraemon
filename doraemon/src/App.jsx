import React from "react"; // Mengimpor React
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Untuk routing
import AOS from "aos"; // Untuk animasi scroll
import "aos/dist/aos.css"; // File CSS untuk AOS
import Navbar from "../src/components/Navbar"; // Komponen Navbar
import Hero from "../src/components/Hero/Hero"; // Komponen Hero
import Login from "./components/Login/Login"; // Komponen Login
import Dasboard from "./components/Dasboard/Dasboard"; // Komponen Dasboard
import Register from "./components/Register/Register"; // Komponen Register
import TambahMenu from "./components/TambahMenu/TambahMenu"; // Komponen TambahMenu

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600, // Durasi animasi AOS
      easing: "ease-in-sine", // Transisi lebih halus
      offset: 100, // Jarak sebelum animasi dimulai setelah scroll
    });
  }, []);

  return (
    <Router>
      <div className="overflow-hidden">
        {/* Navbar */}
        <Navbar />
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Halaman utama */}
          <Route path="/login" element={<Login />} /> {/* Halaman login */}
          <Route path="/dashboard" element={<Dasboard />} /> {/* Halaman dashboard */}
          <Route path="/register" element={<Register />} /> {/* Halaman register */}
          <Route path="/tambahmenu" element={<TambahMenu />} /> {/* Halaman tambahmenu */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Mengekspor komponen App
