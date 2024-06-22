import React, { useState } from "react";

const LeftPanel = ({ onSelect, selected }) => {
  const isSelected = (section) => selected === section;

  return (
    <div className="flex flex-col space-y-4">
      <button
        onClick={() => onSelect("ISTE-VESIT")}
        className={`p-4 ${
          isSelected("ISTE-VESIT")
            ? "bg-orangish text-occur"
            : "bg-pinkish text-white"
        } rounded-lg hover:bg-orangish hover:text-occur transition duration-300`}
      >
        ISTE-VESIT
      </button>
      <button
        onClick={() => onSelect("NISSAN CORPORATION")}
        className={`p-4 ${
          isSelected("NISSAN CORPORATION")
            ? "bg-orangish text-occur"
            : "bg-pinkish text-white"
        } rounded-lg hover:bg-orangish hover:text-occur transition duration-300`}
      >
        NISSAN CORPORATION
      </button>
      <button
        onClick={() => onSelect("SUD-LIFE-INSURANCE")}
        className={`p-4 ${
          isSelected("SUD-LIFE-INSURANCE")
            ? "bg-orangish text-occur"
            : "bg-pinkish text-white"
        } rounded-lg hover:bg-orangish hover:text-occur transition duration-300`}
      >
        SUD-LIFE-INSURANCE
      </button>
    </div>
  );
};

const MainComponent = () => {
  const [selected, setSelected] = useState("NISSAN CORPORATION");

  const handleSelect = (section) => {
    setSelected(section);
  };

  const experiences = {
    "ISTE-VESIT": {
      organization: "ISTE - VESIT",
      role: "Senior Technical Officer",
      timeframe: "2021 – 2024",
      responsibilities: [
        "Conducted Technical Workshops",
        "Contributing to Event Documentation",
        "Organized a 24-hour Hackathon for students",
      ],
    },
    "NISSAN CORPORATION": {
      organization: "Nissan Motor Corporation",
      role: "Data Analyst Intern",
      timeframe: "04/2023 - 04/2024",
      responsibilities: [
        "Automating the process of report generation",
        "Investigating the reasons behind higher-than-anticipated data consumption in vehicles",
      ],
      techStack: "Python - DataAnalysis",
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
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/4 flex justify-center items-center md:block">
        <div className="p-4">
          <LeftPanel onSelect={handleSelect} selected={selected} />
        </div>
      </div>
      <div className="w-full md:w-3/4 p-4 bg-creme flex items-center justify-center">
        {selected ? (
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg w-full">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
              {experiences[selected].organization}
            </h1>
            <p className="text-lg md:text-xl mb-2">
              <strong>Role:</strong> {experiences[selected].role}
            </p>
            <p className="text-lg md:text-xl mb-2">
              <strong>Timeframe:</strong> {experiences[selected].timeframe}
            </p>
            <p className="text-lg md:text-xl mb-2">
              <strong>Key Responsibilities:</strong>
            </p>
            <ul className="list-disc list-inside mb-4">
              {experiences[selected].responsibilities.map((resp, index) => (
                <li key={index} className="text-base md:text-lg">
                  {resp}
                </li>
              ))}
            </ul>
            {experiences[selected].techStack && (
              <p className="text-lg md:text-xl">
                <strong>Tech Stack:</strong> {experiences[selected].techStack}
              </p>
            )}
          </div>
        ) : (
          <h1 className="text-xl md:text-3xl text-center">
            Select an experience to view details.
          </h1>
        )}
      </div>
    </div>
  );
};

export default MainComponent;
