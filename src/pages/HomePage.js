import React, { useEffect, useState } from "react";
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

  const onNav = (e, id) => {
    e?.preventDefault?.();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white text-slate-900" style={{backgroundColor: '#ffffff'}}>
      <Hero active={active} onNav={onNav} />
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
  );
};

export default HomePage;
