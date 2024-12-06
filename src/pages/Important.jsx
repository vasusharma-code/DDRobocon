import React from "react";

const ImportantDates = () => {
  return (
    <section className="bg-white py-8 px-4 md:px-16 min-h-screen mt-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Important Dates
        </h1>
        <div className="bg-yellow-300 inline-block px-4 py-1 rounded-md">
          <p className="text-gray-800 font-semibold">Mark Your Calendar</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Each Event */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-white text-xl font-bold">
            31
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
            31-Jan-2025
            </h2>
            <p className="text-gray-600 text-sm">
              Solution ideas (Proposal) submission
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-white text-xl font-bold">
            15
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              15-Feb-2025
            </h2>
            <p className="text-gray-600 text-sm">
              Shortlisting of Stage – 1 Proposals
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-white text-xl font-bold">
            15
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              15-Apr-2025
            </h2>
            <p className="text-gray-600 text-sm">
              Proof of Concept (video) submission
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-white text-xl font-bold">
            15
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              15-May-2025
            </h2>
            <p className="text-gray-600 text-sm">
              Stage – 2 Shortlisting
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-white text-xl font-bold">
            12
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              12-13 July-2025
            </h2>
            <p className="text-gray-600 text-sm">
              National DD Robocon 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
