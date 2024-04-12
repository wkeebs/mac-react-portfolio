import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-12 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>
      <p className="text-xl mb-8">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <form className="max-w-xl mx-auto">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-gray-300 rounded-md"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-yellow-400 text-white px-4 py-2 rounded-md hover:bg-yellow-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
