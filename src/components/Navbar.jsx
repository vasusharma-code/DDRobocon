import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/IITD.png';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
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
  }, [prevScrollPos, isVisible]);

  return (
    <nav
      className={`bg-white shadow-md fixed w-full z-10 top-0 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-2" />
          <h1 className="text-xl font-bold">Prof. Sunil Jha</h1>
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("works")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("works")}
              className="flex items-center hover:text-blue-600"
            >
              Works
              <i
                className={`fas fa-chevron-down ml-2 ${
                  openDropdown === "works" ? "transform rotate-180" : ""
                }`}
              ></i>
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openDropdown === "works" ? "max-h-96" : "max-h-0"
              }`}
            >
              <li><Link to="/international-journal" className="block px-4 py-2 hover:bg-gray-100">International Journal</Link></li>
              <li><Link to="/conference-paper" className="block px-4 py-2 hover:bg-gray-100">Conference Paper</Link></li>
              <li><Link to="/fiit-projects" className="block px-4 py-2 hover:bg-gray-100">FIIT Projects</Link></li>
              <li><Link to="/patents" className="block px-4 py-2 hover:bg-gray-100">Patents</Link></li>
              <li><Link to="/books-supervised" className="block px-4 py-2 hover:bg-gray-100">Books Supervised</Link></li>
              <li><Link to="/thesis" className="block px-4 py-2 hover:bg-gray-100">Thesis</Link></li>
              <li><Link to="/rd-consultants" className="block px-4 py-2 hover:bg-gray-100">R&D Consultants</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/awards" className="hover:text-blue-600">Awards</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("experience")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => toggleDropdown("experience")}
              className="flex items-center hover:text-blue-600"
            >
              Experience
              <i
                className={`fas fa-chevron-down ml-2 ${
                  openDropdown === "experience" ? "transform rotate-180" : ""
                }`}
              ></i>
            </button>
            <ul
              className={`absolute left-0 mt-2 w-48 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                openDropdown === "experience" ? "max-h-96" : "max-h-0"
              }`}
            >
              <li><Link to="/teaching" className="block px-4 py-2 hover:bg-gray-100">Teaching</Link></li>
              <li><Link to="/industrial-experience" className="block px-4 py-2 hover:bg-gray-100">Industrial Experience</Link></li>
            </ul>
          </li>
          <li>
            <Link to="/other-activities" className="hover:text-blue-600">Other Activities</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
          <div className="flex gap-4 text-lg mt-2 md:mt-0">
            <a href="https://mech.iitd.ac.in/content/jha-sunil" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 cursor-pointer transform hover:scale-125 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="google">
                <path fill="#fbbb00" d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
                <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
                <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
                <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 cursor-pointer transform hover:scale-125 transition duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1DA1F2">
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.577 2.163-2.723-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.555-3.594-1.555-2.719 0-4.92 2.2-4.92 4.917 0 .39.045.765.127 1.125-4.092-.205-7.719-2.165-10.148-5.144-.425.722-.667 1.562-.667 2.455 0 1.693.86 3.184 2.165 4.065-.797-.026-1.548-.244-2.205-.611v.06c0 2.362 1.675 4.335 3.899 4.78-.407.111-.835.171-1.276.171-.311 0-.615-.03-.916-.086.615 1.926 2.4 3.322 4.516 3.362-1.65 1.294-3.726 2.065-5.983 2.065-.39 0-.779-.023-1.17-.067 2.137 1.374 4.675 2.175 7.404 2.175 8.888 0 13.755-7.354 13.755-13.75l-.016-.626c.944-.686 1.768-1.53 2.415-2.494z" />
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
          <button
            className="text-gray-700 hover:text-blue-600 md:hidden focus:outline-none"
            onClick={toggleSideMenu}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      {/* Side Menu for small screens */}
      {isSideMenuOpen && (
        <div className="bg-white shadow-lg md:hidden fixed top-0 left-0 h-full w-full z-20">
          <button
            className="text-gray-700 hover:text-blue-600 absolute top-5 right-5 focus:outline-none"
            onClick={toggleSideMenu}
          >
            <i className="fas fa-times"></i>
          </button>
          <ul className="flex flex-col items-center space-y-4 mt-20">
            <li>
              <Link to="/" className="hover:text-blue-600" onClick={toggleSideMenu}>Home</Link>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("works")}
                className="flex items-center hover:text-blue-600"
              >
                Works
                <i
                  className={`fas fa-chevron-down ml-2 ${
                    openDropdown === "works" ? "transform rotate-180" : ""
                  }`}
                ></i>
              </button>
              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openDropdown === "works" ? "max-h-96" : "max-h-0"
                }`}
              >
                <li><Link to="/international-journal" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>International Journal</Link></li>
                <li><Link to="/conference-paper" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>Conference Paper</Link></li>
                <li><Link to="/fiit-projects" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>FIIT Projects</Link></li>
                <li><Link to="/patents" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>Patents</Link></li>
                <li><Link to="/books-supervised" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>Books Supervised</Link></li>
                <li><Link to="/thesis" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>Thesis</Link></li>
                <li><Link to="/rd-consultants" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>R&D Consultants</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/awards" className="hover:text-blue-600" onClick={toggleSideMenu}>Awards</Link>
            </li>
            <li>
              <button
                onClick={() => toggleDropdown("experience")}
                className="flex items-center hover:text-blue-600"
              >
                Experience
                <i
                  className={`fas fa-chevron-down ml-2 ${
                    openDropdown === "experience" ? "transform rotate-180" : ""
                  }`}
                ></i>
              </button>
              <ul
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openDropdown === "experience" ? "max-h-96" : "max-h-0"
                }`}
              >
                <li><Link to="/teaching" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>Teaching</Link></li>
                <li><Link to="/industrial-experience" className="block px-4 py-2 hover:bg-gray-100" onClick={toggleSideMenu}>Industrial Experience</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/other-activities" className="hover:text-blue-600" onClick={toggleSideMenu}>Other Activities</Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-blue-600" onClick={toggleSideMenu}>Gallery</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
