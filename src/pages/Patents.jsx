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
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Patents</h1>
        
        {/* Summary Table */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Patent Summary</h2>
          <table className="min-w-full bg-white shadow-md divide-y divide-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="w-1/3 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Type</th>
                <th className="w-1/3 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Filed</th>
                <th className="w-1/3 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Granted</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 text-sm text-centre font-medium text-gray-900 border border-gray-300">Total</td>
                <td className="px-4 py-2 text-sm text-centre text-gray-700 border border-gray-300">5</td>
                <td className="px-4 py-2 text-sm text-centre text-gray-700 border border-gray-300">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {/* Filed Patents Table */}
        <h2 className="text-xl font-semibold mb-4">Filed Patents</h2>
        <table className="min-w-full bg-white shadow-md divide-y divide-gray-300 mb-8">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Title</th>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Application No.</th>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Applicant</th>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Inventors</th>
            </tr>
          </thead>
          <tbody>
            {patents.filed.map((patent, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.title}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.applicationNo}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.applicant}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.inventors.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Granted Patents Table */}
        <h2 className="text-xl font-semibold mb-4">Granted Patents</h2>
        <table className="min-w-full bg-white shadow-md divide-y divide-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Title</th>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Application No.</th>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Applicant</th>
              <th className="w-1/4 px-4 py-2 text-centre text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-300">Inventors</th>
            </tr>
          </thead>
          <tbody>
            {patents.granted.map((patent, index) => (
              <tr key={index}>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.title}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.applicationNo}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.applicant}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border border-gray-300">{patent.inventors.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patents;
