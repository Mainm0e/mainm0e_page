export default function Contact() {
  /* contact component */
  /* have right side and left side, right side for some text and right side for contact form */
  return (
    <main className="bg-gray-100 min-h-screen flex items-center justify-center py-16 px-32">
      {/* Left side */}
      <div className="w-full md:w-1/2 text-center md:text-left px-8 md:px-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Contact
        </h1>
        <p className="text-lg text-gray-600 mt-4">
        Do you have a question, a project idea, or just want to say hello? Feel free to reach out! I'd love to hear from you. Please use the form below to get in touch, and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Right side */}
      <div className="w-1/2 flex items-center justify-center">
        <form className="w-full max-w-lg">
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
                type="button"
              >
                Send
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </div>
    </main>
  );
}
