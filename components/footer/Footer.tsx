import Link from "next/link";

export default function Footer() {
  return (
    /*       
        <!-- Foooter --> */
    <section className="bg-neutral">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <Link
              href="/#introduction"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Introduction
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/#services"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Services
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/#contact_form"
              className="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contact
            </Link>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <Link
            href="https://github.com/Mainm0e"
            className="text-gray-400 hover:text-gray-500"
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
          <Link
            href="https://www.linkedin.com/in/adithep-tamwisai-3b0a7525b/"
            className="text-gray-400 hover:text-gray-500"
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
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 Mainm0e. All rights reserved.
        </p>
      </div>
    </section>
  );
}
