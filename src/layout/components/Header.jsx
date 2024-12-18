import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { PiClipboardText } from "react-icons/pi";
import { TbFileDatabase } from "react-icons/tb";
import { FaProcedures } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa"; 
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { RiDatabaseFill } from "react-icons/ri";

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
                <div className="flex flex-row  items-center gap-2">
                <span><TbLayoutDashboardFilled className="text-xl " /></span>
                
                <span>Dashboard</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patient-register"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                <div className="flex flex-row  items-center gap-2">
                <span><GiArchiveRegister className="text-xl " /></span>
                
                <span>Patient Register</span>
                </div>
              </NavLink>
            </li>

            <li className="group relative">
                <div className="flex flex-row  items-center gap-2">
                <span><RiDatabaseFill className="text-xl " /></span>
                
                <span className="cursor-pointer">Patient Data</span>

                </div>
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
            <div className="flex flex-row  items-center gap-2">
                <span><FaProcedures className="text-xl " /></span>
                
                <span className="cursor-pointer">Operation Theater</span>

                </div>
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
                <div className="flex flex-row  items-center gap-2">
                <span><FaFileAlt className="text-xl" /></span>
                
                <span className="">Reports</span>

                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      <nav className="bg-blue-500 p-4 text-white w-screen z-60">
        <div className="flex justify-between items-center">
          <div className="">
            <img className="w-10" src="/img/Logo.png" />
          </div>

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
                <div className="flex flex-row  items-center gap-2">
                <span><TbLayoutDashboardFilled className="text-xl " /></span>
                
                <span>Dashboard</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patient-register"
                className={({ isActive }) =>
                  `hover:text-gray-300 ${isActive ? "underline" : ""}`
                }
              >
                <div className="flex flex-row  items-center gap-2">
                <span><GiArchiveRegister className="text-xl " /></span>
                
                <span>Patient Register</span>
                </div>
              </NavLink>
            </li>

            <li className="group relative">
                <div className="flex flex-row  items-center gap-2">
                <span><RiDatabaseFill className="text-xl " /></span>
                
                <span className="cursor-pointer">Patient Data</span>

                </div>
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
            <div className="flex flex-row  items-center gap-2">
                <span><FaProcedures className="text-xl " /></span>
                
                <span className="cursor-pointer">Operation Theater</span>

                </div>
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
                <div className="flex flex-row  items-center gap-2">
                <span><FaFileAlt className="text-xl" /></span>
                
                <span className="">Reports</span>

                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;


