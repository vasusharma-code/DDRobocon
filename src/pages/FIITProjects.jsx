import React from 'react';

const FITTConsultancyProjects = () => {
  const projects = [
    {
      projectNo: "FT/05/190",
      title: "Indigenous development of MR Fluid and demonstration of Proto MR device",
      startDate: "2011-08-02",
      amount: "21,35,250",
      status: "Ongoing"
    },
    {
      projectNo: "FT/03/153",
      title: "Vetting of Technical Loss Computation of BYPL",
      startDate: "2010-11-11",
      amount: "4,26,000",
      status: "Closed"
    },
    {
      projectNo: "FT/03/153",
      title: "Recommendation on Technical Loss Reduction of BYPL",
      startDate: "2010-11-11",
      amount: "4,88,000",
      status: "Closed"
    },
    {
      projectNo: "FT/03/156/1",
      title: "Solar Panel Design and Optimization for running tubewell",
      startDate: "2011-07-11",
      amount: "4,84,768",
      status: "Closed"
    },
    {
      projectNo: "FT/03/156/2",
      title: "Solar Power Operated Water Pump",
      startDate: "2011-07-11",
      amount: "4,66,569",
      status: "Closed"
    },
    {
      projectNo: "FT/03/157",
      title: "Validation of Selection and location of Surge Protection devices in Electrical Circuit at BTS Sites",
      startDate: "2011-09-19",
      amount: "16,65,000",
      status: "Closed"
    },
    {
      projectNo: "FT/05/172",
      title: "Development of Power Distribution Simulator",
      startDate: "2010-12-15",
      amount: "46,65,690",
      status: "Closed"
    },
    {
      projectNo: "FT/05/208",
      title: "Experimental Investigation into Magnetorheological Finishing of Glass",
      startDate: "2013-02-20",
      amount: "9,84,000",
      status: "Closed"
    },
    {
      projectNo: "FT/03/1604",
      title: "Design and Development of Smart Energy Monitoring and Control Device",
      startDate: "2012-04-10",
      amount: "25,00,000",
      status: "Closed"
    },
    {
      projectNo: "FT/05/1670",
      title: "Functional Testing and Validation of Sub-station monitoring system developed by BSES Yamuna Power Ltd.",
      startDate: "2013-02-26",
      amount: "6,51,688",
      status: "Closed"
    },
    {
      projectNo: "FT/03/1820",
      title: "Techno-Economic Study for Mechanization of conventional food grain storage warehouse",
      startDate: "2015-06-09",
      amount: "11,86,522",
      status: "Closed"
    },
    {
      projectNo: "FT/03/1856",
      title: "Validation of Existing Tower Lightening and Earthing scheme as per Indian Standards",
      startDate: "2015-11-02",
      amount: "5,01,510",
      status: "Closed"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">FITT Consultancy Projects</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md table-auto">
            <thead className="bg-gray-400">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase border border-gray-600">Project No.</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase border border-gray-600">Title</th>
                <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase border border-gray-600">Start Date</th>
                <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase border border-gray-600">Amount</th>
                <th className="w-1/6 px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase border border-gray-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-400">
              {projects.map((project, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 text-left text-sm font-medium text-gray-900 border border-gray-600">{project.projectNo}</td>
                  <td className="px-4 py-2 text-left text-sm text-gray-700 border border-gray-600">{project.title}</td>
                  <td className="px-4 py-2 text-left text-sm text-gray-700 border border-gray-600">{project.startDate}</td>
                  <td className="px-4 py-2 text-left text-sm text-gray-700 border border-gray-600">{project.amount}</td>
                  <td className="px-4 py-2 text-left text-sm text-gray-700 border border-gray-600">{project.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FITTConsultancyProjects;
