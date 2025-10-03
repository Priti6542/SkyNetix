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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 px-6 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* About Section */}
        <div>
          <img src={about.logo} alt="SkyNetix Logo" className="h-12 mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">{about.title}</h2>
          <p className="mb-6 text-sm leading-relaxed">{about.description}</p>
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
                  className="p-2 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors transform hover:scale-110"
                >
                  {iconMap[icon]}
                </a>
              );
            })}
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 relative after:block after:h-[2px] after:w-12 after:bg-indigo-500 after:mt-1">
            Useful Links
          </h2>
          <ul className="space-y-2 text-sm">
            {usefulLinks.map(link => (
              <li key={link.title}>
                <a
                  href={link.path}
                  className="hover:text-indigo-400 hover:translate-x-1 transition inline-block"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 relative after:block after:h-[2px] after:w-12 after:bg-indigo-500 after:mt-1">
            Our Services
          </h2>
          <ul className="space-y-2 text-sm">
            {services.map(service => (
              <li
                key={service}
                className="hover:text-indigo-400 hover:translate-x-1 transition inline-block"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4 relative after:block after:h-[2px] after:w-12 after:bg-indigo-500 after:mt-1">
            Contact Us
          </h2>
          <p className="text-sm mb-3">{contact.address}</p>
          <p className="text-sm mb-2">
            Phone:{" "}
            <a href={`tel:${contact.phone}`} className="hover:text-indigo-400">
              {contact.phone}
            </a>
          </p>
          <p className="text-sm">
            Email:{" "}
            <a href={`mailto:${contact.email}`} className="hover:text-indigo-400">
              {contact.email}
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} <span className="text-indigo-400">SkyNetix Software Solutions Pvt. Ltd.</span> — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
