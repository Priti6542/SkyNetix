import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    emailjs
      .sendForm(
        "service_70nizos",
        "template_4ynlcpe",
        form.current,
        "K6cyaZrhz1z6LTGHU"
      )
      .then(
        (result) => {
          setLoading(false);
          setMessageSent(true);
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setError("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="flex flex-col md:flex-row bg-[#1a1a1a] text-white -mt-20 px-6 md:px-12 py-16 gap-10">
      {/* Contact Form */}
      <div className="w-full md:w-1/2 bg-white text-gray-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-semibold mb-8 text-center md:text-left">
            Contact Us
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Full name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-transparent border-b border-gray-400 focus:border-purple-700 focus:outline-none py-2 placeholder-gray-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent border-b border-gray-400 focus:border-purple-700 focus:outline-none py-2 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Phone + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  required
                  className="w-full bg-transparent border-b border-gray-400 focus:border-purple-700 focus:outline-none py-2 placeholder-gray-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-medium mb-2">Country *</label>
                <input
                  type="text"
                  name="country"
                  placeholder="India"
                  required
                  className="w-full bg-transparent border-b border-gray-400 focus:border-purple-700 focus:outline-none py-2 placeholder-gray-500"
                />
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-2">Company *</label>
              <input
                type="text"
                name="company"
                placeholder="Your company name"
                required
                className="w-full bg-transparent border-b border-gray-400 focus:border-purple-700 focus:outline-none py-2 placeholder-gray-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col relative">
              <label className="text-sm font-medium mb-2">Message *</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message here..."
                required
                className="w-full bg-transparent border-b border-gray-400 focus:border-purple-700 focus:outline-none py-2 resize-none placeholder-gray-500"
              ></textarea>
              <span className="absolute right-2 bottom-2 text-gray-400">✎</span>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="subscribe" name="subscribe" className="w-4 h-4" />
              <label htmlFor="subscribe" className="text-sm text-gray-600">
                I want to receive news and updates once in a while
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full px-6 py-3 bg-purple-700 text-white font-medium rounded-full hover:bg-purple-900 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {messageSent && (
            <p className="mt-4 text-green-600 font-semibold">
              Message sent successfully! We will get back to you soon.
            </p>
          )}
          {error && (
            <p className="mt-4 text-red-600 font-semibold">{error}</p>
          )}
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="w-full md:w-1/2 bg-white text-gray-800 rounded-2xl shadow-lg p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-semibold mb-8 text-center md:text-left">
            What Our Customers Say
          </h3>

          <div className="text-5xl text-purple-700 mb-6 leading-none">❝</div>

          <p className="text-base leading-relaxed mb-8 text-gray-700">
            ELEKS has been involved in the development of a number of our
            consumer-facing websites and mobile applications that allow our
            customers to easily track their shipments, get the information they
            need as well as stay in touch with us. We’ve appreciated the level
            of ELEKS' expertise, responsiveness, and attention to detail.
          </p>

          <div className="flex items-center gap-4">
            {/* Avatar (optional) */}
            {/* <img
              src={avatar}
              alt="Samer Awajan"
              className="w-14 h-14 rounded-full object-cover"
            /> */}
            <div>
              <p className="font-semibold">Samer Awajan</p>
              <p className="text-sm text-gray-500">CTO, Aramex</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
