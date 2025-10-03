// import React from 'react'
// import HeroSection from '../components/healthcare/hero/HeroSection'
// import Cards from '../components/healthcare/card/Cards'

// const HealthCare = () => {
//   return (
//     <div>
//       <HeroSection/>
//       <Cards/>
//     </div>
//   )
// }

// export default HealthCare



import React from 'react'
import HeroSection from '../components/healthcare/hero/HeroSection'
import Cards from '../components/healthcare/card/Cards'

const HealthCare = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section data-speed="1.1" className="py-6 bg-gradient-to-b from-gray-50 to-white">
        {/* <div className="max-w-7xl mx-auto px-6"> */}
          <HeroSection />
        {/* </div> */}
      </section>

      {/* Healthcare Services Cards */}
      <section data-lag="0.3" >
        {/* <div className="max-w-7xl mx-auto px-6"> */}
          {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Healthcare Services
          </h2> */}
          <Cards />
        {/* </div> */}
      </section>
    </div>
  )
}

export default HealthCare
