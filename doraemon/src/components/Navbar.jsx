import React from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2

const CafeMenuLinks = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Login",
        link: "/Login",
    },
    {
        name: "Logout",  // Added Logout link
        link: "/Login", // The route for logout action (you might want to handle this differently)
    },
];

const handleLogout = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You will be logged out!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
    }).then((result) => {
        if (result.isConfirmed) {
            // Logic for logging out (e.g., clearing auth token, redirecting, etc.)
            // Here we simply redirect to the login page for the sake of this example
            window.location.href = "/Login"; // You can replace this with your logout functionality
        }
    });
};

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
                        link.name === 'Logout' ? (
                            <button
                                key={link.name}
                                onClick={handleLogout} // Call the logout handler
                                className="px-4 py-2 bg-[#0288D1] text-white rounded-md shadow-md hover:bg-[#0288D1] hover:text-[#FFEB3B] font-medium transition duration-300"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <a
                                key={link.name}
                                href={link.link}
                                className="px-4 py-2 bg-[#0288D1] text-white rounded-md shadow-md hover:bg-[#0288D1] hover:text-[#FFEB3B] font-medium transition duration-300"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
