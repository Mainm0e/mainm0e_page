"use client";
import React from "react";
import { useState } from "react";

export default function DeveloperCv(props: {
  key: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  image: string;
  linkedin: string;
  github: string;
  skills: {
    frontendSkills: {
      skill: string;
      experience: string;
      icon: string;
    }[];
    backSkills: {
      skill: string;
      experience: string;
      icon: string;
    }[];
    applications: {
      skill: string;
      experience: string;
      icon: string;
    }[];
  };
}) {
  const [showSkills, setShowSkills] = useState(false);
  const [showSummary, setShowSummary] = useState(true);

  const showData = () => {
    console.log("im testing 1+1 = null")
    if (showSkills == true) {
      setShowSkills(false);
    setShowSummary(true);
    } else if (showSummary == true) {
      setShowSkills(true);
      setShowSummary(false);
    }
  };

 /*  const toggleSummary = () => {
    setShowSkills(false);
    setShowSummary(true);
  }; */

  return (
    <section id={props.name} className="text-gray-600 body-font">
      <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* info part */}
          <div className="col-span-1 max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden ">
            <img
              src={props.image}
              alt={props.name}
              className="w-full h-64 object-cover object-center "
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{props.name}</h2>
              <p className="text-gray-600">{`${props.firstName} ${props.lastName}`}</p>
              <p className="text-gray-600">{props.email}</p>
              <p className="text-gray-600">{props.phone}</p>
              <div className="mt-4 flex justify-between">
                <a
                  href={props.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={props.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* summary part && skills*/}
          <div className="col-span-2 mx-auto cursor-pointer"
           onClick={showData}>

            {/* summary */}
            {showSummary && (
              <div className="p-4 bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-xl font-semibold">Me {props.name}</h2>
                <p className="text-gray-600">{props.description}</p>
              </div>
            )}
            {/* skills */}
            {showSkills && (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4 flex flex-row gap-16">
                  {/* Frontend Skills */}
                  <div>
                    <h3 className="text-lg font-semibold">Frontend Skills</h3>
                    <ul>
                      {props.skills.frontendSkills.map((skill, index) => (
                        <li key={index}>
                          <i className={skill.icon} />
                          <span className="ml-2">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Back-End Skills */}
                  <div>
                    <h3 className="text-lg font-semibold">Back-End Skills</h3>
                    <ul>
                      {props.skills.backSkills.map((skill, index) => (
                        <li key={index}>
                          <i className={skill.icon} />
                          <span className="ml-2">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Applications */}
                  <div>
                    <h3 className="text-lg font-semibold">Applications</h3>
                    <ul>
                      {props.skills.applications.map((skill, index) => (
                        <li key={index}>
                          <i className={skill.icon} />
                          <span className="ml-2">{skill.skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
