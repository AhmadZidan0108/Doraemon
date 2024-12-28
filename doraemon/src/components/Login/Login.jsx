import axios from "axios"; // Mengimpor axios untuk melakukan request HTTP
import React, { useState } from "react"; // Mengimpor React dan useState untuk mengelola state
import Swal from "sweetalert2"; // Mengimpor SweetAlert2 untuk notifikasi
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate untuk navigasi halaman

const Login = () => {
  const [email, setEmail] = useState(""); // State untuk menyimpan email yang dimasukkan
  const [password, setPassword] = useState(""); // State untuk menyimpan password yang dimasukkan
  const [isLoading, setIsLoading] = useState(false); // State untuk mengelola status loading saat proses login
  const navigate = useNavigate(); // Inisialisasi useNavigate untuk navigasi ke halaman lain

  // Fungsi untuk menangani perubahan input pada form
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value); // Menyimpan email yang dimasukkan ke state email
    } else if (name === "password") {
      setPassword(value); // Menyimpan password yang dimasukkan ke state password
    }
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit

    setIsLoading(true); // Set status loading menjadi true saat proses login dimulai

    try {
      // Melakukan request API untuk login
      const response = await axios.post("http://localhost:8080/api/login", {
        email, // Mengirimkan email ke API
        password, // Mengirimkan password ke API
      });

      // Mengecek apakah response mengandung token
      if (response.data.token) {
        Swal.fire({
          title: "Login Berhasil!", // Menampilkan notifikasi sukses jika login berhasil
          text: "Selamat datang kembali!",
          icon: "success",
          confirmButtonText: "OK",
        });

        // Menyimpan token dan data pengguna ke localStorage
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("email", response.data.data.email);
        localStorage.setItem("id", response.data.data.id);

        // Mengarahkan pengguna ke halaman dashboard setelah berhasil login
        navigate("/dasboard"); // Mengarahkan ke halaman /dashboard
      }
    } catch (error) {
      // Menangani error jika login gagal
      Swal.fire({
        title: "Login Gagal", // Menampilkan notifikasi gagal login
        text: "Email atau password salah.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false); // Mengatur status loading menjadi false setelah request selesai
    }

    // Mengosongkan form setelah submit
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-200 via-green-300 to-green-400 px-4">
      {/* Container utama dengan background gradient */}
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:max-w-md w-full">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-4 sm:mb-6">
          Login
        </h2>
        {/* Formulir untuk login */}
        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Input email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email Anda"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={email} // Nilai input terikat dengan state email
              onChange={handleChange} // Menangani perubahan input
              required
            />
          </div>
          {/* Input password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password Anda"
              className="w-full px-3 py-2 sm:px-4 sm:py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              value={password} // Nilai input terikat dengan state password
              onChange={handleChange} // Menangani perubahan input
              required
            />
          </div>
          {/* Tombol login */}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-teal-400 transition duration-300"
            disabled={isLoading} // Menonaktifkan tombol jika sedang dalam status loading
          >
            {isLoading ? "Loading..." : "Login"} {/* Menampilkan teks "Loading..." selama proses login */}
          </button>
        </form>
        {/* Teks tambahan */}
        <div className="mt-3 sm:mt-4 text-center">
          <p className="text-xs sm:text-sm text-gray-700">
            Belum punya akun?{" "}
            <a href="/register" className="text-teal-500 hover:underline">
              Daftar di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; // Mengekspor komponen Login
