import React, { useState } from "react";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <section className="bg-gray-100 py-8 md:py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Prof. Sunil Jha</h2>
          <p className="text-gray-800 mt-4 max-w-md mx-auto md:mx-0">
            I am Dr. Sunil Jha, a Professor in the Department of Mechanical Engineering at IIT Delhi. I hold a Ph.D. from IIT Kanpur. My research focuses on advanced machining and finishing processes, micro and nanofinishing, robotics, manufacturing automation, and smart fluids. I am particularly interested in the application of magnetorheological fluids and their impact on modern engineering challenges.
          </p>
          {showMore && (
            <p className="text-gray-800 mt-4 max-w-md mx-auto md:mx-0">
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
            <img src="/path-to-image1.jpg" alt="Education & Training" className="w-full h-24 sm:h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Education & Training</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image2.jpg" alt="Consulting" className="w-full h-24 sm:h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Consulting</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image3.jpg" alt="Site Integration" className="w-full h-24 sm:h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Site Integration</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image4.jpg" alt="Skill Certification" className="w-full h-24 sm:h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Skill Certification</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image5.jpg" alt="Prototyping" className="w-full h-24 sm:h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Prototyping</h3>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src="/path-to-image6.jpg" alt="Research" className="w-full h-24 sm:h-32 object-cover"/>
            <div className="p-2">
              <h3 className="text-center text-sm font-semibold">Research</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Publications */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Selected Publications</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-900 text-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold">Augmented Reality Implementation for Fault Diagnosis on Robotic Welding Cell</h3>
            <p className="mt-2 text-sm md:text-base">
              Dheeraj R., Markande A., Chandrashekhara K.L., Sadagopan V., Joshi P., Jha S.
              "Conference Paper" published in Lecture Notes in Mechanical Engineering, 2023, pages 91-101. This paper explores advancements and findings in the field of mechanical engineering, presenting key insights and research outcomes from the conference.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold">Computational-sampling-moiré-based on-machine alignment for freeform optics.</h3>
            <p className="mt-2 text-sm md:text-base">
              Mishra V., Dubey N., Singh M.P., Kumar R., Kar S., Jha S., Mayer L.D., Kim D., Khan G.S.
              "Article" published in Optics Letters, Volume 48, 2023, pages 1934-1937. This article discusses recent developments in optical technologies, highlighting significant advancements and contributions made by the authors in the field of optics.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold">Experimental investigations into additive manufacturing of styrene-ethylene-butylene-styrene block copolymers using solvent cast 3D printing technique.</h3>
            <p className="mt-2 text-sm md:text-base">
              Kumar A., Pandey P.M., Jha S., Banerjee S.S.
              "Article" published in Rapid Prototyping Journal, 2023. This article explores innovative approaches and methodologies in rapid prototyping, reflecting the authors' contributions to advancing the field and enhancing the efficiency of prototype development processes.
            </p>
          </div>
          <div className="bg-blue-900 text-white p-4 md:p-6 rounded-lg shadow-md">
            <h3 className="text-lg md:text-xl font-semibold">Accuracy of Patient-Specific, 3D-Printed Laminofacetal Based Trajectory-Guide for Pedicle Screw Placement in Subaxial Cervical and Thoracic Spine.</h3>
            <p className="mt-2 text-sm md:text-base">
              Kashyap A., Karim A., Arora S., Singh K., Jha S., Maini L.
              "Article" published in Neurology India, Volume 71, 2023, Pages 260-266. This article provides insights into recent advancements and research in neurology, offering valuable contributions to the understanding and management of neurological conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
