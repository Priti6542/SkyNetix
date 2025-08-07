// src/components/Clients.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ClientCard from './ClientCard';

import aramex from '../../assets/aramex.png';
import grtgaz from '../../assets/grt.svg';
import eset from '../../assets/ESET.png';
import drax from '../../assets/DRAx.png';
import cubeage from '../../assets/cubeage.jpeg';
import Dell from '../../assets/Dell.png';
import dpd from '../../assets/dpd.png';
import google from '../../assets/google.png';
import HSBC from '../../assets/HSBC.png';
import infosys from '../../assets/infosys.png';
import motorola from '../../assets/motorola.jpeg';
import Oracle from '../../assets/Oracle.jpg';
import devcons from '../../assets/devcons.png';

const clientsData = [
  { logo: aramex, industry: 'Logistics', service: 'Delivery', name: 'Aramex' },
  { logo: grtgaz, industry: 'Oil & Gas', service: 'Infrastructure', name: 'GRTgaz' },
  { logo: eset, industry: 'IT & Software', service: 'Cybersecurity', name: 'ESET' },
  { logo: drax, industry: 'Oil & Gas', service: 'Energy', name: 'Drax' },
  { logo: cubeage, industry: 'IT & Software', service: 'Web Dev', name: 'Cubeage' },
  { logo: Dell, industry: 'IT & Software', service: 'Hardware', name: 'Dell' },
  { logo: dpd, industry: 'Logistics', service: 'Courier', name: 'DPD' },
  { logo: google, industry: 'IT & Software', service: 'Cloud', name: 'Google' },
  { logo: HSBC, industry: 'Finance', service: 'Banking', name: 'HSBC' },
  { logo: infosys, industry: 'IT & Software', service: 'Consulting', name: 'Infosys' },
  { logo: motorola, industry: 'Telecom', service: 'Communication', name: 'Motorola' },
  { logo: devcons, industry: 'IT & Software', service: 'Database', name: 'devcons' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
  { logo: Oracle, industry: 'IT & Software', service: 'Database', name: 'Oracle' },
];


const Clients = () => {
  const [industryFilter, setIndustryFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');

  const industries = ['All', ...new Set(clientsData.map((client) => client.industry))];
  const services = ['All', ...new Set(clientsData.map((client) => client.service))];

  const filteredClients = clientsData.filter((client) => {
    const industryMatch = industryFilter === 'All' || client.industry === industryFilter;
    const serviceMatch = serviceFilter === 'All' || client.service === serviceFilter;
    return industryMatch && serviceMatch;
  });

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-10xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-2">Our Clients</h2>
          <p className="text-gray-600 max-w-2xl">
            We are proud of contributing to the success of the world’s leading brands.
          </p>
        </div>

        <div className="flex flex-wrap gap-100 mb-10 text-sm text-gray-700">
          <div>
            <label htmlFor="industry" className="block mb-1 font-medium text-gray-500">Industries</label>
            <select
              id="industry"
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
            >
              {industries.map((industry) => (
                <option key={industry}>{industry}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="services" className="block mb-1 font-medium text-gray-500">Services</label>
            <select
              id="services"
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-5 py-2 focus:outline-none"
            >
              {services.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {filteredClients.map((client, index) => (
            <ClientCard key={index} logo={client.logo} name={client.name} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
