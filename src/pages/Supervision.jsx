import React from 'react';

const Supervision = () => {
  // Data for each section
  const thesisSummary = [
    { level: "M.Tech.", individual: 13, jointly: 2, total: 15 },
    { level: "M.S. (Orthopaedics)", individual: 0, jointly: 3, total: 3 },
    { level: "Ph.D.", individual: 8, jointly: 5, total: 13 },
    { level: "B.Tech Projects", individual: 10, jointly: 0, total: 10 }
  ];

  const phdSupervision = [
    {
      id: "2009MEZ8555",
      name: "Mahendra Singh Niranjan",
      title: "Experimental Investigations into Magnetorheological Polishing Fluid Synthesis",
      status: "Completed"
    },
    {
      id: "2011MEZ8361",
      name: "Dilshad Ahmad Khan",
      title: "Magnetorheological Finishing of Soft and Ductile Materials",
      status: "Submitted"
    },
    {
      id: "2013MEZ8466",
      name: "Faiz Iqbal",
      title: "Manufacturing Automation",
      status: "In Progress"
    },
    {
      id: "2014IDZ8007",
      name: "Vinod Mishra",
      title: "Fabrication of Freeform Optical Components and Finishing",
      status: "In Progress"
    },
    {
      id: "2014MEZ8018",
      name: "Zafar Alam",
      title: "Performance Improvement of Ball-End Magnetorheological Finishing Process",
      status: "In Progress"
    },
    {
      id: "2015MEZ8444",
      name: "Harish Kumar",
      title: "Micro Electric Discharge Turning",
      status: "In Progress"
    },
    {
      id: "2016MEZ8268",
      name: "Jitin Malhotra",
      title: "Precision Machine Control",
      status: "In Progress"
    },
    {
      id: "2016MEZ8553",
      name: "Ashish Kumar Sahu",
      title: "Laser Micromachining",
      status: "In Progress"
    }
  ];

  const mtechSupervision = [
    {
      id: "2008MEP2707",
      title: "Experimental Investigations into Micro EDM",
      student: "Ritesh Dadhich"
    },
    {
      id: "",
      title: "Mathematical Modelling of Finishing Forces During Ball End Magnetorheological Finishing Process",
      student: "Santosh Singh Rawat"
    },
    {
      id: "",
      title: "Development of CNC MRF Machine",
      student: "Vamsi Krishna"
    },
    {
      id: "",
      title: "Rheological Modeling of Magnetorheological Polishing Fluid",
      student: "Amitesh Kumar"
    },
    {
      id: "",
      title: "3D Surface Finishing by Ball End Magnetorheological Finishing",
      student: "Ravi Verma"
    },
    {
      id: "",
      title: "Design and Development of Nano-Pulsed EDM",
      student: "Zafar Alam"
    },
    {
      id: "2012MEP2714",
      title: "Development of MRF Machine Controller Using PLC",
      student: "Jayant Kumar"
    },
    {
      id: "2012MEP2716",
      title: "Magnetorheological Nano Finishing of Transparent Plastics",
      student: "Kartik Parsija"
    },
    {
      id: "2012MEP2709",
      title: "Analysis and Mathematical Modelling of MRF Process",
      student: "Ankush Mohan"
    },
    {
      id: "2012MEP3050",
      title: "Design and Development of Turn-MRF System",
      student: "Manish Kumar"
    },
    {
      id: "2013MEP2670",
      title: "Online Surface Roughness Measurement in Ball-End Magnetorheological Finishing Process",
      student: "Mayank Garg"
    },
    {
      id: "2016MEP2777",
      title: "Development of Cyber-physical System of a Linear Slide",
      student: "Madhur Shukla"
    },
    {
      id: "2016MEP2929",
      title: "Development of Cyber-Physical System for CNC BEMRF Machine",
      student: ""
    }
  ];

  const btechSupervision = [
    {
      id: "2007ME10473",
      title: "Virtual Instrumentation of Rheometer"
    },
    {
      id: "2006ME20576",
      title: "Development of SMD Pick And Place System"
    },
    {
      id: "2006ME20562, 2005ME10487",
      title: "Deterministic Magnetorheological - Finishing Setup"
    },
    {
      id: "2010ME20780, 2010ME20777",
      title: "Effect Of FDM Process Parameters On Mechanical Properties Of PLA Parts"
    },
    {
      id: "2010ME20778, 2010ME20914",
      title: "Part Program Parser For CNC MRF Controller Using Rockwell PLC"
    },
    {
      id: "2010ME20783, 2010ME20782",
      title: "Design And Development Of 5 Axis Ball End MRF Machine Controller Using Twin Cat Platform"
    },
    {
      id: "",
      title: "Two Axis Motion Controller Using PLC"
    },
    {
      id: "",
      title: "Design And Fabrication Of Power Controller For Electric Power Assisted Rickshaw"
    },
    {
      id: "",
      title: "Motion Controller For 3D MRF (Magnetorheological Finishing) Machine"
    },
    {
      id: "",
      title: "Optimization Of MRF (Magneto Rheological Finishing) for Glass"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 mt-10">
      {/* Supervised Thesis Summary Table */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Supervised Thesis Summary</h1>
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Individual Supervised</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Jointly Supervised</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Total</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {thesisSummary.map((item, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900">{item.level}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.individual}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.jointly}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ph.D. Supervision Table */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Ph.D. Supervision</h1>
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {phdSupervision.map((phd, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900">{phd.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{phd.name}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{phd.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{phd.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* M.Tech. Supervision Table */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">M.Tech. Supervision</h1>
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Student</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {mtechSupervision.map((mtech, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900">{mtech.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{mtech.title}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{mtech.student}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* B.Tech. Supervision Table */}
      <div className="mb-8 ">
        <h1 className="text-2xl font-bold mb-4">B.Tech. Supervision</h1>
        <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase border-b border-gray-400">Title</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {btechSupervision.map((btech, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="px-6 py-4 text-sm text-gray-900">{btech.id}</td>
                <td className="px-6 py-4 text-sm text-gray-700">{btech.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Supervision;
