

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


// import LegacyModernization from '../components/services/engineering/legacyModernization';
// import CloudMigrationSection from '../components/services/engineering/CloudMigration';
import SoftwareEngineering from '../components/services/engineering/SoftwareEngineering';
import SystemEngineering from '../components/services/engineering/SystemEngineering';
import CodeOptimization from '../components/services/engineering/CodeOptimization';
import TestingServices from '../components/services/engineering/TestingServices';
import ApiDevlopment from '../components/services/engineering/ApiDevlopment';

// import DataAnalytics from '../components/services/ai&data/DataAnalytics';
import MachineLearning from '../components/services/ai&data/MachineLearning';
import AiIntegration from '../components/services/ai&data/AiIntegration';
// import DeepLearning from '../components/services/ai&data/DeepLearning';
import BigData from '../components/services/ai&data/BigData';

import CloudConsulting from '../components/services/cloud/CloudConsulting';
// import DevopsAutomation from '../components/services/cloud/DevopsAutomation';
import MonitoringOps from '../components/services/cloud/Monitoring&Ops';
import SecurityAudit from '../components/services/cloud/SecurityAudit';
import MulticloudSupport from '../components/services/cloud/MulticloudSupport';
import CloudMigration from '../components/services/cloud/ClouMigration';
import CloudArchitecture from '../components/services/cloud/CloudArchitecture';
import SecurityCompliance from '../components/services/cloud/SecurityCompliance';
import AIDataScience from '../components/services/ai&data/Ai&DataScience';
import NlpSevice from '../components/services/ai&data/NlpService';
import CloudDevopsEngineering from '../components/services/engineering/CloudDevopsEngineering';


const Routing = () => {
  const [showServicesPopup, setShowServicesPopup] = useState(false);

  return (
    <Router>
      {/* Pass popup state to Navbar */}
      <Navbar
        showServicesPopup={showServicesPopup}
        setShowServicesPopup={setShowServicesPopup}
      />

      <Routes>
        <Route path="/" element={<HomePage setShowServicesPopup={setShowServicesPopup} />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/clients" element={<ClientPage />} />
        <Route path="/healthcare" element={<HealthCare />} />

        <Route path="/services" element={<ServicesPage />}>
          <Route path="software-engineering" element={<SoftwareEngineering />} />
          <Route path="system-engineering" element={<SystemEngineering />} />
          <Route path="cloud-devops-engineering" element={<CloudDevopsEngineering />} />
          {/* <Route path="cloud-migration" element={<CloudMigrationSection />} /> */}
          <Route path="code-optimization" element={<CodeOptimization />} />
          <Route path="testing-services" element={<TestingServices />} />
          <Route path="api-development" element={<ApiDevlopment />} />

          <Route path="ai-and-data-science" element={<AIDataScience />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="ai-integration" element={<AiIntegration />} />
          <Route path="nlp-services" element={<NlpSevice />} />
          {/* <Route path="deep-learning" element={<DeepLearning />} /> */}
          <Route path="big-data" element={<BigData />} />

          <Route path="cloud-consulting" element={<CloudConsulting />} />
          <Route path="cloud-migration" element={<CloudMigration />} />
          <Route path="cloud-architecture" element={<CloudArchitecture />} />
          <Route path="security-compliance" element={<SecurityCompliance />} />
          {/* <Route path="devops-automation" element={<DevopsAutomation />} /> */}
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
