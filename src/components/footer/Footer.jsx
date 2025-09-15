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
    <footer className="bg-gray-900 text-gray-300 px-4 pt-10 pb-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <img src={about.logo} alt="Devcons Logo" className="h-10 mb-3" />
          <h2 className="text-lg font-semibold text-white mb-1">{about.title}</h2>
          <p className="mb-4 text-sm">{about.description}</p>
          <div className="flex space-x-3 mt-2">
            {about.socialLinks.map(({ icon, url }) => {
              const iconMap = {
                facebook: <FaFacebookF size={20} />,
                twitter: <FaTwitter size={20} />,
                instagram: <FaInstagram size={20} />,
                linkedin: <FaLinkedin size={20} />
              };
              return (
                <a key={icon} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white transform hover:scale-110 transition">
                  {iconMap[icon]}
                </a>
              );
            })}
          </div>
        </div>
        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Useful Links</h2>
          <ul className="space-y-2">
            {usefulLinks.map(link => (
              <li key={link.title}>
                <a href={link.path} className="hover:text-white hover:underline transition">{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Our Services</h2>
          <ul className="space-y-2">
            {services.map(service => (
              <li key={service} className="hover:text-white transition">{service}</li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact Us</h2>
          <p className="text-sm mb-2">{contact.address}</p>
          <p className="text-sm mb-2">Phone: <a href={`tel:${contact.phone}`} className="hover:text-white transition">{contact.phone}</a></p>
          <p className="text-sm">Email: <a href={`mailto:${contact.email}`} className="hover:text-white transition">{contact.email}</a></p>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-400">
        © 2025 SkyNetix Software Solutions Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
