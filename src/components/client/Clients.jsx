// // src/pages/ContactClients.jsx
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import ClientCard from "./ClientCard";

// // Assets (replace with your actual imports)
// import aramex from "../../assets/aramex.png";
// import grtgaz from "../../assets/grt.svg";
// import eset from "../../assets/ESET.png";
// import drax from "../../assets/DRAx.png";
// import cubeage from "../../assets/cubeage.jpeg";
// import dpd from "../../assets/dpd.png";
// import hsbc from "../../assets/HSBC.png";
// import oracle from "../../assets/Oracle.jpg"
// import devcons from "../../assets/devcons.png";
// import nexus from "../../assets/nexuxctc_logo.jpeg";
// import smartmatrix from "../../assets/smartmatrix.png";
// import nimbja from "../../assets/nimbja.jpeg";
// import shree from "../../assets/shree.jpeg";
// import JDIT from "../../assets/jdit.jpeg";
// import dxn from "../../assets/dxn.png";
// import smartsoft from "../../assets/smartsoft.jpeg";
// import quick from "../../assets/quick.png";
// import newedge from "../../assets/newedge.jpeg";
// import carnomia from "../../assets/drivesta.png";

// // Clients Data
// const clientsData = [
//   { logo: aramex, industry: "Logistics", service: "Delivery", name: "Aramex" },
//   { logo: grtgaz, industry: "Oil & Gas", service: "Infrastructure", name: "GRTgaz" },
//   { logo: eset, industry: "IT & Software", service: "Cybersecurity", name: "ESET" },
//   { logo: drax, industry: "Oil & Gas", service: "Energy", name: "Drax" },
//   { logo: cubeage, industry: "IT & Software", service: "Web Dev", name: "Cubeage" },
//   { logo: dpd, industry: "Logistics", service: "Courier", name: "DPD" },
//   { logo: hsbc, industry: "Finance", service: "Banking", name: "HSBC" },
//   { logo: devcons, industry: "IT & Software", service: "Database", name: "Devcons" },
//   { logo: oracle, industry: "IT & Software", service: "Database", name: "Oracle" },
//   { logo: nexus, industry: "IT & Software", service: "Web Dev", name: "Nexus" },
//   { logo: smartmatrix, industry: "IT & Software", service: "Web Dev", name: "Smart Matrix" },
//   { logo: nimbja, industry: "IT & Software", service: "Web Dev", name: "Nimbja" },
//   { logo: shree, industry: "IT & Software", service: "Web Dev", name: "Shree" },
//   { logo: JDIT, industry: "IT & Software", service: "Web Dev", name: "JDIT" },
//   { logo: dxn, industry: "IT & Software", service: "Web Dev", name: "DXN" },
//   { logo: smartsoft, industry: "IT & Software", service: "Web Dev", name: "Smart Software Services" },
//   { logo: quick, industry: "IT & Software", service: "Web Dev", name: "Quick" },
//   { logo: newedge, industry: "IT & Software", service: "Web Dev", name: "NewEdge" },
//   { logo: carnomia, industry: "Software", service: "Web Dev", name: "Carnomia" },
// ];

// // Animations
// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };
// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.15 } },
// };
// const cardSlideUp = {
//   hidden: { opacity: 0, y: 60, scale: 0.95 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const ContactClients = () => {
//   const [industryFilter, setIndustryFilter] = useState("All");
//   const [serviceFilter, setServiceFilter] = useState("All");

//   // const industries = ["All", ...new Set(clientsData.map((c) => c.industry))];
//   // const services = ["All", ...new Set(clientsData.map((c) => c.service))];

//   const filteredClients = clientsData.filter((client) => {
//     const industryMatch = industryFilter === "All" || client.industry === industryFilter;
//     const serviceMatch = serviceFilter === "All" || client.service === serviceFilter;
//     return industryMatch && serviceMatch;
//   });

//   return (
//     <div className="bg-gray-900 min-h-screen text-white mb-8">
//       {/* Clients Section */}
//       <section className="px-6 py-16 bg-gray-50 text-gray-900">
//         <div className="max-w-7xl mx-auto">
//           {/* Heading */}
//           <motion.div
//             className="mb-8 text-center"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//           >
//             <h2 className="text-3xl font-semibold mb-2">Our Clients</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               We are proud of contributing to the success of the world’s leading brands.
//             </p>
//           </motion.div>

         

//           {/* Client Grid */}
//           <motion.div
//             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {filteredClients.map((client, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardSlideUp}
//                 whileHover={{ scale: 1.05, rotate: 1 }}
//                 whileTap={{ scale: 0.97 }}
//                 className="transition-transform"
//               >
//                 <ClientCard logo={client.logo} name={client.name} />
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactClients;




// src/pages/ContactClients.jsx
import React from "react";
import { motion } from "framer-motion";
import ClientCard from "./ClientCard";

// Assets
import aramex from "../../assets/aramex.png";
import grtgaz from "../../assets/grt.svg";
import eset from "../../assets/ESET.png";
import drax from "../../assets/DRAx.png";
import cubeage from "../../assets/cubeage.jpeg";
import dpd from "../../assets/dpd.png";
import hsbc from "../../assets/HSBC.png";
import oracle from "../../assets/Oracle.jpg";
import devcons from "../../assets/devcons.png";
import nexus from "../../assets/nexuxctc_logo.jpeg";
import smartmatrix from "../../assets/smartmatrix.png";
import nimbja from "../../assets/nimbja.jpeg";
import shree from "../../assets/shree.jpeg";
import JDIT from "../../assets/jdit.jpeg";
import dxn from "../../assets/dxn.png";
import smartsoft from "../../assets/smartsoft.jpeg";
import quick from "../../assets/quick.png";
import newedge from "../../assets/newedge.jpeg";
import carnomia from "../../assets/drivesta.png";

// Clients Data
const clientsData = [
  { logo: aramex, name: "Aramex" },
  { logo: grtgaz, name: "GRTgaz" },
  { logo: eset, name: "ESET" },
  { logo: drax, name: "Drax" },
  { logo: cubeage, name: "Cubeage" },
  { logo: dpd, name: "DPD" },
  { logo: hsbc, name: "HSBC" },
  { logo: devcons, name: "Devcons" },
  { logo: oracle, name: "Oracle" },
  { logo: nexus, name: "Nexus" },
  { logo: smartmatrix, name: "Smart Matrix" },
  { logo: nimbja, name: "Nimbja" },
  { logo: shree, name: "Shree" },
  { logo: JDIT, name: "JDIT" },
  { logo: dxn, name: "DXN" },
  { logo: smartsoft, name: "Smart Software Services" },
  { logo: quick, name: "Quick" },
  { logo: newedge, name: "NewEdge" },
  { logo: carnomia, name: "Carnomia" },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardSlideUp = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactClients = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
            Our Valued Clients
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            We are proud to have partnered with some of the world’s leading brands to deliver outstanding solutions.
          </p>
        </motion.div>

        {/* Client Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clientsData.map((client, index) => (
            <motion.div
              key={index}
              variants={cardSlideUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-all"
            >
              <ClientCard logo={client.logo} name={client.name} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ContactClients;
