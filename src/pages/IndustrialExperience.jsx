import React from 'react';

const IndustrialExperience = () => {
  const experiences = [
    { company: 'I.I.T. Kanpur', period: 'Dec 2006 – July 2007', position: 'Sr. Project Engineer (BARC Sponsored Project)' },
    { company: 'TATA Motors', period: 'May 1998 – July 2000', position: 'Sr. Engineer (CAD/CAM)' },
  ];

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col justify-between mt-10">
      <div>
        <h1 className="text-2xl font-bold mb-4">Industrial Experience</h1>

        <div className="mb-8">
          <table className="min-w-full bg-white shadow-md divide-y divide-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Company</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Period</th>
                <th className="px-4 py-2 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Position</th>
              </tr>
            </thead>
            <tbody>
              {experiences.map((exp, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300">{exp.company}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{exp.period}</td>
                  <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{exp.position}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default IndustrialExperience;
