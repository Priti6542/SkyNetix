import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import styles from './Contact.module.css'; // Import CSS module

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 py-10">
      <div className={`w-full max-w-3xl bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden ${styles.animateFadeIn}`}>
        {/* Info Section with bubbling background */}
        <div className={`md:w-1/2 p-8 flex flex-col justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 relative overflow-hidden group ${styles.groupHover}`}>
          {/* Bubble animation container */}
          <div className="absolute inset-0 pointer-events-none">
            <span className={`${styles.bubble} ${styles.bubble1}`} />
            <span className={`${styles.bubble} ${styles.bubble2}`} />
            <span className={`${styles.bubble} ${styles.bubble3}`} />
            <span className={`${styles.bubble} ${styles.bubble4}`} />
            <span className={`${styles.bubble} ${styles.bubble5}`} />
          </div>

          {/* Content above bubbles */}
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 relative z-10">Let's Get In Touch!</h2>
          <p className="text-gray-700 mb-8 relative z-10">We’re here to help! Fill out the form and we’ll get back to you soon.</p>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-center">
              <span className="material-icons text-indigo-600 mr-3">email</span>
              <span>mail@company.com</span>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-indigo-600 mr-3">phone</span>
              <span>+91-12345-67890</span>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-indigo-600 mr-3">location_on</span>
              <span>Pimple Saudagar</span>
            </li>
          </ul>

          <div className="mt-8 flex space-x-4 relative z-10">
            <a
              href="https://www.linkedin.com/company/jditbusinesssolution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:scale-110 transition flex items-center space-x-1"
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/jditbusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:scale-110 transition flex items-center space-x-1"
            >
              <FaTwitter size={24} />
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/jditbusinesssolution"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:scale-110 transition flex items-center space-x-1"
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <form className="space-y-6">
            <input
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              type="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
              rows={4}
              placeholder="Your Message"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
