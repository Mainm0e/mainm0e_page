"use client"
import React, { useState } from "react";
import { useEffect } from "react";

interface Project {
    name: string;
    description: string;
    url: string;
    tools: string[];
    image: string;
    release_date: string;
    status: string;
}

interface ProjectData {
    web_applications: Project[];
}

export default function AboutProject() {
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const [data, setData] = useState<ProjectData>({
        web_applications: [],
    });

    useEffect(() => {
        // Fetch the JSON data from the file
        fetch("./data/projects.json")
            .then((response) => response.json())
            .then((jsonData: ProjectData) => {
                // Set the data in state
                setData(jsonData);
                // Turn off loading state
                /* add 1s delay */
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            })
            .catch((error) => {
                console.error("Error loading JSON data:", error);
            });
    }, []);

  return (
    <div className="bg-primary p-6 rounded-lg shadow-lg">
    {isLoading ? ( // Check if data is loading
      // Display loading animation here
      <div className="flex flex-row items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>

      </div>
    ) : (
        <div className="flex flex-row flex-wrap justify-center gap-5">
        {data.web_applications.map((project, index) => (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                <img
                    src={project.image}
                    alt={project.name}
                />
                </figure>
                <div className="card-body">
                <h2 className="card-title">
                    {project.name}
                    <div className="badge badge-secondary">{project.status}</div>
                </h2>
                <p>{project.description}</p>
                <div className="card-actions justify-end">
                    {project.tools.map((tool, index) => (
                    <div key={index} className="badge badge-outline">{tool}</div>
                    ))}
                </div>
                </div>
            </div>
            ))}
      </div>
    )}
    </div>
    
  );
}

/* <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div> */