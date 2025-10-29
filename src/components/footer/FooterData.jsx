// footerData.js
const footerData = [
  {
    heading: 'About Us',
    about: {
      title: 'About SkyNetix Software Solutions Pvt. Ltd.',
      description: "Building Tomorrow's Technology, Today.",
      logo: '/skynetix.png',
      socialLinks: [
        { icon: 'facebook', url: 'https://facebook.com' },
        { icon: 'twitter', url: 'https://twitter.com' },
        { icon: 'instagram', url: 'https://instagram.com' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/company/devconssoftware-solutions-pvt-ltd/posts/?feedView=all' },
      ],
    }
  },
  {
    heading: 'Useful Links',
    usefulLinks: [
      { title: 'Home', path: '/' },
      { title: 'About Us', path: '/about' },
      { title: 'Services', path: '/services' },
      { title: 'US Healthcare', path: '/healthcare' },
      { title: 'Clients', path: '/clients' },
      // { title: 'Software', path: '/software' },
      // { title: 'Job/Internship', path: '/job-internship' },
      // { title: 'Career', path: '/career' },
      { title: 'Contact Us', path: '/contact' },
    ]
  },
  {
    heading: 'Our Services',
    services: [
      // 'Web Development', 'App Development', 'Outsourcing', 'UX Design', 'Product Management', 'Graphic Design', 'IoT Services', 'Digital Marketing'
      { title: "Software Engineering", path: "/services/software-engineering" },
       { title: "System Engineering", path: "/services/system-engineering" },
      { title: "Cloud DevOps Engineering", path: "/services/cloud-devops-engineering" },
      { title: "AI & Data Science", path: "/services/ai-and-data-science" },
      { title: "Machine Learning", path: "/services/machine-learning" },
      { title: "AI Integration", path: "/services/ai-integration" },
      { title: "NLP Services", path: "/services/nlp-services" },
      { title: "Big Data", path: "/services/big-data" },
      { title: "Cloud Consulting", path: "/services/cloud-consulting" },
      { title: "Cloud Migration", path: "/services/cloud-migration" },
      { title: "Cloud Architecture", path: "/services/cloud-architecture" },
      { title: "Security Compliance", path: "/services/security-compliance" },
      { title: "Monitoring & Ops", path: "/services/monitoring-ops" },
      { title: 'Contact Us', path: '/contact' },
    ]
  },
  {
    heading: 'Contact Us',
    contact: {
      address: 'Office No. 4-B, ... Pune- 411027',
      phone: '91-45386868',
      email: 'prititole@gmail.com',
    }
  }
];
export default footerData;
