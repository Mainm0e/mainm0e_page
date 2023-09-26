'use client'
import React, { useState } from 'react';
// make this component to client side render


export default function ContactForm() {
      // Define state variables to hold form values
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Here, you can save the form values or perform other actions
    // For this example, we'll just log the form values
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Message:', message);
  };


    return (
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
               
              />
              <p className="text-gray-600 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <p className="text-gray-600 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          {/* some text area */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-48 resize-none"
                id="grid-password"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                
              ></textarea>
              <p className="text-gray-600 text-xs italic">
                Please fill out this field.
              </p>
            </div>
          </div>
          {/* submit button */}
          <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
          </div>
        </form>
    );
}