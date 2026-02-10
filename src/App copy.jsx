import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import TestimonialsSmoothInfinite from "./components/TestimonialSection";
import TrustedBy from "./components/TrustedBy";
import Help from "./components/Help";
import Teams from "./components/Teams";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
  );

  const outlineRef = useRef(null);
  const dotRef = useRef(null);

  // REFS FOR CUSTOM CURSOR POSITION TRACKING
  const mouse = useRef({ x: 0, y: 0 });
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    const animate = () => {
      position.current.x += (mouse.current.x - position.current.x) * 0.1;
      position.current.y += (mouse.current.y - position.current.y) * 0.1;

      if (dotRef.current && outlineRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`;
        outlineRef.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Toaster />
      <Hero></Hero>
      <TrustedBy />
      <Help />
      <Portfolio></Portfolio>
      <Teams />
      {/* <Services></Services> */}
      <TestimonialsSmoothInfinite />
      <Contact />
      <Footer theme={theme} />

      {/* CUSTOM CURSOR RING */}
      <div
        ref={outlineRef}
        className="fixed top-0 left-0 h-10 w-10 rounded-full  border border-primary pointer-events-none z-[99999]"
        style={{ transition: "transform 0.1s ease-out" }}
      ></div>
      {/* CUSTOM CURSOR DOT  */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999]"
      ></div>
    </div>
  );
};

export default App;
