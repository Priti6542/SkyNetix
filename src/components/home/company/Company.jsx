import React from 'react';
import styles from './Company.module.css'

const companyLogos = [
    'https://www.devconsoftware.com/index.html',
    'https://smartmatrixds.com/assets/img/smds-logo.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://eleks.com/wp-content/uploads/london-design-home-award.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    'https://www.devconsoftware.com/index.html',
    'https://smartmatrixds.com/assets/img/smds-logo.jpeg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    'https://eleks.com/wp-content/uploads/london-design-home-award.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg',
    "https://eleks.com/wp-content/uploads/horizon-home-award.svg",
]

const Company = () => {
    return (
        <div className="bg-black text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Title Section */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Company Highlights</h2>
                    <p className="text-gray-400 mt-2">
                        We build lasting partnerships with our clients
                    </p>
                </div>

                {/* Counters */}
                <div className="flex justify-around text-center mb-10 mt-20">
                    <div>
                        <h3 className="text-4xl font-bold">1000+</h3>
                        <p className="text-gray-400">Projects Delivered</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">10+</h3>
                        <p className="text-gray-400">Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">25+</h3>
                        <p className="text-gray-400">Offices Worldwide</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">500+</h3>
                        <p className="text-gray-400">Clients</p>
                    </div>
                </div>

                {/* Scrollable Logos */}
                <div className="overflow-hidden whitespace-nowrap mt-30">
                    <div className={styles['scrolling-wrapper']}>
                        {[...companyLogos, ...companyLogos].map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Logo ${index}`}
                                className="h-16 w-auto mx-6 inline-block grayscale hover:grayscale-0 transition duration-300"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Company;
