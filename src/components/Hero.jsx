import React, { useState } from "react";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import logo from '../assets/sunil_jha.jpg'; // Assuming you have a logo image

const Hero = () => {
  const [showMore, setShowMore] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const openImageFullscreen = (image) => {
    setFullscreenImage(image);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="bg-gray-100 py-8 md:py-12 relative">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left relative">
          <div className="flex items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Prof. Sunil Jha</h2>
            {/* Big Rounded Logo */}
            <img
              src={logo}
              alt="Prof. Sunil Jha"
              className="ml-4 w-16 h-16 rounded-full transition-transform duration-300 ease-in-out hover:scale-150"
            />
          </div>
          <p className="text-gray-800 mt-4 max-w-md mx-auto md:mx-0">
          Dr. Sunil Jha, a distinguished professor in the Department of Mechanical Engineering at IIT Delhi, holds a Ph.D. in Manufacturing Science from IIT Kanpur. With over 17 years of teaching and research experience, his expertise lies in manufacturing processes and automation. He has pioneered several unconventional super finishing processes, filing 12 patents, with some technologies being successfully commercialized.
          </p>
          {showMore && (
            <p className="text-gray-800 mt-4 max-w-md mx-auto md:mx-0">
              Before joining IIT Delhi, Dr. Sunil Jha worked with TATA Motors in Jamshedpur, focusing on CAD/CAM and digitizing engine components for foundry tool development. At IIT Delhi, his research and teaching interests include automation in manufacturing, computer-aided manufacturing, and industrial automation, which he shares with both undergraduate and postgraduate students. Dr. Jha has led numerous training programs for industry professionals and educators and developed online courses on Industry 4.0 technologies. Currently, he heads the IITD-AIA Foundation for Smart Manufacturing, collaborating with the manufacturing industry to adopt new technologies and prepare for the next industrial revolution.
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
         {/* Image Cards with Fullscreen Click Functionality */}
  {[
    { src: image1, text: "Vechile Navigation and Testing" },
    { src: image2, text: "Laser Micro Machining" },
    { src: image3, text: "(EDM)" },
    { src: image4, text: "Micro Grinding & Micro Milling" },
    { src: image5, text: "Machine Laser Based Tool Wear" },
    { src: image6, text: "Research" }
  ].map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={() => openImageFullscreen(item.src)}
    >
      <img
        src={item.src}
        alt={`Image ${index + 1}`}
        className="w-full h-24 sm:h-32 object-cover transition-transform duration-300 ease-in-out"
      />
      <div className="p-2">
        <h3 className="text-center text-sm font-semibold">{item.text}</h3>
      </div>
    </div>
  ))}
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold bg-red-600 hover:bg-red-700 p-2 rounded-full focus:outline-none"
            onClick={closeFullscreen}
          >
            &times;
          </button>
          <img src={fullscreenImage} alt="Fullscreen" className="max-w-full max-h-full"/>
        </div>
      )}

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
