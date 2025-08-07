import React from "react";
// import avatar from "../assets/samer-awajan.png"; // optional: uncomment if using avatar image

const ContactSection = () => {
  return (
    <section className="flex flex-col md:flex-row h-6 bg-[#1a1a1a] text-white -mt-20">
      
      <div className="w-full md:w-1/2 p-8">
        <h2 className="text-4xl font-light mb-8">Contact Us</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">Full name *</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Email *</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-1">Phone number *</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Country *</label>
              <input
                type="text"
                value=""
                readOnly
                className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Company *</label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2"
            />
          </div>

          <div className="relative">
            <label className="block text-sm mb-1">Message *</label>
            <textarea
              rows="3"
              className="w-full bg-transparent border-b border-gray-500 focus:outline-none py-2 pr-8 resize-none"
            ></textarea>
            <div className="absolute right-2 bottom-2 text-gray-500">✎</div>
            <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
           <span className="text-sm text-white-600">
              I want to receive news and updates once in a while
            </span> 
            
          </div>
         <button className="mt-4 px-6 py-2 bg-white text-black rounded-full hover:bg-purple-900 transition">
         Contact Us
         </button>
          </div>
        </form>
      </div>

      {/* Testimonial Box with black border */}
      <div className="w-full md:w-1/2 p-8">
        <div className="border border-black rounded-lg p-8 bg-white text-gray-800">
          <h3 className="text-xl font-semibold mb-4">What our customers say</h3>

          <div className="text-5xl text-gray-400 mb-4 leading-none">❝</div>

          <p className="text-base leading-relaxed mb-6">
            ELEKS has been involved in the development of a number of our consumer-facing websites and
            mobile applications that allow our customers to easily track their shipments, get the
            information they need as well as stay in touch with us. We’ve appreciated the level of
            ELEKS'expertise, responsiveness and attention to details.
          </p>

          <div className="flex items-center gap-4 mb-6">
            {/* <img
              src={avatar}
              alt="Samer Awajan"
              className="w-16 h-16 rounded-full object-cover"
            /> */}
            <div>
              <p className="font-semibold">Samer Awajan</p>
              <p className="text-sm text-gray-500">CTO, Aramex</p>
            </div>
          </div>

          {/* <div className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
           <span className="text-sm text-gray-600">
              I want to receive news and updates once in a while
            </span> 
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
