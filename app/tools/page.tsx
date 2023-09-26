"use client";
import React, { useState } from "react";

interface Skill {
  skill: string;
  experience: string;
  icon: string; // Icon class name or path
}

export default function Tools() {
  // Define state variables to hold skills, experience levels, and icon names
  const [skills, setSkills] = useState<string[]>(['']);
  const [experienceLevels, setExperienceLevels] = useState<string[]>(['']);
  const [iconNames, setIconNames] = useState<string[]>(['']); // Add iconNames state

  // Function to add a new skill, experience level, and icon name
  const addSkill = () => {
    setSkills([...skills, '']);
    setExperienceLevels([...experienceLevels, '']);
    setIconNames([...iconNames, '']); // Add an empty icon name
  };

  // Function to remove the last added skill, experience level, and icon name
  const undoSkill = () => {
    if (skills.length > 1) {
      const updatedSkills = [...skills];
      const updatedExperienceLevels = [...experienceLevels];
      const updatedIconNames = [...iconNames];
      updatedSkills.pop();
      updatedExperienceLevels.pop();
      updatedIconNames.pop();
      setSkills(updatedSkills);
      setExperienceLevels(updatedExperienceLevels);
      setIconNames(updatedIconNames);
    }
  };

  // Function to handle skill input change
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = e.target.value;
    setSkills(updatedSkills);
  };

  // Function to handle experience level input change
  const handleExperienceLevelChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const updatedExperienceLevels = [...experienceLevels];
    updatedExperienceLevels[index] = e.target.value;
    setExperienceLevels(updatedExperienceLevels);
  };

  // Function to handle icon name input change
  const handleIconNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedIconNames = [...iconNames];
    updatedIconNames[index] = e.target.value;
    setIconNames(updatedIconNames);
  };

  // Function to generate and download the JSON file
  const generateJSONFile = () => {
    const skillset: Skill[] = skills.map((skill, index) => ({
      skill,
      experience: experienceLevels[index],
      icon: iconNames[index], // Add icon name
    }));

    const jsonContent = JSON.stringify({ frontendSkills: skillset }, null, 2);

    const blob = new Blob([jsonContent], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my_skillset.json';
    a.click();
    URL.revokeObjectURL(url);
  };
   return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center py-16 px-32">
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">My Frontend Skillset</h2>
      {skills.map((skill, index) => (
       <div key={index} className="mb-4">
       <input
         type="text"
         placeholder="Skill"
         value={skill}
         onChange={(e) => handleSkillChange(e, index)}
         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
       />
       <input
         type="text" // Add input for icon name
         placeholder="Icon Name"
         value={iconNames[index]}
         onChange={(e) => handleIconNameChange(e, index)}
         className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
       />
       <select
         value={experienceLevels[index]}
         onChange={(e) => handleExperienceLevelChange(e, index)}
         className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
       >
         <option value="Beginner">Beginner</option>
         <option value="Intermediate">Intermediate</option>
         <option value="Advanced">Advanced</option>
       </select>
     </div>
      ))}
      <div className="flex justify-between">
        <button
          onClick={addSkill}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Skill
        </button>
        <button
          onClick={undoSkill}
          disabled={skills.length === 1}
          className={`${
            skills.length === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500'
          } text-white px-4 py-2 rounded-lg hover:bg-red-600`}
        >
          Undo
        </button>
        <button
          onClick={generateJSONFile}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Generate JSON
        </button>
      </div>
    </div>
  </main>
  );
 }