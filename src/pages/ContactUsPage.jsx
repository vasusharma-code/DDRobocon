import React from "react";

const ContactUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 flex flex-col items-center mt-14">
      {/* Header Section */}
      <div className="bg-blue-500 w-full py-6 text-center rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white">CONTACT US</h1>
      </div>

      {/* Contact Details Section */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-lg font-semibold text-gray-700 mb-4"></h2>
        <div className="text-gray-600 space-y-2">
          <p>DD Robocon 2025 Secretariat</p>
          <p>Department of Mechanical Engineering,</p>
          <p>Indian Institute of Technology Delhi</p>
          <p>Hauz Khas, New Delhi - 110016</p>
          <p>INDIA</p>
          <p>
            <strong>Phone no:</strong> +91-90138-99145
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:ddroboconiitd@gmail.com"
              className="text-blue-500 underline"
            >
              ddroboconiitd@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
