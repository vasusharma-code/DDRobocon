import React from 'react';

const OtherActivities = () => {
  return (
    <div className="min-h-screen flex flex-col container mx-auto px-4 py-8 mt-10">
      <h1 className="text-2xl font-bold mb-4">Other Activities</h1>

      <div className="flex-grow">
        <ul className="list-disc pl-5 space-y-2">
          <li className="relative pl-5">
            <span className="absolute left-[-1.5rem] top-0 text-black">•</span>
            Leading Institute team of faculty and students on Driverless Car development for the Mahindra Driverless Car Challenge.
          </li>
          <li className="relative pl-5">
            <span className="absolute left-[-1.5rem] top-0 text-black">•</span>
            Leading project on “Smart Manufacturing” funded by the Department of Heavy Industry & Automation Industry Association to set up a facility for Smart Manufacturing training and research. Setting up lab and Smart Factory with state-of-the-art technologies.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherActivities;
