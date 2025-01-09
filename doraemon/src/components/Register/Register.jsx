import axios from "axios"; // Mengimpor axios untuk melakukan request HTTP
import React, { useState } from "react"; // Mengimpor React dan useState untuk mengelola state
import Swal from "sweetalert2"; // Mengimpor SweetAlert2 untuk menampilkan notifikasi pop-up
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate untuk navigasi programatik
import { API_REGISTER } from "../../utils/BaseUrl";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "", // Nama lengkap pengguna
    email: "", // Email pengguna
    password: "", // Password pengguna
    confirmPassword: "", // Konfirmasi password untuk memastikan kesesuaian
  });

  const navigate = useNavigate(); // Inisialisasi hook useNavigate untuk navigasi programatik

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Memperbarui state formData berdasarkan nama dan nilai input
    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menangani pengiriman form (registrasi)
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah refresh halaman saat form disubmit

    // Memeriksa apakah password dan konfirmasi password cocok
    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: "Password Tidak Cocok", // Judul notifikasi
        text: "Password dan konfirmasi password tidak cocok.", // Pesan notifikasi
        icon: "error", // Tipe ikon error
        confirmButtonText: "OK", // Teks tombol konfirmasi
      });
      return; // Menghentikan eksekusi jika password tidak cocok
    }

    try {
      // Mengirimkan request POST ke API untuk mendaftar pengguna baru
      const response = await axios.post(`${API_REGISTER}/register`, {
        email: formData.email,
        password: formData.password,
        username: formData.name, // 'username' digunakan di server untuk nama pengguna
        role: "ADMIN", // Peran pengguna yang didaftarkan, bisa diubah sesuai kebutuhan
      });

      // Memeriksa status respons dari server
      if (response.status === 201) {
        Swal.fire({
          title: "Pendaftaran Berhasil!", // Judul notifikasi sukses
          text: "Akun Anda telah berhasil didaftarkan.", // Pesan sukses
          icon: "success", // Tipe ikon sukses
          confirmButtonText: "OK", // Teks tombol konfirmasi
        });

        // Reset form setelah pendaftaran berhasil
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        // Redirect ke halaman login setelah pendaftaran berhasil
        navigate("/login"); // Navigasi ke halaman login
      }
    } catch (error) {
      // Menangani error jika API request gagal
      Swal.fire({
        title: "Pendaftaran Gagal", // Judul notifikasi error
        text: error.response?.data?.message || "Terjadi kesalahan, silakan coba lagi.", // Pesan error
        icon: "error", // Tipe ikon error
        confirmButtonText: "OK", // Teks tombol konfirmasi
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-green-200 via-green-300 to-green-400">
      {/* Div utama untuk membungkus form registrasi dengan background gradient. */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register</h2>
        {/* Judul form registrasi */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Form input untuk nama lengkap */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukkan nama lengkap Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.name}
              onChange={handleChange}
              required // Input ini wajib diisi
            />
          </div>
          {/* Form input untuk email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukkan email Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.email}
              onChange={handleChange}
              required // Input ini wajib diisi
            />
          </div>
          {/* Form input untuk password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukkan password Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.password}
              onChange={handleChange}
              required // Input ini wajib diisi
            />
          </div>
          {/* Form input untuk konfirmasi password */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirmPassword"
              placeholder="Masukkan kembali password Anda"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={formData.confirmPassword}
              onChange={handleChange}
              required // Input ini wajib diisi
            />
          </div>
          {/* Tombol submit untuk mengirim form registrasi */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-400 transition duration-300"
          >
            Register
          </button>
        </form>
        {/* Tautan untuk navigasi ke halaman login */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-700">
            Sudah punya akun?{" "}
            <a href="/login" className="text-green-500 hover:underline">
              Login di sini
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register; // Mengekspor komponen Register untuk digunakan di bagian lain aplikasi
