import React from "react";

const CafeMenu = () => {
    const menuItems = [
        { 
            id: 1, 
            name: "Americano", 
            price: "Rp 150.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmGt_YOOX9N1txTmnCx0EXdUXsXMHizCxVg&s",
            description: "Kopi hitam dengan rasa kuat dan sedikit asam."
        },
        { 
            id: 2, 
            name: "Cappuccino", 
            price: "Rp 200.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZEChizHitgTxWaYoFHK12CEu0qykD5E5XKg&s",
            description: "Kombinasi espresso dengan susu panas dan busa susu lembut."
        },
        { 
            id: 3, 
            name: "Espresso", 
            price: "Rp 100.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYC2V-b7CVyYV1rfZEEM4TDcZsLiHumTyBA&s",
            description: "Cekatan dan penuh cita rasa, espresso murni untuk pecinta kopi."
        },
        { 
            id: 4, 
            name: "Macchiato", 
            price: "Rp 180.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4RTRkuLlzNbigpWMONmtM00Uh2wARywcONQ&s",
            description: "Espresso dengan sedikit busa susu di atasnya."
        },
        { 
            id: 5, 
            name: "Mocha", 
            price: "Rp 130.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzmc-mLD8xZG-NbqkmBvdYVTVocIuMKOQViQ&s",
            description: "Kopi espresso dicampur dengan cokelat dan susu panas."
        },
        { 
            id: 6, 
            name: "Latte", 
            price: "Rp 200.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-gR3kqufvsFV8VS4cSwnfB2prR_8gw_01A&s",
            description: "Kombinasi espresso dengan banyak susu panas dan sedikit busa."
        },
        { 
            id: 7, 
            name: "Flat White", 
            price: "Rp 190.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZfgcw0BLJnlwl9TbqzKPVaH5vHcZklOsrg&s",
            description: "Espresso dengan susu panas yang lebih sedikit busa dibanding latte."
        },
        { 
            id: 8, 
            name: "Cold Brew", 
            price: "Rp 100.000", 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFnY0n_KHhCz3ad-CUDNCLLMc80xRRAcR2g&s",
            description: "Kopi dingin yang diseduh dengan air dingin selama 12 jam."
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-200 to-green-400 py-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
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
                    {menuItems.map((item) => (
                        <div 
                            key={item.id} 
                            className="bg-white rounded-lg shadow-xl overflow-hidden">
                            <div className="w-full h-48">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>
                            <div className="p-6 bg-gradient-to-r from-teal-50 via-indigo-50 to-blue-50">
                                <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
                                <p className="text-lg font-semibold text-gray-600">{item.price}</p>
                                <p className="text-sm text-gray-500 mt-2">{item.description}</p> {/* Menambahkan deskripsi */}
                                <button className="w-full bg-teal-500 text-white py-3 rounded-b-lg mt-4 hover:bg-teal-400 transition duration-300">
                                    Pesan Sekarang
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CafeMenu;
