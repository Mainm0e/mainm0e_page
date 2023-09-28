"use client";
import React, { useState } from "react";
import ContactForm from "../common/ContactForm";
// make this component to client side render

export default function Contact() {
  /*   // Define state variables to hold form values
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here, you can save the form values or perform other actions
    // For this example, we'll just log the form values
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Message:", message);
  }; */

  return (
    <div className="container pt-16 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-text-label mb-4">Contact</h1>
          <p className="text-lg text-text-neutral">
            Do you have a question, a project idea, or just want to say hello?
            Feel free to reach out! I'd love to hear from you. Please use the
            form below to get in touch, and I'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Right side */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
