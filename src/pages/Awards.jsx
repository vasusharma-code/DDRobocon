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
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-between mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">Awards and Recognitions</h1>
        <table className="min-w-full border border-gray-600">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 bg-gray-700 text-left text-xs text-white font-medium uppercase tracking-wider border border-gray-600">Sr. No.</th>
              <th className="px-6 py-3 bg-gray-700 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-600">Year</th>
              <th className="px-6 py-3 bg-gray-700 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-600">Agency</th>
              <th className="px-6 py-3 bg-gray-700 text-left text-xs font-medium text-white uppercase tracking-wider border border-gray-600">Award/Honor Name</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {awards.map((award, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-100 border border-gray-600 text-center">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 bg-gray-50 border border-gray-600 text-center">{award.year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 bg-gray-50 border border-gray-600 text-left">{award.agency}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 bg-gray-100 border border-gray-600 text-left">{award.award}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AwardsAndRecognitions;
