import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/IITD.png';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const location = useLocation();

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
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
    // Close dropdowns when the route changes
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-10 top-0 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
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

        /* Adjust styles for smaller screens */
        @media (max-width: 768px) {
          .container {
            padding: 0.25rem 0.5rem;
          }
          .flex {
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 0.5rem;
          }
          .h-12 {
            height: 2rem; /* Reduce logo size */
          }
          .text-xl {
            font-size: 1rem; /* Reduce title font size */
          }
          .nav {
            font-size: 0.875rem; /* Reduce link font size */
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0.25rem 0.5rem;
          }
          .flex {
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 0.25rem;
          }
          .h-12 {
            height: 1.5rem; /* Further reduce logo size */
          }
          .text-xl {
            font-size: 0.75rem; /* Further reduce title font size */
          }
          .nav {
            font-size: 0.75rem; /* Further reduce link font size */
          }
        }
      `}</style>

      <div className="container mx-auto px-4 py-2 flex items-center justify-between flex-wrap">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <h1 className="text-xl font-bold">Prof. Sunil Jha</h1>
        </div>
        <ul className="flex flex-wrap space-x-6 text-gray-900">
          <li>
            <Link to="/" className="nav">Home</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => toggleDropdown("works")}
              className="flex items-center nav"
            >
              Works
              <RiArrowDropDownLine  className={`ml-2 transition-transform ${openDropdown === "works" ? "rotate-180" : ""}`} />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openDropdown === "works" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li><Link to="/international-journal" className="block px-4 py-2 hover:bg-gray-200">International Journal</Link></li>
              <li><Link to="/conference-paper" className="block px-4 py-2 hover:bg-gray-200">Conference Paper</Link></li>
              <li><Link to="/fiit-projects" className="block px-4 py-2 hover:bg-gray-200">FITT Projects</Link></li>
              <li><Link to="/patents" className="block px-4 py-2 hover:bg-gray-200">Patents</Link></li>
              <li><Link to="/books-supervised" className="block px-4 py-2 hover:bg-gray-200">Books Supervised</Link></li>
              <li><Link to="/supervision" className="block px-4 py-2 hover:bg-gray-200">Supervisions</Link></li>
              <li><Link to="/rd-consultants" className="block px-4 py-2 hover:bg-gray-200">R&D Consultants</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/awards" className="nav">Awards</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => toggleDropdown("experience")}
              className="flex items-center nav"
            >
              Experience
              <RiArrowDropDownLine  className={`ml-2 transition-transform ${openDropdown === "experience" ? "rotate-180" : ""}`} />
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openDropdown === "experience" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <li><Link to="/teaching" className="block px-4 py-2 hover:bg-gray-100">Teaching</Link></li>
              <li><Link to="/industrial-experience" className="block px-4 py-2 hover:bg-gray-100">Industrial Experience</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/other-activities" className="nav">Other Activities</Link>
          </li>
          <li>
            <Link to="/gallery" className="nav">Gallery</Link>
          </li>
        </ul>
        <div className="flex gap-4 text-lg mt-2 md:mt-0">
          <a href="https://iitd.irins.org/profile/70701" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 cursor-pointer transform hover:scale-125 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="google">
              <path fill="#fbbb00" d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
              <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.621 512 256c0 19.069-1.889 37.703-5.475 55.764-12.074 55.588-44.652 103.009-88.611 133.893l-71.232-3.637-10.088-64.535c29.183-17.179 51.793-43.67 63.322-75.299H261.632V208.176h245.895z"></path>
              <path fill="#28b446" d="M418.406 445.657C374.008 481.99 317.054 504 256 504c-97.374 0-181.551-54.242-225.491-134.682l82.018-67.91c22.234 55.877 76.26 95.592 143.473 95.592 27.953 0 54.157-7.613 76.387-20.889l85.019 69.546z"></path>
              <path fill="#f14336" d="M421.213 66.057l-81.994 67.909C316.892 101.863 287.272 92 256 92 188.366 92 134.077 133.042 111.733 189.023l-82.149-67.91C74.046 50.134 159.114 8 256 8c62.34 0 120.411 23.941 165.213 58.057z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/sunil-jha-iitd/" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 cursor-pointer transform hover:scale-125 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#0077B5" d="M100.28 448H7.4V149.1h92.78zM53.79 108.1C24.08 108.1 0 83.61 0 53.78a53.79 53.79 0 11107.58 0c0 29.83-24.08 54.32-53.79 54.32zM447.8 448h-92.68V302.4c0-34.7-13.28-58.38-41.5-58.38-22.62 0-36.11 15.23-42.06 29.94-2.14 5.2-2.68 12.45-2.68 19.73V448H176.3s1.23-242.8 0-267.8h92.68v37.94c-1.07 1.79-2.64 3.61-3.71 5.38h3.71v-5.38c12.32-19 34.37-46.1 83.59-46.1 61.12 0 106.9 39.94 106.9 125.9V448z"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/@drsuniljha" target="_blank" rel="noopener noreferrer">
            <svg className="w-6 h-6 cursor-pointer transform hover:scale-125 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="youtube">
              <g fillRule="evenodd" clipRule="evenodd">
                <path fill="#F44336" d="M15.32 4.06c-.434-.772-.905-.914-1.864-.968C12.498 3.027 10.089 3 8.002 3c-2.091 0-4.501.027-5.458.091-.957.055-1.429.196-1.867.969C.23 4.831 0 6.159 0 8.497v.008c0 2.328.23 3.666.677 4.429.438.772.909.912 1.866.977.958.056 3.368.089 5.459.089 2.087 0 4.496-.033 5.455-.088.959-.065 1.43-.205 1.864-.977.451-.763.679-2.101.679-4.429v-.008c0-2.339-.228-3.667-.68-4.438z"></path>
                <path fill="#FAFAFA" d="M6 11.5v-6l5 3z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
