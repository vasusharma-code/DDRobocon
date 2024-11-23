import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-center md:text-left">
          <p>Copyright © 2024-25, DD Robocon</p>
        </div>
        <div className="text-center md:text-right">
          <p>Website created and designed by <a href="mailto:vasu.sharma1768934@gmail.com" className="underline">Vasu Sharma</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
