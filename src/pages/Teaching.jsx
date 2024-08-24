import React from 'react';

const Teaching = () => {
  const positions = [
    { period: 'Aug 2018 – Present', position: 'Professor', institute: 'I.I.T. Delhi' },
    { period: 'Dec 2012 – Aug 2018', position: 'Associate Professor', institute: 'I.I.T. Delhi' },
    { period: 'July 2007 - Dec 2012', position: 'Assistant Professor', institute: 'I.I.T. Delhi' },
  ];

  const courses = [
    'MEL120: Manufacturing Practices',
    'MCP101: Product Realization by Manufacturing',
    'MEP201: Mechanical Engineering Drawing',
    'MEP202: Design Innovation & Manufacturing',
    'MEL334: Low Cost Automation',
    'MEL411: Mechatronics',
    'MCL431: CAM & Automation',
    'MEL432: Microprocessor Applications in Manufacturing',
    'MEL749: Mechatronic Product Design',
    'MEL783: Automation in Manufacturing',
    'MCL784: Computer Aided Manufacturing',
  ];

  const developedCourses = [
    'MCL431: CAM & Automation',
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-2xl font-bold mb-4">Teaching Experience</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Positions Held</h2>
        <table className="min-w-full bg-white shadow-md divide-y divide-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Institute</th>
              <th className="px-4 py-2 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Period</th>
              <th className="px-4 py-2 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Position</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((pos, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-center text-sm font-medium text-gray-900 border border-gray-300">{pos.institute}</td>
                <td className="px-4 py-2 text-center text-sm text-gray-700 border border-gray-300">{pos.period}</td>
                <td className="px-4 py-2 text-center text-sm text-gray-700 border border-gray-300">{pos.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Courses Taught</h2>
        <ul className="list-disc pl-5 space-y-2">
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Developed New Courses</h2>
        <ul className="list-disc pl-5 space-y-2">
          {developedCourses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Teaching;
