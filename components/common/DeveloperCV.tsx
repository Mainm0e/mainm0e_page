"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

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
    console.log("im testing 1+1 = null");
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          {/* info part */}
          <div className="flex flex-col">
            <div className="col-span-1  bg-white rounded-lg shadow-lg overflow-hidden ">
              <img
                src={props.image}
                alt={props.name}
                className="w-full h-80 object-cover object-top
              "
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{props.name}</h2>
                <p className="text-gray-600">{`${props.firstName} ${props.lastName}`}</p>
                <p className="text-gray-600">{props.email}</p>
                <p className="text-gray-600">{props.phone}</p>
                <div className="mt-4 flex ">
                <Link
                    href="https://www.linkedin.com/in/adithep-tamwisai-3b0a7525b/"
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <svg
                      viewBox="0 0 128 128"
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                    >
                      <path d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"></path>
                    </svg>
                    <span className="sr-only">Linked In</span>
                  </Link>
                  <Link
                    href="https://github.com/Mainm0e"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>

                </div>
              </div>
            </div>
          </div>
          {/* summary part && skills*/}
          <div className=" lg:col-span-2 mx-auto flex flex-col justify-center items-center cursor-pointer ">
            {/* summary */}
            {showSummary && (
              <div
                className="p-4 bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-100 hover:animate-shake "
                onClick={showData}
              >
                <h2 className="text-xl font-semibold">Me {props.name}</h2>
                <p className="text-gray-600">{props.description}</p>
              </div>
            )}
            {/* skills */}
            {showSkills && (
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:bg-gray-200 hover:animate-shake"
                onClick={showData}
              >
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
