import React from "react";
import medicalcoding from "../../../assets/medicalcoding.jpg";
import medicalbilling from "../../../assets/medicalbilling.jpg";
import arcaller from "../../../assets/arcaller.jpg";
// import mb from "../assets/mb.jpg";
import { motion } from "framer-motion";
import {
  FaMoneyCheckAlt,
  FaHandsHelping,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

const Card = ({ id, image, title, description }) => (
  <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm m-4 overflow-hidden">
    <a href={`#${id}`}>
      <img
        className="rounded-t-lg w-full h-56 object-cover object-top"
        src={image}
        alt={title}
      />
    </a>
    <div className="p-5">
      <a href={`#${id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
      </a>
      <p className="mb-3 text-gray-700">{description}</p>
      <a
        href={`#${id}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-fuchsia-950 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-300"
      >
        Read more
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
);

const Benefit = ({ icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex items-start gap-4 p-5 bg-gray-50 rounded-lg shadow-sm hover:shadow-md"
  >
    <div className="mt-1 text-fuchsia-800">{icon}</div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  </motion.div>
);

const App = () => {
  const cardsData = [
    {
      id: "medical-coding",
      image: medicalcoding,
      title: "Medical Coding",
      description: "Medical Coding Services is a specialized function in the Revenue.",
    },
    {
      id: "medical-billing",
      image: medicalbilling,
      title: "Medical Billing",
      description: "Medical billing services have become indispensable for practitioners.",
    },
    {
      id: "ar-calling",
      image: arcaller,
      title: "AR Caller",
      description: "Accounts Receivable (AR) calling is a critical component in the financial ecosystem.",
    },
  ];

  return (
    <div className="px-4 py-10 bg-white scroll-smooth">
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 justify-items-center">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>

      <div className="mt-20 px-6 max-w-5xl mx-auto space-y-20">
        {/* Medical Coding Section */}
        <section id="medical-coding" className="scroll-mt-24">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Medical Coding</h3>
          <Card1/>
          <p className="text-2xl font-semibold text-blue-600 mb-6">Benefits</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Benefit
              icon={<FaMoneyCheckAlt size={24} />}
              title="Accurate Documentation"
              desc="Transforms detailed clinical notes into standardized codes for consistent recordkeeping."
            />
            <Benefit
              icon={<FaHandsHelping size={24} />}
              title="Regulatory Compliance"
              desc="Ensures adherence to ICD, CPT, and HCPCS coding standards."
              delay={0.2}
            />
            <Benefit
              icon={<FaPhoneAlt size={24} />}
              title="Faster Reimbursements"
              desc="Minimizes errors that cause payment delays or denials."
              delay={0.4}
            />
            <Benefit
              icon={<FaClock size={24} />}
              title="Enhanced Data Analysis"
              desc="Improves healthcare analytics and reporting accuracy."
              delay={0.6}
            />
          </div>
        </section>

        {/* Medical Billing Section */}
        <section id="medical-billing" className="scroll-mt-24">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Medical Billing</h3>
          <Card2/>
          <p className="text-2xl font-semibold text-blue-600 mb-6">Benefits</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Benefit
              icon={<FaMoneyCheckAlt size={24} />}
              title="Improved Claim Approval"
              desc="Reduces insurance denials through accurate billing practices."
            />
            <Benefit
              icon={<FaHandsHelping size={24} />}
              title="Revenue Optimization"
              desc="Maximizes income with clean claim submissions and follow-ups."
              delay={0.2}
            />
            <Benefit
              icon={<FaPhoneAlt size={24} />}
              title="Compliance Assurance"
              desc="Keeps billing in line with HIPAA and payer guidelines."
              delay={0.4}
            />
            <Benefit
              icon={<FaClock size={24} />}
              title="Patient Satisfaction"
              desc="Simplifies billing process and reduces out-of-pocket confusion."
              delay={0.6}
            />
          </div>
        </section>

        {/* AR Calling Section */}
        <section id="ar-calling" className="scroll-mt-24">
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">AR Calling</h3>
          <Card3/>
          <p className="text-2xl font-semibold text-blue-600 mb-6">Benefits</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Benefit
              icon={<FaMoneyCheckAlt size={24} />}
              title="Timely Collections"
              desc="Speeds up payments by following up on outstanding claims."
            />
            <Benefit
              icon={<FaHandsHelping size={24} />}
              title="Dispute Handling"
              desc="Effectively resolves claim rejections and payer objections."
              delay={0.2}
            />
            <Benefit
              icon={<FaPhoneAlt size={24} />}
              title="Cash Flow Stability"
              desc="Maintains healthy revenue by minimizing account receivable days."
              delay={0.4}
            />
            <Benefit
              icon={<FaClock size={24} />}
              title="Improved Communication"
              desc="Builds trust through consistent interaction with payers and patients."
              delay={0.6}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;