import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import skynetix from "../../assets/skynetix.png";
import Services from "../services/Services";

const Navbar = ({ showServicesPopup, setShowServicesPopup }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();

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
  }, [showServicesPopup, setShowServicesPopup]);

  return (
    <nav className="top-0 left-0 right-0 z-50 text-black px-6 py-4 border-b border-gray-300 bg-white overflow-hidden align-center">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={skynetix}
            alt="SkyNetix Logo"
            className="h-10 w-auto select-none hover:text-indigo-600 inline-block cursor-pointer"
            draggable={false}
          />
        </Link>

        <ul className="hidden md:flex flex-1 justify-center items-center space-x-6 font-medium text-medium">
          <li>
            <Link
              onMouseEnter={() => navigate("/")}
              className="hover:text-indigo-600 inline-block cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li
            onMouseEnter={() => navigate("/about")}
            className="hover:text-indigo-600 inline-block cursor-pointer"
          >
            About
          </li>
          <li
            onMouseEnter={() => navigate("/clients")}
            className="hover:text-indigo-600 inline-block cursor-pointer"
          >
            Clients
          </li>
          <li
            onMouseEnter={() => navigate("/healthcare")}
            className="hover:text-indigo-600 inline-block cursor-pointer"
          >
            Healthcare
          </li>
          <li
            onMouseEnter={() => setShowServicesPopup(true)}
            // onMouseLeave={() => setShowServicesPopup(false)}
            className="cursor-pointer"
          >
            <div className="hover:text-indigo-600 transition font-medium">
              Services
            </div>
          </li>


          <li
            onMouseEnter={() => navigate("/contact")}
            className="inline-block px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            Contact Us
          </li>
        </ul>

        {/* Mobile menu hamburger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden flex flex-col space-y-4 mt-4 px-6 pb-6 border-t border-gray-300 text-medium font-medium">
          <li>
            <Link
              to="/"
              className="block hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li
            onClick={() => {
              navigate("/about");
              setMobileMenuOpen(false);
            }}
            className="block hover:text-indigo-600 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => {
              navigate("/clients");
              setMobileMenuOpen(false);
            }}
            className="block hover:text-indigo-600 cursor-pointer"
          >
            Clients
          </li>
          <li
            onClick={() => {
              navigate("/healthcare");
              setMobileMenuOpen(false);
            }}
            className="block hover:text-indigo-600 cursor-pointer"
          >
            Healthcare
          </li>
          <li>
            <button
              onClick={() => {
                setShowServicesPopup(true);
                setMobileMenuOpen(false);
              }}
              className="block hover:text-indigo-600 font-medium"
            >
              Services
            </button>
          </li>
          <li
            onClick={() => {
              navigate("/contact");
              setMobileMenuOpen(false);
            }}
            className="block hover:text-indigo-600 cursor-pointer"
          >
            Contact Us
          </li>
        </ul>
      )}

      {/* Services popup modal */}
      {showServicesPopup && (
        <div
          className="fixed inset-0 z-50 flex justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="services-popup-title"
          tabIndex={-1}
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowServicesPopup(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setShowServicesPopup(false);
          }}
        >
          <div
            ref={popupRef}
            className="relative bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-[90vw] max-w-3xl max-h-[90vh] overflow-auto transform transition-transform duration-300 scale-95 animate-fadeIn"
            style={{ animationFillMode: "forwards", animationName: "fadeInScale" }}
            aria-labelledby="services-popup-title"
          >
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl focus:outline-none"
              onClick={() => setShowServicesPopup(false)}
              aria-label="Close popup"
            >
              ×
            </button>
            <h2 id="services-popup-title" className="sr-only">
              Services Information
            </h2>
            <Services />
          </div>

          <style jsx>{`
            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(0.95);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}</style>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
