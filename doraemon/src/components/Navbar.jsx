import React from 'react';
import { GiAtomicSlashes } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import logo from "../assets/ft logosmk.jpg";

// Daftar menu links yang akan ditampilkan di navbar
const MenuLinks = [
    {
        name: "Episodes", // Nama menu
        link: "#/", // Link untuk menu Episodes
    },
    {
        name: "Store", // Nama menu
        link: "#/store", // Link untuk menu Store
    },
    {
        name: "Toys", // Nama menu
        link: "#/toys", // Link untuk menu Toys
    },
    {
        name: "3D videos", // Nama menu
        link: "#/videos", // Link untuk menu 3D videos
    },
];

const Navbar = () => {
    return (
        <div data-aos="fade-down" className="py-4 bg-lightblue"> {/* Menambahkan kelas bg-lightblue untuk latar belakang biru muda */}
            <div className="container"> {/* Container untuk menjaga tata letak */}
                <div className="flex items-center justify-between"> {/* Flexbox untuk tata letak horizontal */}
                    
                    {/* Bagian logo */}
                    <div className="flex items-center gap-4">
                        {/* Gambar logo dengan ukuran diperbesar menggunakan class w-24 */}
                        <img src={logo} alt="Logo" className="w-24" /> {/* Ukuran logo diperbesar */}
                     
                        {/* Nama brand (Dora Emon) */}
                        <div className="flex flex-col text-xl font-bold text-gray-600 leading-5">
                            <span>SMK</span> {/* Nama pertama */}
                            <span>BINA NUSANTARA</span> {/* Nama kedua */}
                        </div>
                    </div>
    
                    {/* Bagian menu links */}
                    <div className="hidden md:block"> {/* Menu ini hanya ditampilkan di layar dengan ukuran medium ke atas */}
                        <ul className="center"> {/* Menampilkan list menu secara horizontal */}
                            {MenuLinks.map((link) => {  // Iterasi melalui daftar MenuLinks
                                return (
                                    <li key={link.name} className="mr-4"> {/* Menambahkan margin kanan antara menu */}
                                        <a href={link.link} className="navlink">{link.name}</a> {/* Menampilkan nama menu dengan link */}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
    
                    {/* Bagian search dan dropdown */}
                    <div className="flex items-center gap-6">
                        {/* Input pencarian, hanya ditampilkan di layar dengan ukuran small ke atas */}
                        <input type="text" placeholder="Search" 
                               className="hidden sm:block py-2 px-3 
                               rounded-full bg-slate-200"/>
                        
                        {/* Ikon search, dengan latar belakang utama dan perubahan warna saat hover */}
                        <div className="bg-primary hover:bg-primary/80 
                               p-3 rounded-full cursor-pointer">
                            <FaSearch className="text-white text-sm"/> {/* Ikon search dengan ukuran kecil */}
                        </div>
                        
                        {/* Dropdown untuk memilih bahasa */}
                        <div className="flex items-navlink cursor-pointer">
                            Eng {/* Teks untuk bahasa */}
                            <span>
                                <MdArrowDropDown className="text-xl text-primary" /> {/* Ikon dropdown */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
