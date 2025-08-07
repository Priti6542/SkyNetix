import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import AboutDropdown from '../about/aboutdropdown/AboutDropDown';
// import HealthcareDropdown from './dropdowns/HealthcareDropdown';
// import CareerDropdown from './dropdowns/CareerDropdown';
// import ContactDropdown from './dropdowns/ContactDropdown';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="text-black px-6 py-4 border-b border-gray-300 relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">SkyNetix</div>
        <ul className="flex space-x-6 text-medium font-medium relative">

          <li><Link to="/">Home</Link></li>
          <li
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/about">About</Link>
            {openDropdown === 'about' }
          </li>

          {/* <li
            onMouseEnter={() => handleMouseEnter('Clients')}
            onMouseLeave={handleMouseLeave}
          > */}
            <Link to="/clients">Clients</Link>
            {/* {openDropdown === 'clients' && <ClientsDropdown />}
          </li> */}

          {/* <li
            onMouseEnter={() => handleMouseEnter('healthcare')}
            onMouseLeave={handleMouseLeave}
          > */}
            <Link to="/healthcare">Healthcare</Link>
            {/* {openDropdown === 'healthcare' && <HealthcareDropdown />}
          </li> */}

          {/* <li
            onMouseEnter={() => handleMouseEnter('career')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/career">Career</Link>
            {openDropdown === 'career' && <CareerDropdown />}
          </li> */}

          {/* <li
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
          >
            <Link to="/contact">Contact</Link>
            {openDropdown === 'contact' && <ContactDropdown />}
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
