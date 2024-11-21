import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const username = form.name.trim();
    const user_email = form.email.trim();
    const user_message = form.message.trim();

    if (username === '' || user_email === '' || user_message === '') {
      setLoading(false);
      toast.error("Please fill all the fields.", {
        position: 'bottom-right',
      });
      return;
    }

    emailjs
      .send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        {
          from_name: username,
          to_name: "Omkar",
          reply_to: user_email,
          to_email: "asdgbvrsdgvfh@gmail.com",
          message: user_message,
        },
        EMAIL_JS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!", {
            position: 'bottom-right',
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Uh, oh! Something went wrong. Please try again later.", {
            position: 'bottom-right',
          });
        }
      );
  };

  return (
    <div className="relative z-0 bg-gray-900 w-full h-full flex flex-col items-center px-4 sm:px-0">
      {/* Adjust margin to ensure form is below navbar */}
      <div className="text-white w-full max-w-3xl bg-gray-800 p-8 rounded-2xl shadow-lg mt-20 mb-8"> {/* Changed mt-12 to mt-20 */}
        <p className="font-light text-gray-400">REACH OUT TO ME</p>
        <h2 className="text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">Contact.</h2>
        
        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="py-3 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Ex: abc@gmail.com"
              className="py-3 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-lg font-medium mb-2">Your Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Do you have anything to say?"
              className="py-3 px-4 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </label>

          <button
            type="submit"
            className="py-3 px-8 rounded-lg bg-pink-500 text-white font-bold shadow-md hover:bg-pink-600 transition duration-300 ease-in-out"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      {/* Footer is placed below the form */}
      <Footer />

      {/* Toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;
