import React from 'react';
import { FaCloud, FaRobot, FaCogs, FaServicestack } from 'react-icons/fa';

export const CardData = [
  {
    heading: 'Our Services',
    description: 'Explore the diverse range of services we offer to meet your business needs.',
    icon: <FaServicestack className="text-4xl text-indigo-500" />,
  },
  {
    // image: 'https://i.pinimg.com/1200x/c7/e5/c3/c7e5c30ad1210439d29e3cc5d1ad5d58.jpg',
    title: 'Engineering',
    description:
      'Engineering is the backbone of every great product we create. Our expert team designs and develops software that is robust, scalable, and future-ready. We follow industry-best practices to ensure performance, security, and reliability. Whether it’s software architecture, product engineering, or system integration, we deliver with precision. At Skynetix, engineering excellence drives innovation and client success.',
    icon: <FaCogs className="text-4xl text-purple-500" />,
  },
  {
    // image: 'https://i.pinimg.com/474x/6d/15/0c/6d150c718ba3c98b02c9fa6f8a3efbac.jpg',
    title: 'AI & Data Science',
    description:
      'Artificial Intelligence is transforming the way businesses operate. At Skynetix, we build AI-driven solutions that automate tasks, enhance decision-making, and deliver smarter insights. From machine learning models to intelligent chatbots, our AI services unlock new opportunities. We help organizations optimize operations, personalize customer experiences, and stay ahead in the digital race.',
    icon: <FaRobot className="text-4xl text-pink-500" />,
  },
  {
    // image: 'https://i.pinimg.com/1200x/6c/79/9b/6c799b857cd4c9bec799f713d02ea150.jpg',
    title: 'Cloud Services',
    description:
      'The cloud is no longer the future – it’s the present. We help businesses migrate, manage, and scale with secure cloud technologies. Our cloud solutions ensure flexibility, cost efficiency, and business continuity. From cloud migration to DevOps automation, we cover the entire journey. With enterprise-grade security and scalability, we make your business cloud-ready for tomorrow.',
    icon: <FaCloud className="text-4xl text-blue-400" />,
  },
];
