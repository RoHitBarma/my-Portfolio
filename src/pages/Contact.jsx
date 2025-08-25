import { useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="bg-gray-900 text-white py-16 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
        <p className="text-center text-gray-400 mb-12">
          I'm open to freelance work, collaborations, and full-time opportunities.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-700 outline-none"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-700 outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded bg-gray-700 outline-none"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition duration-300 p-3 rounded font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center mt-8 space-x-6 text-2xl">
          <a
            href="https://linkedin.com/in/rohit-barma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RoHitBarma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.youtube.com/@Fact-Ozone"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
