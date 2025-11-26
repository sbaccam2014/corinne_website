import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhoIHelp from "../components/WhoIHelp";
import LearnMore from "../components/LearnMore";
import WhatSetsApart from "../components/WhatSetsApart";
import Bio from "../components/Bio";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const HomePage = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = ["sets-apart", "bio", "cta", "contact"];
    const els = ids.map((i) => document.getElementById(i)).filter(Boolean);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.55 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    // Handle hash navigation after page load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const onNav = (e, id) => {
    e?.preventDefault?.();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-slate-900 focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{ focusRingColor: '#9370DB' }}
      >
        Skip to main content
      </a>
      <Header active={active} onNav={onNav} />
      <main id="main-content" className="min-h-screen bg-white text-slate-900" style={{backgroundColor: '#ffffff'}}>
        <Hero />
        <LearnMore />
        <WhoIHelp onNav={onNav} />
        <WhatSetsApart />
        <Bio onNav={onNav} />
        <Testimonials />
        <CTA />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
