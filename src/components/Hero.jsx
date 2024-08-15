import React, { useState } from "react";


const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">Prof. Sunil Jha</h2>
          <p className="text-gray-700 mt-4 max-w-md">
          I am Dr. Sunil Jha, a Professor in the Department of Mechanical Engineering at IIT Delhi. I hold a Ph.D. from IIT Kanpur. My research focuses on advanced machining and finishing processes, micro and nanofinishing, robotics, manufacturing automation, and smart fluids. I am particularly interested in the application of magnetorheological fluids and their impact on modern engineering challenges.
          </p>
          {showMore && (
            <p className="text-gray-700 mt-4 max-w-md">
              Dr. Sunil Jha is a Professor in Mechanical Engineering at IIT Delhi since August 2018, with previous roles as Associate Professor (2013-2018) and Assistant Professor (2007-2013). He also has industrial experience as a Senior Engineer at Tata Motors (1998-2000).
            </p>
          )}
          <button 
            className="mt-6 bg-blue-600 text-white py-2 px-4 rounded"
            onClick={handleToggle}
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>

        {/* Images Section */}
        <div className="md:w-1/2 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* Image Cards */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image1.jpg" alt="Education & Training" className="w-full h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Education & Training</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image2.jpg" alt="Consulting" className="w-full h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Consulting</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image3.jpg" alt="Site Integration" className="w-full h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Site Integration</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image4.jpg" alt="Skill Certification" className="w-full h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Skill Certification</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image5.jpg" alt="Prototyping" className="w-full h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Prototyping</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image6.jpg" alt="Research" className="w-full h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Research</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Selected Publications</h2>
          <p className="text-gray-600 mt-4 max-w-md">
         
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Rheological characterization of MR polishing fluid used for silicon polishing in BEMRF process.</h3>
            <p className="mt-2">
            K Saraswathamma, S Jha, PV Rao, "Rheological characterization of MR polishing fluid used for silicon polishing in BEMRF process", Materials and Manufacturing Processes 30 (5), 661-668, 2015
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Magneto-rheological nano-finishing of polycarbonate.</h3>
            <p className="mt-2">
            DA Khan, J Kumar, S Jha, "Magneto-rheological nano-finishing of polycarbonate", International Journal of Precision Technology 6 (2), 89-2bg-blue-200, 2016
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Mechanism of material removal in ball end magnetorheological finishing process.</h3>
            <p className="mt-2">
            AK Singh, S Jha, PM Pandey, "Mechanism of material removal in ball end magnetorheological finishing process", Wear 302 (1), 1180-1191, 2013
            </p>
          </div>
          <div className="bg-blue-900 text-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Ball end magnetorheological finishing using bidisperse magnetorheological polishing fluid.</h3>
            <p className="mt-2">
            M Niranjan, S Jha, RK Kotnala, "Ball end magnetorheological finishing using bidisperse magnetorheological polishing fluid", Materials and Manufacturing Processes 29 (4), 487-49, 2014
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
