"use client";
import OnlyContact from "../common/OnlyContact";
import { useState, useEffect } from "react";

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
  export default function Developers() {
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
    }
    , []);

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
              <div className=""
              key={index}>
                <OnlyContact
                  name={developer.nickname}
                  email={developer.email}
                  //phone={developer.phone}
                  imageUrl={developer.image}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
