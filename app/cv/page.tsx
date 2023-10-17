"use client";
import React, { useEffect, useState } from "react";
import CvTemplate from "@/components/common/CvTemplate";
import CvForm from "@/components/common/CvForm";

interface Fields {
  name: string;
  label: string;
}

interface Template {
  image: string;
  description: string;
  usage: string;
  required_fields: Fields[];
}

interface TemplateData {
  template1: Template;
  template2: Template;
}

export default function CV() {
  const [data, setData] = useState<TemplateData>({
    template1: {
      image: "",
      description: "",
      usage: "",
      required_fields: [],
    },
    template2: {
      image: "",
      description: "",
      usage: "",
      required_fields: [],
    },
  });
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Fetch the JSON data from the file
    fetch("./data/cv/template_info.json")
      .then((response) => response.json())
      .then((jsonData: TemplateData) => {
        // Set the data in state
        setData(jsonData);
        // Turn off loading state
        /* add 1s delay */
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error loading JSON data:", error);
      });
  }, []);

  return (
    <main className="">
        {isLoading ? ( // Check if data is loading
          // Display loading animation here
          <div className="flex flex-row items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <section id="templates" className="py-8 flex flex-col justify-center items-center">
              <CvTemplate
                image={data.template1.image}
                description={data.template1.description}
                usage={data.template1.usage}
                requirements={data.template1.required_fields}
              />
                <CvTemplate
                    image={data.template2.image}
                    description={data.template2.description}
                    usage={data.template2.usage}
                    requirements={data.template2.required_fields}
                />
            </section>
          </>
        )}

      <section id="form" className="py-8">
        <CvForm />
      </section>
    </main>
  );
}
