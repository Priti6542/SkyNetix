// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from '../components/navbar/Navbar';
// import HomePage from '../pages/HomePage';
// import AboutusPage from '../pages/AboutusPage';
// import HealthCare from '../pages/HealthCare';
// import ServicesPage from '../pages/ServicesPage';
// import CareerPage from '../pages/CareerPage';
// import ContactPage from '../pages/ContactPage';
// import Footer from '../components/footer/Footer';
// import ClientPage from '../pages/ClientPage';
// import GsapParallex from '../components/gsapparallex/GsapParallex';

// const Routing = () => {
//   return (
//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<HomePage/>} />
//         <Route path="/about" element={<AboutusPage/>} />
//         <Route path="/clients" element={<ClientPage/>} />
//         <Route path="/healthcare" element={<HealthCare/>} />
//         <Route path="/services" element={<ServicesPage/>} />
//         <Route path="/career" element={<CareerPage/>} />
//         <Route path="/contact" element={<ContactPage/>} />
//       </Routes>

//       <Footer/>
//       {/* <GsapParallex/> */}
//     </Router>

//   );
// };

// export default Routing;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import HomePage from '../pages/HomePage';
import AboutusPage from '../pages/AboutusPage';
import HealthCare from '../pages/HealthCare';
import ServicesPage from '../pages/ServicesPage';
import AppDevelopment from '../components/services/engineering/appDevelopment';
import LegacyModernization from '../components/services/engineering/legacyModernization';
import CareerPage from '../pages/CareerPage';
import ContactPage from '../pages/ContactPage';
import ClientPage from '../pages/ClientPage';
import Footer from '../components/footer/Footer';

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/healthcare" element={<HealthCare />} />

        {/* Nested routes under services */}
        <Route path="/services" element={<ServicesPage />}>
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="legacy-modernization" element={<LegacyModernization />} />
        </Route>

        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
