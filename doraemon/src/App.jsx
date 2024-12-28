import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; // Mengimpor BrowserRouter, Route, Routes, dan Navigate dari react-router-dom untuk routing dan redirect
import AOS from "aos"; // Mengimpor AOS untuk animasi scroll
import "aos/dist/aos.css"; // Mengimpor file CSS untuk AOS
import Navbar from "./components/Navbar"; // Mengimpor komponen Navbar
import Hero from "./components/Hero/Hero"; // Mengimpor komponen Hero (halaman utama)
import Login from "./components/Login/Login"; // Mengimpor komponen Login
import Dasboard from "./components/Dasboard/Dasboard"; // Mengimpor komponen Dasboard
import Register from "./components/Register/Register"; // Mengimpor komponen Register
import TambahMenu from "./components/TambahMenu/TambahMenu"; // Mengimpor komponen TambahMenu
import EditMinuman from "./components/Dasboard/EditMinuman/EditMinuman"; // Mengimpor komponen EditMinuman

// Komponen PrivateRoute untuk memeriksa status login pengguna
const PrivateRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem("authToken"); // Mengecek apakah ada token 'authToken' di localStorage
  
  if (!isAuthenticated) {
    // Jika tidak ada token (belum login), arahkan pengguna ke halaman login
    return <Navigate to="/login" />;
  }
  
  // Jika pengguna sudah login (ada token), tampilkan komponen yang diminta
  return element;
};

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 600, // Durasi animasi AOS
      easing: "ease-in-sine", // Transisi animasi yang lebih halus
      offset: 100, // Jarak sebelum animasi dimulai setelah scroll
    });
  }, []); // Hanya dipanggil sekali saat komponen pertama kali dirender

  return (
    <Router>
      <div className="overflow-hidden">
        {/* Navbar bisa dimunculkan dengan menghapus komentar */}
        {/* <Navbar /> */}

        {/* Routing untuk mengatur halaman-halaman */}
        <Routes>
          <Route path="/" element={<Hero />} /> {/* Halaman utama yang menampilkan komponen Hero */}
          <Route path="/login" element={<Login />} /> {/* Halaman login yang menampilkan komponen Login */}
          <Route path="/register" element={<Register />} /> {/* Halaman registrasi yang menampilkan komponen Register */}
          
          {/* Rute-rute yang membutuhkan login */}
          <Route
            path="/dasboard"
            element={<PrivateRoute element={<Dasboard />} />} // Hanya bisa diakses jika sudah login
          /> {/* Halaman dasboard yang hanya dapat diakses jika sudah login */}
          <Route
            path="/tambahmenu"
            element={<PrivateRoute element={<TambahMenu />} />} // Hanya bisa diakses jika sudah login
          /> {/* Halaman untuk menambah menu yang hanya dapat diakses jika sudah login */}
          <Route
            path="/editminuman/:id"
            element={<PrivateRoute element={<EditMinuman />} />} // Hanya bisa diakses jika sudah login
          /> {/* Halaman untuk mengedit minuman yang hanya dapat diakses jika sudah login */}
        </Routes>
      </div>
    </Router>
  );
};

export default App; // Mengekspor komponen App untuk digunakan di tempat lain
