"use client";
import React, { useEffect, useState } from "react";

interface Skill {
  skill: string;
  experience: string;
  icon: string; // Icon class name or path
}

interface SkillData {
  frontendSkills: Skill[];
  backSkills: Skill[];
}

export default function AboutMe() {
  const [data, setData] = useState<SkillData>({
    frontendSkills: [],
    backSkills: [],
  });

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch("./data/skills.json")
      .then((response) => response.json())
      .then((jsonData: SkillData) => {
        // Set the data in state
        setData(jsonData);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  return (
    <div className="bg-secondary p-6">
      <div className="max-w-4xl mx-auto bg-primary p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">About Me</h1>
        <div className="flex flex-col md:flex-row">
          {/* Frontend Skills (Right Side) */}
          <div className="md:w-1/2 pl-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Frontend Skills
            </h2>
            <ul className="list-none pl-4">
              {data.frontendSkills.map((skill, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  <i className={skill.icon}></i> {skill.skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Skills (Left Side) */}
          <div className="md:w-1/2 pr-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Backend Skills
            </h2>
            <ul className="list-none pl-4 ">
              {data.backSkills.map((skill, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  <i className={skill.icon}></i> {skill.skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
