import React from 'react';

const Patents = () => {
  const patents = {
    filed: [
      {
        title: "A device for magnetic Abrasive Finishing of multiple workpieces and Magnetic Abrasive Finishing Process",
        applicationNo: "2309/DEL/2008",
        applicant: "I.I.T. Kanpur",
        inventors: ["Sandeep R Nair", "J. Ramkumar", "Sunil Jha"]
      },
      {
        title: "Process of generating magnetically controlled ball end smart abrasive laden shape for finishing of 3D intricate shaped surfaces",
        applicationNo: "394/DEL/2010",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "P. M. Pandey", "Anant K. Singh"]
      },
      {
        title: "Patent of addition on 'An improved magnetorheological finishing apparatus for stable, scalable and continuous finishing application'",
        applicationNo: "2611/DEL/2011",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "P. M. Pandey", "Anant K. Singh"]
      },
      {
        title: "Process and System for Nano-Finishing a Surface",
        applicationNo: "201711038585",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "Faiz Iqbal"]
      },
      {
        title: "Bending of Orthopaedic Plates",
        applicationNo: "201711038563",
        applicant: "I.I.T. Delhi",
        inventors: ["Sunil Jha", "Lalit Maini"]
      }
    ],
    granted: [
      {
        title: "An abrasive flow finishing device, an abrasive flow finishing process and Magnetorheological polishing fluid",
        applicationNo: "1991/DEL/2005",
        applicant: "I.I.T. Kanpur",
        inventors: ["Sunil Jha", "Vijay Kumar Jain"]
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Patents</h1>
      
      {/* Summary Table */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Patent Summary</h2>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Filed</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Granted</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Total</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Filed Patents Table */}
      <h2 className="text-xl font-semibold mb-2">Filed Patents</h2>
      <table className="min-w-full divide-y divide-gray-200 mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application No.</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inventors</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patents.filed.map((patent, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.applicationNo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.applicant}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.inventors.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Granted Patents Table */}
      <h2 className="text-xl font-semibold mb-2">Granted Patents</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application No.</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inventors</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patents.granted.map((patent, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.applicationNo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.applicant}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{patent.inventors.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patents;
