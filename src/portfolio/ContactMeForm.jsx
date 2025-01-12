import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_caubj6h",
        "template_votze6o",
        e.target,
        "2kSJ0ZV8aln22Ak7S"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
          });
          // Clear the form after success
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("An error occurred. Please try again.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center text-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 p-8 shadow-lg max-w-xl w-full"
      >
        <h2 className="text-3xl font-bold text-lime-500 mb-6">
          Let's Collaborate!
        </h2>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="text-lime-500 text-lg font-semibold block"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="text-lime-500 text-lg font-semibold block"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="text-lime-500 text-lg font-semibold block"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter your message"
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 text-lg font-bold text-white bg-lime-500 rounded-md hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500"
        >
          Send Message
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default ContactMeForm;