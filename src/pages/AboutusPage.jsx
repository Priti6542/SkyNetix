// import React from 'react'
// // import Hero from '../components/about/hero/Hero'
// import VisionMissionValue from '../components/about/vissionmission/VisionMisionValue'
// // import Features from '../components/about/features/Features'
// // import CardComponent from '../components/about/card/CardComponent'
// import AboutUs from '../components/about/aboutus/AboutUs'
// import HeroSection from '../components/about/hero/Hero'
// import MainHero from '../components/about/mainhero/MainHero'
// // import Timeline from '../components/about/timeline/TimeLine'
// // import AboutUs from '../components/home/aboutus/AboutUs'

// const AboutusPage = () => {
//   return (
//     <div>
//       <MainHero/>
//       <HeroSection/>
//       {/* <Features/> */}
//       {/* <CardComponent/> */}
//       <AboutUs/>
//       {/* <Hero/> */}
//       <VisionMissionValue/>
//       {/* <Timeline/> */}
    
//       {/* <AboutUs/> */}
//     </div>
//   )
// }

// export default AboutusPage


import React from 'react'
import VisionMissionValue from '../components/about/vissionmission/VisionMisionValue'
import AboutUs from '../components/about/aboutus/AboutUs'
import HeroSection from '../components/about/hero/Hero'
import MainHero from '../components/about/mainhero/MainHero'

const AboutusPage = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Top Hero */}
      <section data-speed="1.2">
        <MainHero />
      </section>

      {/* Sub Hero / Introduction */}
      <section data-speed="0.9" className="bg-gray-50 py-12">
        <HeroSection />
      </section>

      {/* About Company */}
      <section data-lag="0.3" className="py-16">
        <AboutUs />
      </section>

      {/* Vision / Mission / Values */}
      <section data-speed="1.1" className="bg-gradient-to-r from-indigo-50 to-white py-20">
        <VisionMissionValue />
      </section>
    </div>
  )
}

export default AboutusPage
