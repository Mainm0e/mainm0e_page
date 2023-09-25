"use client";
import { useState, useEffect } from 'react';

export default function AboutMe() {
  // Sample frontend and backend skills
  const [data, setData] = useState({
    frontendSkills: [],
    backSkills: [],
  });

  useEffect(() => {
    // Fetch the JSON data from the file (adjust the path as needed)
    fetch('../API/skills/skills.json')
      .then((response) => response.json())
      .then((jsonData) => {
        // Set the data in state
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error loading JSON data:', error);
      });
  }, []);
 
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row">
          {/* Backend Skills (Left Side) */}
          <div className="md:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Backend Skills</h2>
            <ul className="list-disc pl-4">
              {data.backSkills.map((skill, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {skill.skill} - {skill.experience}
                </li>
              ))}
            </ul>
          </div>

          {/* Frontend Skills (Right Side) */}
          <div className="md:w-1/2 pl-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Frontend Skills</h2>
            <ul className="list-disc pl-4">
              {data.frontendSkills.map((skill, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {skill.skill} - {skill.experience}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
