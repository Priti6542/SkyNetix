import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import contactus from "../../assets/contactus.jpg"; // your hero background image

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      {/* Hero Section */}
      <div
        className="w-full h-64 flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${contactus})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white z-10">
          Contact Us
        </h1>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mt-[4rem] px-4">
        {/* Info Card */}
        <motion.div
          className="md:w-1/2 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden"
          style={{
            background: "rgba(82, 4, 82, 0.8)", // purple with 0.8 opacity
            backdropFilter: "blur(10px)" // optional blur for nice glass effect
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Bubbles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className={`${styles.bubble} ${styles[`bubble${i + 1}`]}`}
              />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative z-10">
            Let's Get In Touch!
          </h2>
          <p className="mb-8 relative z-10">
            We’re here to help! Fill out the form and we’ll get back to you soon.
          </p>

          <ul className="space-y-4 relative z-10">
            <li className="flex items-center space-x-3">
              <span className="material-icons text-white">email</span>
              <span>mail@company.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="material-icons text-white">phone</span>
              <span>+91-45386868</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="material-icons text-white">location_on</span>
              <span>Pimple Saudagar</span>
            </li>
          </ul>

          <div className="mt-8 flex space-x-4 relative z-60">
            <a
              href="https://www.linkedin.com/company/jditbusinesssolution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/jditbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition"
            >
              <FaTwitter size={24} />
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/jditbusinesssolution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-gray-300 transition"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Form Card */}
        <motion.div
          className="md:w-1/2 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden"
          style={{
            background: "rgba(82, 4, 82, 0.8)", // purple with 0.8 opacity
            backdropFilter: "blur(10px)" // optional blur for nice glass effect
          }}

          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white resize-none transition"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#7c3aed" }}
              className="w-full py-3 bg-white text-purple-700 font-bold rounded-xl text-lg transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <div className="w-full max-w-6xl mt-10 rounded-3xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.4420607984666!2d73.78349947496491!3d18.599176282509717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9f4ba19f5bb%3A0x631e505d3295e0bd!2sSMARTMATRIX%20Digital%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1740552081292!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
