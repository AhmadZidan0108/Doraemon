import React from 'react';

const CafeMenuLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Login",
        link: "/Login",
    },
];

const Navbar = () => {
    return (
        <div className="py-4 bg-green-200 shadow-md"> {/* Updated navbar background color to light green */}
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-6"> {/* Title on the left */}
                    <div className="text-3xl font-bold text-gray-800">
                        <span>KAFE BAHAGIA</span>
                    </div>
                </div>

                <div className="ml-auto flex gap-6"> {/* Links aligned to the right */}
                    {CafeMenuLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.link} 
                            className="px-4 py-2 bg-[#0288D1] text-white rounded-md shadow-md hover:bg-[#0288D1] hover:text-[#FFEB3B] font-medium transition duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
