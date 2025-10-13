import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import footerData from './FooterData';

const Footer = () => {
  const { about, usefulLinks, services, contact } = {
    about: footerData[0].about,
    usefulLinks: footerData[1].usefulLinks,
    services: footerData[2].services,
    contact: footerData[3].contact
  };

  return (
    <footer className="group bg-gradient-to-b from-gray-900 to-black text-gray-300 px-6 pt-16 pb-8 mt-5 transition-all duration-500 hover:bg-white hover:from-white hover:to-white hover:text-black relative">
      
      {/* 🔹 Top Horizontal Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gray-700 group-hover:bg-gray-300 transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mt-6">
        {/* About Section */}
        <div>
          <img src={about.logo} alt="SkyNetix Logo" className="h-12 mb-4 transition-none" />
          <h2 className="text-xl font-semibold text-white group-hover:text-black mb-2 transition-colors duration-500">
            {about.title}
          </h2>
          <p className="mb-6 text-sm leading-relaxed group-hover:text-black transition-colors duration-500">
            {about.description}
          </p>
          <div className="flex space-x-4">
            {about.socialLinks.map(({ icon, url }) => {
              const iconMap = {
                facebook: <FaFacebookF size={18} />,
                twitter: <FaTwitter size={18} />,
                instagram: <FaInstagram size={18} />,
                linkedin: <FaLinkedin size={18} />
              };
              return (
                <a
                  key={icon}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 text-white group-hover:text-black transition-colors transform hover:scale-110 duration-500"
                >
                  {iconMap[icon]}
                </a>
              );
            })}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold text-white group-hover:text-black mb-4 relative after:block after:h-[2px] after:w-12 after:bg-indigo-500 after:mt-1 transition-colors duration-500">
            Useful Links
          </h2>
          <ul className="space-y-2 text-sm">
            {usefulLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.path}
                  className="hover:text-indigo-400 hover:translate-x-1 transition inline-block group-hover:text-black duration-500"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold text-white group-hover:text-black mb-4 relative after:block after:h-[2px] after:w-12 after:bg-indigo-500 after:mt-1 transition-colors duration-500">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.title}>
                <a
                  href={service.path}
                  className="hover:text-indigo-400 hover:translate-x-1 transition inline-block group-hover:text-black duration-500"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white group-hover:text-black mb-4 relative after:block after:h-[2px] after:w-12 after:bg-indigo-500 after:mt-1 transition-colors duration-500">
            Contact Us
          </h2>
          <p className="text-sm mb-3 group-hover:text-black transition-colors duration-500">
            {contact.address}
          </p>
          <p className="text-sm mb-2 group-hover:text-black transition-colors duration-500">
            Phone:{" "}
            <a href={`tel:${contact.phone}`} className="hover:text-indigo-400">
              {contact.phone}
            </a>
          </p>
          <p className="text-sm group-hover:text-black transition-colors duration-500">
            Email:{" "}
            <a href={`mailto:${contact.email}`} className="hover:text-indigo-400">
              {contact.email}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500 group-hover:border-gray-300 group-hover:text-black transition-colors duration-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-indigo-400">SkyNetix Software Solutions Pvt. Ltd.</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
