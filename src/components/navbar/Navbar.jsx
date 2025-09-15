import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Services from "../services/Services";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showServicesPopup, setShowServicesPopup] = useState(false);
  const popupRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Close popup on outside click
  useEffect(() => {
    if (!showServicesPopup) return;
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowServicesPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showServicesPopup]);

  // Menu links (desktop and mobile)
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/clients", label: "Clients" },
    { to: "/healthcare", label: "Healthcare" },
    { to: "/contact", label: "ContactUS" },
    // { to: "/services", label: "Services" },
  ];

  return (
    <nav className="text-black px-6 py-4 border-b border-gray-300 relative z-50 bg-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide select-none">SkyNetix</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-medium font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="hover:text-indigo-600">{link.label}</Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setShowServicesPopup(true)}
              className="hover:text-indigo-600 transition font-medium"
            >
              Services
            </button>
          </li>
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 px-6 pb-6 border-t border-gray-300 text-medium font-medium">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className="block hover:text-indigo-600" onClick={() => setMobileMenuOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setShowServicesPopup(true);
                setMobileMenuOpen(false); // close mobile menu when opening popup
              }}
              className="block hover:text-indigo-600 font-medium"
            >
              Services
            </button>
          </li>
        </ul>
      )}

      {/* Animated Services Popup modal */}
      {showServicesPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 animate-fadeIn">
          <div
            ref={popupRef}
            className="relative bg-white rounded-xl shadow-2xl p-8 w-[90vw] max-w-3xl transition-transform duration-300 animate-fadeIn"
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setShowServicesPopup(false)}
              aria-label="Close"
            >
              ×
            </button>
            <Services />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
