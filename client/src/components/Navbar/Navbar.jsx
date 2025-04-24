// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../../assets/logo.png';
// import { useSelector, useDispatch } from 'react-redux';
// import { setUser } from '../../redux/userSlice';
// import { toast } from 'react-hot-toast';
// import { Menu, X } from 'lucide-react';

// const Navbar = () => {
//   const user = useSelector((state) => state.app.user);
//   const dispatch = useDispatch();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleLogout = () => {
//     localStorage.clear(); 
//     dispatch(setUser(null));
//     toast.success("Logged out successfully");
//   };
  
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-black/10 backdrop-blur-sm py-4">
//       <div className="container">
//         <div className="flex justify-between items-center">
//           {/* Logo */}
//           <div className="flex items-center gap-4 text-white font-bold text-2xl">
//             <img src={Logo} alt="logo" className="w-10" />
//             <span>MindSkoon</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="text-white hidden md:block">
//             <ul className="flex items-center gap-6 text-xl py-4">
//               <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
//               <li><Link to="/about" className="hover:text-gray-300 transition">About</Link></li>
//               <li><Link to="/contact" className="hover:text-gray-300 transition">Contact Us</Link></li>
//               <li><Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link></li>
//               <li><Link to="/reward" className="hover:text-gray-300 transition">RewardTree</Link></li>
//             </ul>
//           </div>

//           {/* Authentication Section */}
//           <div className="flex items-center gap-4">
//             {user ? (
//               <>
//                 <span className="text-white font-semibold hidden sm:block">
//                   Hello, {user.fullName.split(" ")[0]}
//                 </span>
//                 <button
//                   onClick={handleLogout}
//                   className="text-white border border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <Link to="/login">
//                 <button className="text-black border-2 border-black px-3 py-1 rounded-md bg-white hover:bg-black hover:text-white transition">
//                   Login
//                 </button>
//               </Link>
//             )}
            
//             {/* Mobile Menu Button */}
//             <button 
//               className="text-white md:hidden" 
//               onClick={toggleMenu}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-black/80 mt-4 rounded-lg p-4 transition-all duration-300">
//             <ul className="flex flex-col text-white gap-4 text-lg">
//               <li><Link to="/" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
//               <li><Link to="/about" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>About</Link></li>
//               <li><Link to="/contact" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
//               <li><Link to="/faq" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
//               <li><Link to="/reward" className="block py-2 hover:text-gray-300" onClick={() => setIsMenuOpen(false)}>RewardTree</Link></li>
//               {user && (
//                 <li className="block py-2">
//                   <span className="text-white font-semibold md:hidden">
//                     Hello, {user.fullName.split(" ")[0]}
//                   </span>
//                 </li>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';
import { toast } from 'react-hot-toast';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const user = useSelector((state) => state.app.user);
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.clear(); 
    dispatch(setUser(null));
    toast.success("Logged out successfully");
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav data-aos="fade-down" className="fixed top-0 right-0 w-full z-50 bg-red-900/90 backdrop-blur-sm py-4 shadow-lg">
      <div className="container">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-4 text-white font-bold text-2xl">
            <img src={Logo} alt="logo" className="w-12 h-12 rounded-full border-2 border-red-300 p-1" />
            <span className="text-red-100">MindSkoon</span>
          </div>

          {/* Desktop Menu */}
          <div className="text-white hidden md:block">
            <ul className="flex items-center gap-8 text-xl py-4">
              <li><Link to="/" className="hover:text-red-300 transition duration-300 relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-300 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/about" className="hover:text-red-300 transition duration-300 relative group">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-300 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/contact" className="hover:text-red-300 transition duration-300 relative group">
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-300 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/faq" className="hover:text-red-300 transition duration-300 relative group">
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-300 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
              <li><Link to="/reward" className="hover:text-red-300 transition duration-300 relative group">
                RewardTree
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-300 transition-all duration-300 group-hover:w-full"></span>
              </Link></li>
            </ul>
          </div>

          {/* Authentication Section */}
          <div className="flex items-center gap-4">
            {user ? (
              <>
                <span className="text-red-100 font-semibold hidden sm:block">
                  Hello, {user.fullName.split(" ")[0]}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-white border-2 border-red-300 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 font-medium"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/login">
                <button className="text-red-900 border-2 border-red-200 px-5 py-2 rounded-lg bg-red-100 hover:bg-red-800 hover:text-white transition duration-300 font-semibold">
                  Login
                </button>
              </Link>
            )}
            
            {/* Mobile Menu Button */}
            <button 
              className="text-white md:hidden bg-red-800 p-2 rounded-md" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-950/95 mt-4 rounded-lg p-4 transition-all duration-300 border border-red-700 shadow-xl">
            <ul className="flex flex-col text-white gap-4 text-lg">
              <li><Link to="/" className="block py-3 px-4 hover:bg-red-800 hover:text-red-200 rounded-md transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="block py-3 px-4 hover:bg-red-800 hover:text-red-200 rounded-md transition-all duration-300" onClick={() => setIsMenuOpen(false)}>About</Link></li>
              <li><Link to="/contact" className="block py-3 px-4 hover:bg-red-800 hover:text-red-200 rounded-md transition-all duration-300" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
              <li><Link to="/faq" className="block py-3 px-4 hover:bg-red-800 hover:text-red-200 rounded-md transition-all duration-300" onClick={() => setIsMenuOpen(false)}>FAQ</Link></li>
              <li><Link to="/reward" className="block py-3 px-4 hover:bg-red-800 hover:text-red-200 rounded-md transition-all duration-300" onClick={() => setIsMenuOpen(false)}>RewardTree</Link></li>
              {user && (
                <li className="block py-2 px-4 text-red-300 border-t border-red-700 mt-2 pt-4">
                  <span className="font-semibold md:hidden">
                    Hello, {user.fullName.split(" ")[0]}
                  </span>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;