import React from 'react';

const Teaching = () => {
  return ( 
    <div className="container mx-auto px-4 py-8 mt-10">
      <h1 className="text-2xl font-bold mb-4">Teaching Experience</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Positions Held</h2>
        <ul className="list-disc pl-5 space-y-2">
        <li>
            <strong>I.I.T. Delhi (Aug 2018 – Present)</strong>: Professor
          </li>
          <li>
            <strong>I.I.T. Delhi (Dec 2012 – Aug 2018)</strong>: Associate Professor
          </li>
          <li>
            <strong>I.I.T. Delhi (July 2007 - Dec 2012)</strong>: Assistant Professor
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Courses Taught</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>MEL120: Manufacturing Practices</li>
          <li>MCP101: Product Realization by Manufacturing</li>
          <li>MEP201: Mechanical Engineering Drawing</li>
          <li>MEP202: Design Innovation & Manufacturing</li>
          <li>MEL334: Low Cost Automation</li>
          <li>MEL411: Mechatronics</li>
          <li>MCL431: CAM & Automation</li>
          <li>MEL432: Microprocessor Applications in Manufacturing</li>
          <li>MEL749: Mechatronic Product Design</li>
          <li>MEL783: Automation in Manufacturing</li>
          <li>MCL784: Computer Aided Manufacturing</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Developed New Courses</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>MCL431: CAM & Automation</li>
        </ul>
      </div>
    </div>
  );
};

export default Teaching;
