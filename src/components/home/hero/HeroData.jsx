// HeroData.jsx
import heroimg1 from '../../../assets/heroimg1.jpg'
import heroimg2 from '../../../assets/heroimg2.jpg'
import heroimg3 from '../../../assets/heroimg3.jpg'
import heroimg4 from '../../../assets/heroimg4.jpg'

export const HeroData = [
  {
    id: 1,
    title: ["Your trusted partner from", "guranteed  software delivery"],
    description: [
      "Combining advanced technology and decades of industry insight, we design and",
      "develop bespoke full-cycle solutions tailored to deliver your unique software vision."
    ],
    // buttonText: "Learn More",
    text: "Awards",
    logos: [
      "https://eleks.com/wp-content/uploads/iaop-home-logo-white.svg",
      "https://eleks.com/wp-content/uploads/steve-home-logo-white.svg",
      "https://eleks.com/wp-content/uploads/webby-home-logo-white.svg"
    ],
    image: heroimg1,
  },
  {
  id: 2,
  title: ["Harness the full potential", "of your data"],
  description: [
    "Maximize your business potential by delving deeper into your data and",
    "gaining invaluable insights into your customers' needs"
  ],
  buttonText: "View Services",
  // services: [
  //   { name: "Business Intelligence", link: "/services/business-intelligence" },
  //   { name: "Artificial Intelligence", link: "/services/artificial-intelligence" },
  //   { name: "Machine Learning", link: "/services/machine-learning" },
  //   { name: "Data Strategy", link: "/services/data-strategy" },
  //   { name: "Intelligent Automation", link: "/services/data-strategy" },
  //   { name: "MLOps", link: "/services/mlops" },
  // ],
  image: heroimg2,
},

  {
    id: 3,
    title: ["Deliver industry-leading","financial services"],
    description: ["Strategically address risks while unlocking the full potential of", "Big Data for the financial services sector with our custom fintech solutions."],
    buttonText: "Explore industry solution",
    // text: "client",
    image: heroimg3,
  },
  {
    id: 4,
    title: ["Enable streamlined energy", "management"],
    description: ["Maximize productivity, increase accessibility, ensure safety, and promote sustainability" ,"throughout your energy ecosystem."],
    // buttonText: "Explore industry solution",
    // text: "client",
    // logos: "asdfgh",
    image: heroimg4,
  },
];
