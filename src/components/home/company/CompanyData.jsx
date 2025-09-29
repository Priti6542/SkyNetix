// companyHighlightsData.js
import drivesta from '../../../assets/drivesta.png'
import devcons from '../../../assets/devcons.png';
import cubeage from '../../../assets/cubeage.jpeg';

import nexuxctc_logo from '../../../assets/nexuxctc_logo.jpeg';
import newedge from '../../../assets/newedge.jpeg';
import jdit from '../../../assets/jdit.jpeg';
import dxn from '../../../assets/dxn.png';

export const companyHighlights = {
  title: "Company highlights",
  subtitle: "We build lasting partnerships with our clients",
  rows: [
    {
      value: "1000+",
      label: "projects delivered",
    },
    {
      value: "120+",
      label: "active clients, including Fortune 500 companies",
    },
    {
      value: "30+",
      label: "years on the market",
    },
    {
      value: "20",
      label: "offices and delivery centres globally",
    },
  ],
  logos: [
  { src: drivesta, alt: "img" },
  { src: devcons, alt: "img" },
  { src: cubeage, alt: "img" },
  { src: dxn, alt: "img" },
  { src: jdit, alt: "img" },
  { src: newedge, alt: "img" },
  { src: nexuxctc_logo, alt: "img" },
  // ... add more
]
};
