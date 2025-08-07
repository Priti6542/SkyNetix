import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceDropdown.module.css'


const ServicesDropdown = ({ isOpen }) => {
  return (
    <div
      className={`${styles.dropdown} ${
        isOpen ? styles.open : ''
      }`}
    >
      <div className={styles.dropdownContent}>
        <h2>Our Services</h2>
        <ul>
          <li><Link to="/services/web-development">Web Development</Link></li>
          <li><Link to="/services/mobile-apps">Mobile Apps</Link></li>
          <li><Link to="/services/ui-ux">UI/UX Design</Link></li>
          <li><Link to="/services/cloud">Cloud Solutions</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default ServicesDropdown;
