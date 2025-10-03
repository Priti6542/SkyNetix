import React from 'react'
import Hero from '../components/home/hero/Hero'
import Card from '../components/home/card/Card'
import HomeFeature from '../components/home/features/HomeFeature'
import VideoSection from '../components/home/videosection/VideoSection'
import Company from '../components/home/company/Company'
// import IndustriesSection from '../components/home/industries/IndustriesSection'

const HomePage = () => {
  return (
    <div>
      <section data-speed="1.2">
        <Hero />
      </section>

      <section data-speed="0.9">
        <Card />
      </section>

      <section data-speed="1.1">
        <HomeFeature />
      </section>

      <section data-lag="0.3">
        <VideoSection />
      </section>

      <section data-speed="0.8">
        <Company />
      </section>

      <section data-speed="1.3">
        {/* <IndustriesSection /> */}
      </section>
    </div>
  )
}

export default HomePage
