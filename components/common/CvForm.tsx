"use client";
import React, { useState } from "react";

interface FormData {
  name: string;
  title: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    social: {
      facebook: string;
      linkedin: string;
      website: string;
      x: string;
    };
  };
  summary: string;
  educations: Array<{
    name: string;
    description: string;
    time: {
      startTime: string;
      endTime: string;
    };
  }>;
  experiences: Array<{
    where: string;
    time: {
      startTime: string;
      endTime: string;
    };
    title: string;
    description: string;
  }>;
  skills: Array<{
    title: string;
    rate: string;
  }>;
}

export default function CvForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    title: "",
    contact: {
      phone: "",
      email: "",
      address: "",
      social: {
        facebook: "",
        linkedin: "",
        website: "",
        x: "",
      },
    },
    summary: "",
    educations: [
      {
        name: "",
        description: "",
        time: {
          startTime: "",
          endTime: "",
        },
      },
    ],
    experiences: [
      {
        where: "",
        time: {
          startTime: "",
          endTime: "",
        },
        title: "",
        description: "",
      },
    ],
    skills: [
      {
        title: "",
        rate: "",
      },
    ],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
      case "title":
      case "summary":
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        break;
      case "phone":
      case "email":
      case "address":
        setFormData((prevData) => ({
          ...prevData,
          contact: { ...prevData.contact, [name]: value },
        }));
        break;
      default:
        break;
    }
  };

  /// Add functions to add new items to the arrays
  const handleArrayChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number,
    section: "educations" | "experiences" | "skills"
  ) => {
    const { name, value } = e.target;

    if (
      (name === "startTime" || name === "endTime") &&
      (section === "educations" || section === "experiences")
    ) {
      switch (section) {
        case "educations":
          setFormData((prevData) => ({
            ...prevData,
            ["educations"]: prevData["educations"].map((item, i) => {
              if (i === index) {
                return {
                  ...item,
                  time: { ...item.time, [name]: value },
                };
              }
              return item;
            }),
          }));
          break;
        case "experiences":
          setFormData((prevData) => ({
            ...prevData,
            ["experiences"]: prevData["experiences"].map((item, i) => {
              if (i === index) {
                return {
                  ...item,
                  time: { ...item.time, [name]: value },
                };
              }
              return item;
            }),
          }));
          break;
        default:
          break;
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [section]: prevData[section].map((item, i) => {
          if (i === index) {
            return { ...item, [name]: value };
          }
          return item;
        }),
      }));
      return;
    }
  };

  // * adding and undo Education part
  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      educations: [
        ...prevData.educations,
        {
          name: "",
          description: "",
          time: {
            startTime: "",
            endTime: "",
          },
        },
      ],
    }));
  };
  const undoEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      educations: prevData.educations.slice(0, prevData.educations.length - 1),
    }));
  };

  // * adding Experience part
  const addExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        {
          where: "",
          time: {
            startTime: "",
            endTime: "",
          },
          title: "",
          description: "",
        },
      ],
    }));
  };
  const undoExperience = () => {
    setFormData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.slice(
        0,
        prevData.experiences.length - 1
      ),
    }));
  };

  // * adding Skill part
  const addSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: [
        ...prevData.skills,
        {
          title: "",
          rate: "",
        },
      ],
    }));
  };
  const undoSkill = () => {
    setFormData((prevData) => ({
      ...prevData,
      skills: prevData.skills.slice(0, prevData.skills.length - 1),
    }));
  };

  return (
    <>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Contact</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.contact.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.contact.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.contact.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Summary</h1>
        <div className="mb-4">
          <label className="block mb-2 font-semibold" htmlFor="summary">
            Summary
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      </div>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Education</h1>
        {formData.educations.map((education, index) => (
          <div key={"education" + index} className="mb-4">
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`educationName-${index}`}
              >
                Name
              </label>
              <input
                type="text"
                id={`educationName-${index}`}
                name={`name`}
                value={education.name}
                onChange={(e) => handleArrayChange(e, index, "educations")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`educationTime-${index}`}
              >
                Time (Start - End)
              </label>
              <div className="flex">
                <select
                  id={`educationStartTime-${index}`}
                  name={`startTime`}
                  value={education.time.startTime}
                  onChange={(e) => handleArrayChange(e, index, "educations")}
                  className="w-1/2 px-3 py-2 border rounded mr-2"
                >
                  <option value="">Start Year</option>
                  {/* Add options for start years */}
                  {generateYearOptions()}
                </select>
                <select
                  id={`educationEndTime-${index}`}
                  name={`endTime`}
                  value={education.time.endTime}
                  onChange={(e) => handleArrayChange(e, index, "educations")}
                  className="w-1/2 px-3 py-2 border rounded ml-2"
                >
                  <option value="">End Year</option>
                  {/* Add options for end years */}
                  {generateYearOptions(parseInt(education.time.startTime))}
                </select>
              </div>
            </div>

            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`educationDescription-${index}`}
              >
                Description
              </label>
              <textarea
                id={`educationDescription-${index}`}
                name={`description`}
                value={education.description}
                onChange={(e) => handleArrayChange(e, index, "educations")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        ))}
        {formData.educations.length < 5 && (
          <button
            onClick={() => addEducation()}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
          >
            Add Education
          </button>
        )}
        {formData.educations.length > 1 && (
          <button
            onClick={() => undoEducation()}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
          >
            Undo
          </button>
        )}
      </div>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Experience</h1>
        {formData.experiences.map((experience, index) => (
          <div key={"experience" + index} className="mb-4">
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`experienceWhere-${index}`}
              >
                Where
              </label>
              <input
                type="text"
                id={`experienceWhere-${index}`}
                name={`where`}
                value={experience.where}
                onChange={(e) => handleArrayChange(e, index, "experiences")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`experienceTime-${index}`}
              >
                Time (Start - End)
              </label>
              <div className="flex">
                <select
                  id={`experienceStartTime-${index}`}
                  name={`startTime`}
                  value={experience.time.startTime}
                  onChange={(e) => handleArrayChange(e, index, "experiences")}
                  className="w-1/2 px-3 py-2 border rounded mr-2"
                >
                  <option value="">Start Year</option>
                  {/* Add options for start years */}
                  {generateYearOptions()}
                </select>
                <select
                  id={`experienceEndTime-${index}`}
                  name={`endTime`}
                  value={experience.time.endTime}
                  onChange={(e) => handleArrayChange(e, index, "experiences")}
                  className="w-1/2 px-3 py-2 border rounded ml-2"
                >
                  <option value="">End Year</option>
                  {/* Add options for end years */}
                  {generateYearOptions(parseInt(experience.time.startTime))}
                </select>
              </div>
            </div>
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`experienceTitle-${index}`}
              >
                Title
              </label>
              <input
                type="text"
                id={`experienceTitle-${index}`}
                name={`title`}
                value={experience.title}
                onChange={(e) => handleArrayChange(e, index, "experiences")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`experienceDescription-${index}`}
              >
                Description
              </label>
              <textarea
                id={`experienceDescription-${index}`}
                name={`description`}
                value={experience.description}
                onChange={(e) => handleArrayChange(e, index, "experiences")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        ))}
        {formData.experiences.length < 5 && (
          <button
            onClick={() => addExperience()}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
          >
            Add Experience
          </button>
        )}
        {formData.experiences.length > 1 && (
          <button
            onClick={() => undoExperience()}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
          >
            Undo
          </button>
        )}
      </div>
      <div className="max-w-lg mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Skill</h1>
        {formData.skills.map((skill, index) => (
          <div key={"skills" + index} className="mb-4">
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`skillTitle-${index}`}
              >
                Skill Title
              </label>
              <input
                type="text"
                id={`skillTitle-${index}`}
                name={`title`}
                value={skill.title}
                onChange={(e) => handleArrayChange(e, index, "skills")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="waiting">
              <label
                className="block mb-2 font-semibold"
                htmlFor={`skillRate-${index}`}
              >
                Skill Rate
              </label>
              <input
                type="text"
                id={`skillRate-${index}`}
                name={`rate`}
                value={skill.rate}
                onChange={(e) => handleArrayChange(e, index, "skills")}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
          </div>
        ))}
        {formData.skills.length < 5 && (
          <button
            onClick={() => addSkill()}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
          >
            Add Skill
          </button>
        )}
        {formData.skills.length > 1 && (
          <button
            onClick={() => undoSkill()}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
          >
            Undo
          </button>
        )}
      </div>
      {/* testing */}
      <button
        onClick={() => console.log(formData)}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
      >
        Submit
      </button>
    </>
  );
}

function generateYearOptions(startYear?: number): JSX.Element[] {
    const currentYear: number = new Date().getFullYear();
    let years: number[] = [];
  
    for (let year = currentYear; year >= 1900; year--) {
      years.push(year);
    }
  
    if (startYear) {
      years = years.slice(0, years.indexOf(startYear) + 1);
    }
  
    return years.map((year: number) => (
      <option key={year} value={year}>
        {year}
      </option>
    ));
  }
  

/* 
    *Name
    *Contact
        - phone
        - email
        - Address
        - sosial network
            - facebook
            - linkin
            - website
            - X
    *Summary
    *Educations
        - name
        - time
        - description
    *Experience
        - where
        - time
        - title
        - description
    *Skills
        - title
        - rate
*/
