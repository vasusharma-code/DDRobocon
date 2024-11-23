import React from "react";

const ContestRulesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-8 mt-14">
      {/* Contest Rules Title */}
      <div className="bg-green-600 text-white text-3xl font-bold py-4 px-6 rounded-lg shadow-lg">
        CONTEST RULES
      </div>

      {/* Rules Description Box */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-lg max-w-3xl text-center">
        <p className="text-lg font-semibold text-gray-700">
          DD Robocon India 2025 Rules
        </p>
        <p className="mt-4 text-gray-600">
          ABU Robocon 2025 Theme & Rules
        </p>
        <p className="mt-2 text-gray-500">
          Please refer to the{" "}
          <a
            href="https://aburobocon2025.mnb.mn/en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            ABU Robocon 2025 website
          </a>{" "}
          for the latest updates.
        </p>
      </div>
    </div>
  );
};

export default ContestRulesPage;
