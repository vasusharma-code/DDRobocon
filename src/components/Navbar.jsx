import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/IITD.png';
import DDRLogo from '../assets/DDLogo.png';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

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
          <img src={logo} alt="Logo" className="h-16 mr-1" /> {/* Increased size */}
          <h1 className="text-xl font-bold flex items-center">
            DD Robocon 2025
            <img src={DDRLogo} alt="DDRLogo" className="h-12 ml-3" /> {/* DDRLogo on the right */}
          </h1>
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
          <li>
            <Link to="/important-dates" className="nav" onClick={closeMobileMenu}>Important Dates</Link>
          </li>
          <li>
            <Link to="/contest-rules" className="nav" onClick={closeMobileMenu}>Contest Rules</Link>
          </li>
          <li>
            <Link to="/game-videos" className="nav" onClick={closeMobileMenu}>Game Videos</Link>
          </li>
          <li>
            <Link to="/contact" className="nav" onClick={closeMobileMenu}>Contact</Link>
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
