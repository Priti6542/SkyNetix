import React, { useEffect } from 'react'
import './App.css'
import Routing from './routing/Routing'
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

function App() {

  useEffect(() => {
    // Prevent multiple instances during hot reloads
    if (ScrollSmoother.get()) {
      ScrollSmoother.get().kill();
    }

    // Create ScrollSmoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Routing />
      </div>
    </div>
  )
}

export default App
