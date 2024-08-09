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
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-4">Awards and Recognitions</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No.</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Agency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Award/Honor Name</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {awards.map((award, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{award.year}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{award.agency}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{award.award}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AwardsAndRecognitions;
