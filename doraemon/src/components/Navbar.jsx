import React from 'react';
import { useLocation } from 'react-router-dom'; // Mengimpor useLocation dari react-router-dom untuk mengambil lokasi halaman saat ini
import Swal from 'sweetalert2'; // Mengimpor SweetAlert2 untuk menampilkan pop-up

// Daftar menu navigasi kafe
const CafeMenuLinks = [
    {
        name: "Home", // Nama link menu Home
        link: "/", // Link untuk menu Home
    },
    {
        name: "Login", // Nama link menu Login
        link: "/Login", // Link untuk menu Login
    },
    {
        name: "Logout",  // Nama link menu Logout
        link: "/Login", // Link untuk menu Logout (ini sebaiknya diarahkan ke rute logout, yang akan dibahas lebih lanjut)
    },
];

// Fungsi untuk menangani logout
const handleLogout = () => {
    // Menampilkan pop-up konfirmasi logout
    Swal.fire({
        title: 'Apakah Anda yakin?', // Judul konfirmasi
        text: "Anda akan keluar!", // Pesan konfirmasi
        icon: 'warning', // Ikon peringatan
        showCancelButton: true, // Menampilkan tombol batal
        confirmButtonText: 'Ya, keluar!', // Teks tombol konfirmasi
        cancelButtonText: 'Tidak, batal!', // Teks tombol batal
        reverseButtons: true, // Membalik posisi tombol
    }).then((result) => {
        if (result.isConfirmed) { // Jika pengguna mengkonfirmasi logout
            // Hapus semua data dari localStorage (seperti data login pengguna)
            localStorage.clear();

            // Arahkan pengguna ke halaman login setelah logout
            window.location.href = "/Login"; // Redirect ke halaman login
        }
    });
};

// Komponen Navbar untuk menampilkan menu navigasi
const Navbar = () => {
    const location = useLocation(); // Menggunakan hook useLocation untuk mendapatkan path saat ini

    return (
        <div className="py-4 bg-green-200 shadow-md"> {/* Bagian navbar dengan latar belakang hijau muda dan bayangan */} 
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-6"> {/* Nama kafe di kiri */} 
                    <div className="text-3xl font-bold text-gray-800">
                        <span>KAFE BAHAGIA</span> {/* Nama Kafe */}
                    </div>
                </div>

                <div className="ml-auto flex gap-6"> {/* Menu navigasi di sebelah kanan */}
                    {CafeMenuLinks.map((link) => (
                        // Menampilkan link berdasarkan kondisi lokasi saat ini
                        (link.name === 'Logout' && location.pathname !== '/') || 
                        (link.name === 'Login' && location.pathname !== '/dasboard') ? (
                            // Jika link adalah Logout, tampilkan tombol logout
                            link.name === 'Logout' ? (
                                <button
                                    key={link.name}
                                    onClick={handleLogout} // Panggil fungsi handleLogout saat tombol ditekan
                                    className="px-4 py-2 bg-[#0288D1] text-white rounded-md shadow-md hover:bg-[#0288D1] hover:text-[#FFEB3B] font-medium transition duration-300"
                                >
                                    {link.name} {/* Tampilkan teks tombol */}
                                </button>
                            ) : (
                                // Jika link adalah Login, tampilkan tautan login
                                <a
                                    key={link.name}
                                    href={link.link}
                                    className="px-4 py-2 bg-[#0288D1] text-white rounded-md shadow-md hover:bg-[#0288D1] hover:text-[#FFEB3B] font-medium transition duration-300"
                                >
                                    {link.name} {/* Tampilkan teks tautan */}
                                </a>
                            )
                        ) : null // Jika tidak memenuhi kondisi, tidak tampilkan apa-apa
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar; // Mengekspor komponen Navbar
