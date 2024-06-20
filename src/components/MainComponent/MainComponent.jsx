import React, { useState } from "react";

const LeftPanel = ({ onSelect }) => {
  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => onSelect("ISTE-VESIT")}
        className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        ISTE-VESIT
      </button>
      <button
        onClick={() => onSelect("NISSAN CORPORATION")}
        className="p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
      >
        NISSAN CORPORATION
      </button>
      <button
        onClick={() => onSelect("SUD-LIFE-INSURANCE")}
        className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
      >
        SUD-LIFE-INSURANCE
      </button>
    </div>
  );
};

const MainComponent = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (section) => {
    setSelected(section);
  };

  const experiences = {
    "ISTE-VESIT": {
      organization: "ISTE - VESIT",
      role: "Senior Technical Officer",
      timeframe: "2021 – Present",
      responsibilities: [
        "Conducted Technical Workshops",
        "Contributing to Event Documentation",
        "Organized a 24-hour Hackathon for students",
      ],
    },
    "NISSAN CORPORATION": {
      organization: "Nissan Motor Corporation",
      role: "Data Analyst Intern",
      timeframe: "04/2023 - Present",
      responsibilities: [
        "Automating the process of report generation",
        "Investigating the reasons behind higher-than-anticipated data consumption in vehicles",
      ],
    },
    "SUD-LIFE-INSURANCE": {
      organization: "SUD Life Insurance",
      role: "Software Developer Intern",
      timeframe: "2022 – 2023",
      responsibilities: [
        "Working on a Software product to automate data validation for multiple insurance policies",
      ],
      techStack: "Next.js, Python Flask",
    },
  };

  return (
    <div className="flex">
      <div className="w-1/4  flex justify-center items-center">
        <div className="p-4">
          <LeftPanel onSelect={handleSelect} />
        </div>
      </div>
      <div className="w-3/4 p-4 bg-creme flex items-center justify-center">
        {selected ? (
          <div className="bg-white p-8 rounded-lg shadow-lg w-full">
            <h1 className="text-4xl font-bold mb-4 text-center">
              {experiences[selected].organization}
            </h1>
            <p className="text-xl mb-2">
              <strong>Role:</strong> {experiences[selected].role}
            </p>
            <p className="text-xl mb-2">
              <strong>Timeframe:</strong> {experiences[selected].timeframe}
            </p>
            <p className="text-xl mb-2">
              <strong>Key Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              {experiences[selected].responsibilities.map((resp, index) => (
                <li key={index} className="text-lg">
                  {resp}
                </li>
              ))}
            </ul>
            {experiences[selected].techStack && (
              <p className="text-xl">
                <strong>Tech Stack:</strong> {experiences[selected].techStack}
              </p>
            )}
          </div>
        ) : (
          <h1 className="text-3xl text-center">
            Select an experience to view details.
          </h1>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
