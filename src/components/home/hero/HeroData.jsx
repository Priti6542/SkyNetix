// HeroData.jsx
import heroimg1 from '../../../assets/heroimg1.jpg'
import heroimg2 from '../../../assets/heroimg2.jpg'
import heroimg3 from '../../../assets/heroimg3.jpg'
import heroimg4 from '../../../assets/heroimg4.jpg'

export const HeroData = [
  {
    id: 1,
    title: ["Innovation"],
    description: [
      "At Skynetix, innovation is at the heart of everything we do.We believe in turning ideas into impactful digital solutions.Our team blends creativity with the latest technologies to deliver unique experiences.",
      "From concept to execution, we help businesses stay ahead in the digital era.Every project is an opportunity to innovate and create something extraordinary."
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
  title: ["Web & App Development"],
  description: [
    "Your business deserves a strong digital presence.We specialize in building responsive websites and intuitive mobile apps.",
    "Our development process ensures speed, scalability, and reliability.Whether it’s an e-commerce store or a business app, we bring your vision to life.With a focus on user experience, we create platforms that truly engage."
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
    title: ["Cloud & Security"],
    description: ["The future of business lies in the cloud, and we make that transition seamless.At Skynetix, we provide secure, scalable, and cost-effective cloud solutions.Our experts ensure your data is protected with enterprise-grade security.", 
      "We help organizations optimize infrastructure and enhance efficiency.With us, you’re always ready for tomorrow’s challenges."],
    buttonText: "Explore industry solution",
    // text: "client",
    image: heroimg3,
  },
  {
    id: 4,
    title: ["Business Growth"],
    description: ["Technology is more than just code – it’s a catalyst for growth.We empower businesses to scale faster and smarter with digital tools.Our tailored strategies focus on results that drive success." ,
      "From startups to enterprises, we support every stage of growth.Together, we build solutions that shape the future of your business."],
    // buttonText: "Explore industry solution",
    // text: "client",
    // logos: "asdfgh",
    image: heroimg4,
  },
];
