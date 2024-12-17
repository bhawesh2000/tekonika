// import React from "react";
// import { NavLink } from "react-router-dom";

// const Header = () => {
//   return (
//     <nav className="bg-blue-500 p-4 text-white w-screen">
//       <div className="flex justify-between items-center">
//         <div className="text-2xl font-bold">HealthApp</div>
//         <ul className="flex space-x-6">
//           <li>
//             <NavLink
//               to="/dashboard"
//               className={({ isActive }) =>
//                 `hover:text-gray-300 ${isActive ? "underline" : ""}`
//               }
//             >
//               Dashboard
//             </NavLink>
//           </li>

//           <li>
//             <NavLink
//               to="/patient-register"
//               className={({ isActive }) =>
//                 `hover:text-gray-300 ${isActive ? "underline" : ""}`
//               }
//             >
//               Patient Register
//             </NavLink>
//           </li>

//           <li className="group relative">
//             <span className="cursor-pointer">Patient Data</span>
//             <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md">
//               <li className="border-b-2">
//                 <NavLink
//                   to="/patient-data/link1"
//                   className={({ isActive }) =>
//                     `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
//                   }
//                 >
//                   Link 1
//                 </NavLink>
//               </li>
//               <li className="border-b-2">
//                 <NavLink
//                   to="/patient-data/link2"
//                   className={({ isActive }) =>
//                     `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
//                   }
//                 >
//                   Link 2
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           <li className="group relative">
//             <span className="cursor-pointer">Operation Theater</span>
//             <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md">
//               <li className="border-b-2">
//                 <NavLink
//                   to="/operation-theater/link3"
//                   className={({ isActive }) =>
//                     `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
//                   }
//                 >
//                   Link 3
//                 </NavLink>
//               </li>
//               <li className="border-b-2">
//                 <NavLink
//                   to="/operation-theater/link4"
//                   className={({ isActive }) =>
//                     `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
//                   }
//                 >
//                   Link 4
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <NavLink
//               to="/reports"
//               className={({ isActive }) =>
//                 `hover:text-gray-300 ${isActive ? "underline" : ""}`
//               }
//             >
//               Reports
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && (
        <div className="bg-blue-500 p-4 text-white w-1/2 fixed top-16 right-0 z-50 lg:hidden">
          <ul className="space-y-4">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patient-register"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                Patient Register
              </NavLink>
            </li>

            <li className="group relative">
              <span className="cursor-pointer">Patient Data</span>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md">
                <li className="border-b-2">
                  <NavLink
                    to="/patient-data/link1"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 1
                  </NavLink>
                </li>
                <li className="border-b-2">
                  <NavLink
                    to="/patient-data/link2"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 2
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="group relative">
              <span className="cursor-pointer">Operation Theater</span>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md">
                <li className="border-b-2">
                  <NavLink
                    to="/operation-theater/link3"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 3
                  </NavLink>
                </li>
                <li className="border-b-2">
                  <NavLink
                    to="/operation-theater/link4"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 4
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      <nav className="bg-blue-500 p-4 text-white w-screen z-60">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">HealthApp</div>

          <div className="lg:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>

          <ul className="lg:flex space-x-6 lg:space-x-10 hidden">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patient-register"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                Patient Register
              </NavLink>
            </li>

            <li className="group relative">
              <span className="cursor-pointer">Patient Data</span>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md">
                <li className="border-b-2">
                  <NavLink
                    to="/patient-data/link1"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 1
                  </NavLink>
                </li>
                <li className="border-b-2">
                  <NavLink
                    to="/patient-data/link2"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 2
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="group relative">
              <span className="cursor-pointer">Operation Theater</span>
              <ul className="absolute hidden group-hover:block bg-white text-black p-2 shadow-md">
                <li className="border-b-2">
                  <NavLink
                    to="/operation-theater/link3"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 3
                  </NavLink>
                </li>
                <li className="border-b-2">
                  <NavLink
                    to="/operation-theater/link4"
                    className={({ isActive }) =>
                      `hover:text-blue-500 ${isActive ? "font-bold" : ""}`
                    }
                  >
                    Link 4
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                Reports
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;


