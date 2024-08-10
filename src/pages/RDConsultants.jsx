import React from 'react';

const RDConsultants = () => {
  // Data for R&D consulting (PI)
  const rdConsultingPI = [
    {
      title: "Conduct 2nd Meeting of Programme Advisory Committee on Device Development Programme of DST at Department of Mechanical Engineering",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 1200000.00,
      startDate: "25-07-2017",
      endDate: "30-11-2017"
    },
    {
      title: "Design and Development of Magneto & Electro Rheological Systems",
      sponsorAgency: "Defence Materials & Stores Research & Development, India",
      amount: 7700000.00,
      startDate: "01-07-2017",
      endDate: "31-12-2019"
    },
    {
      title: "Design and Development of Automated Flexible Abrasive Flow Finishing (AF-AFF) Process for Finishing of Micro to Macro Complex Features",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 4307380.00,
      startDate: "09-09-2016",
      endDate: "08-09-2019"
    },
    {
      title: "Advanced CNC Micromachining System with Integrated Micro Tool Manufacturing",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 31743619.00,
      startDate: "11-05-2016",
      endDate: "10-05-2019"
    },
    {
      title: "Laser Based Marksmanship and Tactical Training Simulator (LMTTS)",
      sponsorAgency: "Simulator Development Division (Indian Army), India",
      amount: 4900000.00,
      startDate: "24-02-2015",
      endDate: "23-02-2018"
    },
    {
      title: "Design & Development of CNC Magnetorheological Finishing (MRF) System",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 12239200.00,
      startDate: "06-09-2012",
      endDate: "31-03-2016"
    },
    {
      title: "Magnetorheological Evaluation of Smart Polishing Fluid Properties and their Role in Nanofinishing",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 1260000.00,
      startDate: "16-03-2009",
      endDate: "15-03-2012"
    }
  ];

  // Data for R&D consulting (CP)
  const rdConsultingCP = [
    {
      title: "Energy Efficient Buildings: Technology with Intelligence",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 31841600.00,
      startDate: "03-04-2017",
      endDate: "02-04-2020"
    },
    {
      title: "Modelling of Advanced Materials for Simulation of Transformative Manufacturing Processes",
      sponsorAgency: "International Division, Dept. of Science & Techn., United Kingdom",
      amount: 10043600.00,
      startDate: "16-12-2014",
      endDate: "31-03-2018"
    },
    {
      title: "Development of Cryogenically Coupled Vibratory EDM Processes to Machine Hard Materials and Conducting Ceramics",
      sponsorAgency: "Department of Science & Technology (DST), India",
      amount: 3575000.00,
      startDate: "07-10-2010",
      endDate: "31-03-2014"
    },
    {
      title: "Adaptive Force Control of an Industrial Robot (KUKA KR-6) Equipped with Force/Torque Sensor (Sub-project #4 under the main project #RP02346)",
      sponsorAgency: "Board of Research in Nuclear Sciences (DAE), India",
      amount: 14300800.00,
      startDate: "04-05-2010",
      endDate: "31-07-2016"
    },
    {
      title: "Experimental Investigations and Analysis of Ultrasonic Assisted Magnetic Abrasive Finishing (UAMAF) Process",
      sponsorAgency: "Council of Scientific & Industrial Research, India",
      amount: 2735476.00,
      startDate: "15-11-2009",
      endDate: "30-11-2013"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      {/* R&D Consulting (PI) Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">R&D Consulting (PI)</h1>
        <table className="min-w-full bg-white shadow-md border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Sponsor Agency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">End Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {rdConsultingPI.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.sponsorAgency}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.startDate}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* R&D Consulting (CP) Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">R&D Consulting (CP)</h1>
        <table className="min-w-full bg-white shadow-md border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Sponsor Agency</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">Start Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase border border-gray-300">End Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {rdConsultingCP.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.sponsorAgency}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.startDate}</td>
                <td className="px-6 py-4 text-sm text-gray-700 border border-gray-300">{item.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RDConsultants;
