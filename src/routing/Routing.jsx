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

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from '../components/navbar/Navbar';
// import HomePage from '../pages/HomePage';
// import AboutusPage from '../pages/AboutusPage';
// import HealthCare from '../pages/HealthCare';
// import ServicesPage from '../pages/ServicesPage';
// import AppDevelopment from '../components/services/engineering/appDevelopment';
// import LegacyModernization from '../components/services/engineering/legacyModernization';
// import CareerPage from '../pages/CareerPage';
// import ContactPage from '../pages/ContactPage';
// import ClientPage from '../pages/ClientPage';
// import Footer from '../components/footer/Footer';
// import CloudMigrationSection from '../components/services/engineering/CloudMigration';
// import CodeOptimization from '../components/services/engineering/CodeOptimization';
// import TestingServices from '../components/services/engineering/TestingServices';
// import ApiDevlopment from '../components/services/engineering/ApiDevlopment';
// import DataAnalytics from '../components/services/ai&data/DataAnalytics';
// import MachineLearning from '../components/services/ai&data/MachineLearning';
// import AiIntegration from '../components/services/ai&data/AiIntegration';
// import DeepLearning from '../components/services/ai&data/DeepLearning';
// import BigData from '../components/services/ai&data/BigData';
// import CloudConsulting from '../components/services/cloud/CloudConsulting';
// import DevopsAutomation from '../components/services/cloud/DevopsAutomation';
// import MonitoringOps from '../components/services/cloud/Monitoring&Ops';
// import SecurityAudit from '../components/services/cloud/SecurityAudit';
// import MulticloudSupport from '../components/services/cloud/MulticloudSupport';

// const Routing = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutusPage />} />
//         <Route path="/clients" element={<ClientPage />} />
//         <Route path="/healthcare" element={<HealthCare />} />

//         {/* Nested routes under services */}
//         <Route path="/services" element={<ServicesPage />}>
//           <Route path="app-development" element={<AppDevelopment />} />
//           <Route path="legacy-modernization" element={<LegacyModernization />} />
//           <Route path="cloud-migration" element={<CloudMigrationSection/>} />
//           <Route path="code-optimization" element={<CodeOptimization/>} />
//           <Route path="testing-services" element={<TestingServices/>} />
//           <Route path="api-development" element={<ApiDevlopment/>} />

//           {/* AI & Data Services Routes */}
//           <Route path="data-analytics" element={<DataAnalytics />} />
//           <Route path="machine-learning" element={<MachineLearning />} />
//           <Route path="ai-integration" element={<AiIntegration />} />
//           <Route path="ai-integration" element={<AiIntegration />} />
//           <Route path="deep-learning" element={<DeepLearning />} />
//           <Route path="big-data" element={<BigData />} />

//           {/* Cloud Services Routes */}
//           <Route path="cloud-consulting" element={<CloudConsulting />} />
//           <Route path="devops-automation" element={<DevopsAutomation />} />
//           <Route path="monitoring-ops" element={<MonitoringOps />} />
//           <Route path="security-audit" element={<SecurityAudit />} />
//           <Route path="multicloud-support" element={<MulticloudSupport />} />

//         </Route>

//         <Route path="/career" element={<CareerPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// export default Routing;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

import HomePage from '../pages/HomePage';
import AboutusPage from '../pages/AboutusPage';
import ClientPage from '../pages/ClientPage';
import HealthCare from '../pages/HealthCare';
import ServicesPage from '../pages/ServicesPage';
import CareerPage from '../pages/CareerPage';
import ContactPage from '../pages/ContactPage';

import AppDevelopment from '../components/services/engineering/appDevelopment';
import LegacyModernization from '../components/services/engineering/legacyModernization';
import CloudMigrationSection from '../components/services/engineering/CloudMigration';
import CodeOptimization from '../components/services/engineering/CodeOptimization';
import TestingServices from '../components/services/engineering/TestingServices';
import ApiDevlopment from '../components/services/engineering/ApiDevlopment';

import DataAnalytics from '../components/services/ai&data/DataAnalytics';
import MachineLearning from '../components/services/ai&data/MachineLearning';
import AiIntegration from '../components/services/ai&data/AiIntegration';
import DeepLearning from '../components/services/ai&data/DeepLearning';
import BigData from '../components/services/ai&data/BigData';

import CloudConsulting from '../components/services/cloud/CloudConsulting';
import DevopsAutomation from '../components/services/cloud/DevopsAutomation';
import MonitoringOps from '../components/services/cloud/Monitoring&Ops';
import SecurityAudit from '../components/services/cloud/SecurityAudit';
import MulticloudSupport from '../components/services/cloud/MulticloudSupport';

const Routing = () => {
  const [showServicesPopup, setShowServicesPopup] = useState(false);

  return (
    <Router>
      {/* Pass popup state to Navbar */}
      <Navbar showServicesPopup={showServicesPopup} setShowServicesPopup={setShowServicesPopup} />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/healthcare" element={<HealthCare />} />

        <Route path="/services" element={<ServicesPage />}>
          <Route path="app-development" element={<AppDevelopment />} />
          <Route path="legacy-modernization" element={<LegacyModernization />} />
          <Route path="cloud-migration" element={<CloudMigrationSection />} />
          <Route path="code-optimization" element={<CodeOptimization />} />
          <Route path="testing-services" element={<TestingServices />} />
          <Route path="api-development" element={<ApiDevlopment />} />

          <Route path="data-analytics" element={<DataAnalytics />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="ai-integration" element={<AiIntegration />} />
          <Route path="deep-learning" element={<DeepLearning />} />
          <Route path="big-data" element={<BigData />} />

          <Route path="cloud-consulting" element={<CloudConsulting />} />
          <Route path="devops-automation" element={<DevopsAutomation />} />
          <Route path="monitoring-ops" element={<MonitoringOps />} />
          <Route path="security-audit" element={<SecurityAudit />} />
          <Route path="multicloud-support" element={<MulticloudSupport />} />
        </Route>

        <Route path="/career" element={<CareerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default Routing;
