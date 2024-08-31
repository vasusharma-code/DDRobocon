import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/IITD.png';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  useEffect(() => {
    // Close dropdowns and mobile menu when the route changes
    setOpenDropdown(null);
    closeMobileMenu();
  }, [location]);

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-10 top-0 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <h1 className="text-xl font-bold">Prof. Sunil Jha</h1>
        </div>
        <div className="flex items-center md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <RiCloseLine className="w-6 h-6" />
            ) : (
              <RiMenu3Line className="w-6 h-6" />
            )}
          </button>
        </div>
        <ul
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-6 text-gray-900 w-full md:w-auto text-center md:text-left mt-2 md:mt-0`}
        >
          <li>
            <Link to="/" className="nav" onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => toggleDropdown("works")}
              className="flex items-center nav"
            >
              Works
              <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "works" ? "rotate-180" : ""}`} />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openDropdown === "works" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li><Link to="/international-journal" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}>International Journal</Link></li>
              <li><Link to="/conference-paper" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}>Conference Paper</Link></li>
              <li><Link to="/fiit-projects" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}>FITT Projects</Link></li>
              <li><Link to="/patents" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}>Patents</Link></li>
              <li><Link to="/books-supervised" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}>Books Supervised</Link></li>
              <li><Link to="/supervision" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}>Supervisions</Link></li>
              <li><Link to="/rd-consultants" className="block px-4 py-2 hover:bg-gray-200" onClick={closeMobileMenu}>R&D Consultants</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/awards" className="nav" onClick={closeMobileMenu}>Awards</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => toggleDropdown("experience")}
              className="flex items-center nav"
            >
              Experience
              <RiArrowDropDownLine className={`ml-2 transition-transform ${openDropdown === "experience" ? "rotate-180" : ""}`} />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openDropdown === "experience" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li><Link to="/teaching" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>Teaching</Link></li>
              <li><Link to="/industrial-experience" className="block px-4 py-2 hover:bg-gray-100" onClick={closeMobileMenu}>Industrial Experience</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/other-activities" className="nav" onClick={closeMobileMenu}>Other Activities</Link>
          </li>
          <li>
            <Link to="/gallery" className="nav" onClick={closeMobileMenu}>Gallery</Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .nav {
          display: inline-flex;
          align-items: center;
          position: relative;
          text-decoration: none;
          color: inherit;
          transition: all 0.5s;
        }
        .nav::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: black;
          transform-origin: bottom right;
          transition: transform 0.5s ease-out;
        }
        .nav:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
