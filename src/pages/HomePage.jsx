import React from 'react'
import Hero from '../components/home/hero/Hero'
import Card from '../components/home/card/Card'
// import Contact from '../components/home/company/Company'
import HomeFeature from '../components/home/features/HomeFeature'
// import HomeFeature from '../components/home/homefeature/HomeFeature'
// import Features from '../components/about/features/Features'
// import MainLayout from '../components/mainlayout/MainLayout'

const HomePage = () => {
  return (
    <div>
      {/* <MainLayout> */}
        <Hero/>
        <Card/>
        <HomeFeature/>
        {/* <HomeFeature/> */}
        {/* <Features/> */}
        {/* <Contact/> */}
      {/* </MainLayout> */}
      
    </div>
  )
}

export default HomePage
