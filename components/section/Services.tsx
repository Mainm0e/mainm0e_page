"use client";
import React, { useEffect, useState } from "react";

interface info {
  Title: string;
  Description: string;
  Icon: string;
}

interface services {
  "web applications": info[];
}
interface services_data {
  my_services: services;
}

export default function Services() {
  const [data, setData] = useState<services_data>({
    my_services: {
      "web applications": [],
    },
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("./data/services.json")
      .then((response) => response.json())
      .then((jsonData: services_data) => {
        setData(jsonData);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <div className="flex flex-row items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <h1 className="text-3xl font-semibold mb-8">Services</h1>
            <div className="bg-accent flex flex-row w-full items-center justify-center border-4 border-primary mb-6">
              <span className="text-3xl py-4">Web applications</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.my_services["web applications"].map((service, index) => (
                <div
                  className="bg-accent p-4 border-2 border-primary shadow-md"
                  key={index}
                >
                  {/* Icon */}
                  <div className="text-3xl text-text-label mb-4">
                    <i className={service.Icon}></i>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-semibold mb-2">
                    {service.Title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600">{service.Description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
