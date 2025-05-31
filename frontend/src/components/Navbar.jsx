// // src/components/Navbar.jsx
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="bg-gray-800 text-white p-4 flex justify-around">
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to="/upload">Upload</Link>
//       <Link to="/qa">Ask</Link>
//     </nav>
//   );
// }


// // src/components/Navbar.jsx
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpeg";

// export default function Navbar() {
//     return (
//         <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
//                     bg-slate-700 py-3 px-6 rounded-full border border-white/20 
//                     max-w-6xl w-[95%] flex justify-between items-center 
//                     text-white shadow-lg">
//             {/* <nav className="bg-slate-700 py-3 px-6 rounded-full border border-white/20 max-w-6xl mx-auto mt-6 flex justify-between items-center text-white shadow-lg"> */}
//             {/* Logo / App Name */}
//             <div className="text-lg font-bold tracking-wide">
//                 <Link to="/" className="flex items-center space-x-2">
//                     <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
//                     {/* <span>🧠 Document Q&A Interface</span> */}
//                 </Link>
//             </div>

//             {/* Navigation Links */}
//             <div className="flex space-x-8 text-sm font-medium text-gray-300">
//                 <Link to="/" className="hover:text-white transition">Ask</Link>
//                 <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
//                 <Link to="/upload" className="hover:text-white transition">Upload</Link>
//             </div>


//         </nav>
//     );
// }



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpeg";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
//         bg-slate-700 py-3 px-6 rounded-full border border-white/20 
//         max-w-6xl w-[95%] flex justify-between items-center 
//         text-white shadow-lg">

//       {/* Logo */}
//       <div className="text-lg font-bold tracking-wide">
//         <Link to="/" className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
//         </Link>
//       </div>

//       {/* Desktop Links */}
//       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
//         <Link to="/" className="hover:text-white transition">Ask</Link>
//         <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
//         <Link to="/upload" className="hover:text-white transition">Upload</Link>
//       </div>

//       {/* Hamburger Button (visible on mobile) */}
//       <button
//         className="md:hidden text-2xl focus:outline-none"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "✖" : "≡"}
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-20 right-6 bg-slate-800 rounded-lg py-3 px-5 flex flex-col space-y-4 md:hidden text-sm font-medium text-gray-300 shadow-lg border border-white/20">
//           <Link
//             to="/"
//             className="hover:text-white transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Ask
//           </Link>
//           <Link
//             to="/dashboard"
//             className="hover:text-white transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Dashboard
//           </Link>
//           <Link
//             to="/upload"
//             className="hover:text-white transition"
//             onClick={() => setIsOpen(false)}
//           >
//             Upload
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }



// import { Link } from "react-router-dom";
// import { useState } from "react";
// import logo from "../assets/logo.jpeg";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
//                     bg-slate-700 py-3 px-6 rounded-full border border-white/20 
//                     max-w-6xl w-[95%] flex justify-between items-center 
//                     text-white shadow-lg">
//       {/* Logo */}
//       <div className="text-lg font-bold tracking-wide">
//         <Link to="/" className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
//         </Link>
//       </div>

//       {/* Desktop Nav Links */}
//       <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
//         <Link to="/" className="hover:text-white transition">Ask</Link>
//         <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
//         <Link to="/upload" className="hover:text-white transition">Upload</Link>
//       </div>

//       {/* Hamburger Icon */}
//       <div className="md:hidden">
//         <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//           <svg
//             className="w-10 h-10 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2.5}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2.5}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-full mt-2 right-4 bg-slate-700 border border-white/10 rounded-lg shadow-lg px-6 py-4 flex flex-col space-y-3 md:hidden text-sm text-gray-300">
//           <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-white transition">Ask</Link>
//           <Link to="/dashboard" onClick={() => setIsOpen(false)} className="hover:text-white transition">Dashboard</Link>
//           <Link to="/upload" onClick={() => setIsOpen(false)} className="hover:text-white transition">Upload</Link>
//         </div>
//       )}
//     </nav>
//   );
// }


import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                    bg-slate-700 py-3 px-6 rounded-2xl border border-white/20 
                    max-w-6xl w-[95%] text-white shadow-lg">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold tracking-wide">
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
                    </Link>
                </div>

                {/* Hamburger button for small screens */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                        <svg
                            className="w-10 h-10 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop nav links */}
                <div className="hidden md:flex space-x-8 text-lg font-medium text-gray-300">
                    <Link to="/ask" className="hover:text-white transition">Ask</Link>
                    <Link to="/dashboard" className="hover:text-white transition">Dashboard</Link>
                    <Link to="/upload" className="hover:text-white transition">Upload</Link>
                </div>
            </div>

            {/* Mobile links inside navbar */}
            {isOpen && (
                <div className="flex flex-col mt-4 space-y-2 text-lg font-medium text-gray-300 md:hidden">
                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-white transition">Ask</Link>
                    <Link to="/dashboard" onClick={() => setIsOpen(false)} className="hover:text-white transition">Dashboard</Link>
                    <Link to="/upload" onClick={() => setIsOpen(false)} className="hover:text-white transition">Upload</Link>
                </div>
            )}
        </nav>
    );
}
