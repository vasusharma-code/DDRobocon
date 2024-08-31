import React from 'react';

const AwardsAndRecognitions = () => {
  const awards = [
    {
      year: "2016",
      agency: "Manufacturing Today",
      award: "National Technical Institutes Competition"
    },
    {
      year: "2017",
      agency: "GYTI",
      award: "Gandhian Young Technological Innovation Award"
    },
    {
      year: "2016",
      agency: "Aditya Birla Group",
      award: "National Technical Institutes Competition"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen mt-10">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">Awards and Recognitions</h1>
        <div className="overflow-x-auto w-full">
          <table className="min-w-full table-auto border border-gray-600">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-2 md:px-4 py-2 bg-gray-700 text-left text-xs md:text-sm text-white font-medium uppercase tracking-wider border border-gray-600">Sr. No.</th>
                <th className="px-2 md:px-4 py-2 bg-gray-700 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">Year</th>
                <th className="px-2 md:px-4 py-2 bg-gray-700 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">Agency</th>
                <th className="px-2 md:px-4 py-2 bg-gray-700 text-left text-xs md:text-sm font-medium text-white uppercase tracking-wider border border-gray-600">Award/Honor Name</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {awards.map((award, index) => (
                <tr key={index}>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 bg-gray-100 border border-gray-600 text-center">{index + 1}</td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-center">{award.year}</td>
                  <td className="px-2 md:px-4 py-2 whitespace-nowrap text-xs md:text-sm text-gray-700 bg-gray-50 border border-gray-600 text-left">{award.agency}</td>
                  <td className="px-2 md:px-4 py-2 whitespace-normal text-xs md:text-sm text-gray-700 bg-gray-100 border border-gray-600 text-left">{award.award}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AwardsAndRecognitions;
