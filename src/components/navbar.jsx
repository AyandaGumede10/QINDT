import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent text-white shadow-md">
      <div className="flex justify-between p-4 mx-auto max-w-screen-xxl">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-14" />
        </div>

        {/* Animated Burger Icon */}
        <div
          className="md:hidden cursor-pointer relative w-6 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`
            absolute w-6 h-0.5 bg-gray-500 transform transition-all duration-300 ease-in-out
            ${menuOpen ? 'rotate-45 top-3' : 'rotate-0 top-1'}
          `}></div>
          <div className={`
            absolute w-6 h-0.5 bg-gray-500 top-3 transform transition-all duration-300 ease-in-out
            ${menuOpen ? 'opacity-0' : 'opacity-100'}
          `}></div>
          <div className={`
            absolute w-6 h-0.5 bg-gray-500 transform transition-all duration-300 ease-in-out
            ${menuOpen ? '-rotate-45 top-3' : 'rotate-0 top-5'}
          `}></div>
        </div>

        {/* Navigation Links */}
        <ul className={` 
          ${menuOpen ? "block" : "hidden"}
          md:flex md:items-center 
          absolute md:static 
          left-0 z-10 
          w-full md:w-auto 
          p-4 md:p-0 
          bg-gray-800 md:bg-transparent 
          font-light font-['Segoe_UI'] 
          space-y-4 md:space-y-0 
          md:space-x-6 
          md:ml-auto
          top-20
        `}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block md:inline px-4 py-2 rounded ${
                  isActive ? "text-blue-500" : "text-gray-500 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block md:inline px-4 py-2 rounded ${
                  isActive ? "text-blue-500" : "text-gray-500 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block md:inline px-4 py-2 rounded ${
                  isActive ? "text-blue-500" : "text-gray-500 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block md:inline px-4 py-2 rounded ${
                  isActive ? "text-blue-500" : "text-gray-500 hover:text-blue-500"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;