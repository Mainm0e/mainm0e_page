"use client";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
// make this component to client side render

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
}

export default function ContactForm() {
  const { handleSubmit, control } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // display toast message
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full  bg-accent shadow-lg  pointer-events-auto flex ring-1 ring-black ring-opacity-5 border-2 border-primary`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full border-2 border-primary"
                src="./images/home.jpg"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-text-label">
                Adithep Tamwisai
              </p>
              <p className="mt-1 text-sm text-text-neutral">
                Sorry, this feature is not available yet. Please contact me via
                email or social media.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l-2 border-primary">
          <button
            onClick={() => toast.dismiss(t.id)}
            className=" border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium bg-btn-primary hover:bg-btn-hover text-text-hover focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    ));

    // Handle form submission here
  };

  return (
    <form className=" max-w-lg" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap w-full">
        <div className="w-full ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="email"
                className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary w-full"
                placeholder="example@email.com"
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full ">
        <div className=" w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="firstName"
          >
            First Name
          </label>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="firstName"
                className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary w-full"
                placeholder="Jane"
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full ">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                id="lastName"
                className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary w-full"
                placeholder="Doe"
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                id="message"
                className="appearance-none block  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-primary h-48 resize-none w-full"
                placeholder="Your message"
              />
            )}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            className="shadow bg-btn-primary hover:bg-btn-hover focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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

/* 
//!! very nice touster for contactform when submit i will use this later
toast.promise(
  saveSettings(settings),
   {
     loading: 'Saving...',
     success: <b>Settings saved!</b>,
     error: <b>Could not save.</b>,
   }
 );
 */
