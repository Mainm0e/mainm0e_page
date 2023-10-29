//import ContactForm from "./ContactForm"
"use client";
import { useState, useEffect, use } from "react";
import DeveloperCv from "@/components/common/DeveloperCV";
import AOS from 'aos';



interface Developer {
  nickname: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  description: string;
  image: string;
  linkedin: string;
  github: string;
}

interface DevelopersData {
  developers: Developer[];
}

export default function DeveloperList() {
  const [data, setData] = useState<DevelopersData>({ developers: [] });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./data/developers.json")
      .then((response) => response.json())
      .then((jsonData: DevelopersData) => {
        setData(jsonData);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      });
  }
  , []);

  /* have right side and left side, right side for some text and right side for contact form */
  return (
    <>
    {isLoading ? (
      <div className="flex flex-row items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
        </div>
        ) : (
          <div className="container pt-16 mx-auto">
            <h1 className="text-3xl font-semibold mb-8">Our developers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.developers.map((developer, index) => (
                <DeveloperCv
                  key={index}
                  name={developer.nickname}
                  firstName={developer.firstName}
                  lastName={developer.lastName}
                  email={developer.email}
                  phone={developer.phone}
                  description={developer.description}
                  image={developer.image}
                  linkedin={developer.linkedin}
                  github={developer.github}
                />
                ))}
                </div>
                </div>
                )}
    </>  );
}
