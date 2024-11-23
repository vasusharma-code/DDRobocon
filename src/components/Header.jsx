import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/path/to/your/logo.png" // Replace with your logo path
            alt="DD Robocon Logo"
            className="h-12 w-12"
          />
          <h1 className="ml-2 text-2xl font-bold text-yellow-500">
            DD ROBOCON 2025
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
