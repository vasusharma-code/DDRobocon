import React from "react";

const Header = () => {
  return (
    <header className="relative w-full h-64 overflow-hidden">
      <a 
        href="https://www.iafsm.in/"  // Replace with your desired URL
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 w-full h-full"
      >
        <img 
          src="https://www.iafsm.in/images/2022/10/15/banner-1.png"
          alt="Header Image"
          className="w-full h-full object-cover"
        />
      </a>
    </header>
  );
};

export default Header;
