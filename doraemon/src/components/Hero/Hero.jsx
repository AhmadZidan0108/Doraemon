import React, { useState } from "react"; // Mengimpor React dan useState untuk pengelolaan state
import Navbar from "../Navbar"; // Mengimpor komponen Navbar untuk menampilkan menu navigasi
import '../Hero/Hero.css' // Mengimpor file CSS untuk styling bagian Hero

const CafeMenu = () => {
    // Daftar menu yang tersedia di kafe
    const menuItems = [
        {
            id: 1,
            name: "Americano", // Nama menu
            price: "Rp 150.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmGt_YOOX9N1txTmnCx0EXdUXsXMHizCxVg&s", // Link gambar menu
            description: "Kopi hitam dengan rasa kuat dan sedikit asam." // Deskripsi menu
        },
        {
            id: 2,
            name: "Cappuccino", // Nama menu
            price: "Rp 200.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEChizHitgTxWaYoFHK12CEu0qykD5E5XKg&s", // Link gambar menu
            description: "Kombinasi espresso dengan susu panas dan busa susu lembut." // Deskripsi menu
        },
        {
            id: 3,
            name: "Espresso", // Nama menu
            price: "Rp 100.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYC2V-b7CVyYV1rfZEEM4TDcZsLiHumTyBA&s", // Link gambar menu
            description: "Cekatan dan penuh cita rasa, espresso murni untuk pecinta kopi." // Deskripsi menu
        },
        {
            id: 4,
            name: "Macchiato", // Nama menu
            price: "Rp 180.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RTRkuLlzNbigpWMONmtM00Uh2wARywcONQ&s", // Link gambar menu
            description: "Espresso dengan sedikit busa susu di atasnya." // Deskripsi menu
        },
        {
            id: 5,
            name: "Mocha", // Nama menu
            price: "Rp 130.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmc-mLD8xZG-NbqkmBvdYVTVocIuMKOQViQ&s", // Link gambar menu
            description: "Kopi espresso dicampur dengan cokelat dan susu panas." // Deskripsi menu
        },
        {
            id: 6,
            name: "Latte", // Nama menu
            price: "Rp 200.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-gR3kqufvsFV8VS4cSwnfB2prR_8gw_01A&s", // Link gambar menu
            description: "Kombinasi espresso dengan banyak susu panas dan sedikit busa." // Deskripsi menu
        },
        {
            id: 7,
            name: "Flat White", // Nama menu
            price: "Rp 190.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZfgcw0BLJnlwl9TbqzKPVaH5vHcZklOsrg&s", // Link gambar menu
            description: "Espresso dengan susu panas yang lebih sedikit busa dibanding latte." // Deskripsi menu
        },
        {
            id: 8,
            name: "Cold Brew", // Nama menu
            price: "Rp 100.000", // Harga menu
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFnY0n_KHhCz3ad-CUDNCLLMc80xRRAcR2g&s", // Link gambar menu
            description: "Kopi dingin yang diseduh dengan air dingin selama 12 jam." // Deskripsi menu
        },
    ];

    // State untuk menyimpan data ulasan pelanggan
    const [reviews, setReviews] = useState([
        { id: 1, reviewer: '-Ali', review: 'Kopi yang luar biasa! Rasanya sangat nikmat dan segar.' },
        { id: 2, reviewer: '-Dina', review: 'Saya sangat suka Cappuccino, creamy dan lezat.' },
        { id: 3, reviewer: '-Nana', review: 'Espresso-nya benar-benar kuat dan memberikan energi ekstra!' }
    ]);

    return (
        <div>
            <Navbar /> {/* Menampilkan komponen Navbar di bagian atas halaman */}
            <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-400 py-10">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        {/* Judul dan deskripsi selamat datang di kafe */}
                        <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-lg mb-4">
                            SELAMAT DATANG DI KAFE KAMI
                        </h1>
                        <p className="text-xl text-gray-700 opacity-80 max-w-3xl mx-auto">
                            Nikmati pengalaman ngopi terbaik yang dibuat dengan penuh cinta dan dedikasi.
                            Dari espresso klasik hingga variasi kreatif seperti cold brew, setiap cangkir dibuat
                            dari biji kopi pilihan dan disajikan di suasana yang nyaman. Temukan kopi favorit Anda di sini!
                        </p>
                    </div>

                    <h2 className="text-5xl font-semibold text-center text-gray-800 mb-12">MENU KAFE KAMI</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* Mengiterasi setiap item dalam menuItems dan menampilkan informasi menu */}
                        {menuItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-lg shadow-xl overflow-hidden">
                                <div className="w-full h-48">
                                    {/* Gambar menu */}
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover rounded-t-lg"
                                    />
                                </div>
                                <div className="p-6 bg-gradient-to-r from-teal-50 via-indigo-50 to-blue-50">
                                    <h2 className="text-2xl font-semibold text-gray-800 text-left">{item.name}</h2> {/* Nama menu */}
                                    <p className="text-lg font-semibold text-gray-600">{item.price}</p> {/* Harga menu */}
                                    <p className="text-sm text-gray-500 mt-2">{item.description}</p> {/* Deskripsi menu */}
                                    <button className="w-full bg-teal-500 text-white py-3 rounded-b-lg mt-4 hover:bg-teal-400 transition duration-300">
                                        Pesan Sekarang {/* Tombol untuk melakukan pemesanan */}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Bagian Ulasan Pelanggan */}
                <section className="reviews">
                    <div className="reviews-header">
                    <h2 className="reviews-title">ULASAN PEMBELI</h2> {/* Judul untuk ulasan pelanggan */}
                    </div>
                    <div className="reviews-list">
                    {reviews.map(review => (
                        <div key={review.id} className="review-card">
                        <h3>{review.reviewer}</h3> {/* Nama pemberi ulasan */}
                        <p>{review.review}</p> {/* Isi ulasan */}
                        </div>
                    ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CafeMenu; // Mengekspor komponen CafeMenu untuk digunakan di bagian lain aplikasi
