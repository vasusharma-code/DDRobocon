import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import stattic from "../assets/Static.png";
import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image 2.jpg";
import image3 from "../assets/Image 3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Swiper Section */}
          <div className="w-full md:w-1/2 h-[300px]">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={false}
              className="w-full h-full"
            >
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image1}
                    alt="Robot Basketball Match"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image2}
                    alt="Robot Court Setup"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={image3}
                    alt="Competing Robots"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-6">
              Introducing DD Robocon India 2025
            </h1>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
              DD Robocon India 2025, powered by IIT Delhi, is the national stage
              of the prestigious Asian-Oceanian college robot competition. This
              thrilling event challenges robots to complete complex tasks
              against the clock while fostering lasting bonds among visionary
              young minds. Join us as we propel engineering and broadcasting
              technologies to new heights. Welcome to the future of innovation!
            </p>
          </div>
        </div>
      </div>

      {/* Stationary Image + Important Dates */}
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:space-x-8">
            {/* Static Image */}
            <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
              <img
                src={stattic}
                alt="Stationary Visual"
                className="w-3/4 md:w-full h-auto rounded-lg mix-blend-multiply"
              />
            </div>

            {/* Important Dates Section */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Important Dates
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Each Date */}
                {[
                  {
                    date: "31-Jan-2025",
                    description: "Solution ideas (Proposal) submission",
                  },
                  {
                    date: "15-Feb-2025",
                    description: "Shortlisting of Stage – 1 Proposals",
                  },
                  {
                    date: "15-Apr-2025",
                    description: "Proof of Concept (video) submission",
                  },
                  {
                    date: "15-May-2025",
                    description: "Stage – 2 Shortlisting",
                  },
                  {
                    date: "13-14 July-2025",
                    description: "National DD Robocon 2025",
                  },
                ].map((event, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-lg font-bold">
                      {event.date.split("-")[0]}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {event.date}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mongolia Highlight Section */}
      <div className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Win a Chance to Represent India in Mongolia!
          </h2>
          <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Showcase your engineering prowess on the global stage! The winner of
            DD Robocon India 2025 will proudly represent the nation in the
            Asia-Pacific Robocon competition, hosted in Mongolia. Step up to the
            challenge, and let your innovation shine on an international
            platform!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
