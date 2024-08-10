import React from 'react';
import './Gallery.css';
import backgroundVideo from '../assets/background.mp4'; // Make sure the path is correct


import image1 from '../assets/sunil_jha.png';
import image2 from '../assets/sunil_jha.png';
import image3 from '../assets/sunil_jha.png';
import image4 from '../assets/sunil_jha.png';
import image5 from '../assets/sunil_jha.png';


const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white p-4 relative overflow-hidden mt-10">
      <video className="absolute top-0 left-0 w-full h-full object-cover opacity-50" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-4xl font-bold mb-8 z-10 text-black animate-fadeIn">Gallery</h1>
      <div className="z-16 w-full overflow-hidden relative">
        <div className="scrolling-images">
        <img src={image1} alt="Gallery Image 1" className="gallery-image" />
          <img src={image2} alt="Gallery Image 2" className="gallery-image" />
          <img src={image3} alt="Gallery Image 3" className="gallery-image" />
          <img src={image4} alt="Gallery Image 4" className="gallery-image" />
          <img src={image5} alt="Gallery Image 5" className="gallery-image" />
          <img src={image1} alt="Gallery Image 1" className="gallery-image" />
          <img src={image2} alt="Gallery Image 2" className="gallery-image" />
          <img src={image3} alt="Gallery Image 3" className="gallery-image" />
          <img src={image4} alt="Gallery Image 4" className="gallery-image" />
          <img src={image5} alt="Gallery Image 5" className="gallery-image" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
