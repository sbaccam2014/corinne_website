import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css"; // Tailwind v4

// FadeIn helper
const FadeIn = ({ children, delay = 0, y = 18 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// Nav — no “Approach”
const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
  { id: "faq", label: "FAQ" },
];

export default function CorinneTherapySite() {
  const [active, setActive] = useState("home");

  // Scroll spy
  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.55 }
    );
    sections.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const onNav = (e, id) => {
    e?.preventDefault?.();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO --------------------------------------------------------------- */}
      <section
        id="home"
        className="relative h-[92vh] min-h-[560px] flex items-center justify-center text-center"
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/bridge_4.jpg')" }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-black/55"
          aria-hidden="true"
        />

        {/* Top nav */}
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto max-w-7xl px-5 py-5 flex items-center justify-between gap-6">
            <a
              href="#home"
              onClick={(e) => onNav(e, "home")}
              className="font-black tracking-widest text-xl md:text-2xl whitespace-nowrap"
              style={{ fontVariant: "small-caps" }}
            >
              Corinne Spangler-Baccam, MA, LMHC, CEIS
            </a>
            <nav className="hidden lg:flex items-center gap-6 text-[13px] font-semibold tracking-wide">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => onNav(e, n.id)}
                  className={`hover:opacity-90 ${
                    active === n.id ? "underline underline-offset-8" : ""
                  }`}
                >
                  {n.label.toUpperCase()}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={(e) => onNav(e, "contact")}
              className="rounded-full bg-white text-black px-4 py-2 text-xs md:text-sm font-semibold hover:bg-white/90"
            >
              BOOK A CONSULTATION
            </a>
          </div>
        </div>

        {/* Hero caption */}
        <div className="relative z-10 max-w-2xl px-4">
          <FadeIn>
            <h1 className="text-3xl md:text-5xl font-semibold drop-shadow">Bridge To Wellness</h1>
            <p className="mt-3 text-white/90">
              Individualized consultation for children, adolescents, and families.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                onClick={(e) => onNav(e, "contact")}
                className="rounded-full bg-white text-black px-5 py-2 text-sm font-semibold hover:bg-white/90"
              >
                GET STARTED
              </a>
              <a
                href="#services"
                onClick={(e) => onNav(e, "services")}
                className="rounded-full border border-white/60 px-5 py-2 text-sm font-semibold hover:bg-white/10"
              >
                EXPLORE SERVICES
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES — Bridging the Gap --------------------------------------- */}
      <section id="services" className="bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn>
            <h2 className="text-2xl font-semibold">Bridging the Gap</h2>
            <p className="mt-2 text-neutral-800 font-medium">
              Corinne Spangler-Baccam, MA, LMHC, CEIS
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              Providing individualized consultation services supporting the social-emotional
              development and behavioral health of children, adolescents, and families with families
              and for families.
            </p>

            <p className="mt-6 text-neutral-700 leading-relaxed">
              Welcome to my site. I am glad you are here! If you came along my name or found this
              page, you are looking for support for either yourself, a loved one, or for your child.
              You may have been on a very long waiting list to meet with a mental health provider or
              with finding any support at all. You may be feeling overwhelmed and frustrated with not
              being sure of which way to turn. I am here to help to provide any help, support and
              guidance with navigating through this journey for mental wellness with you, for you,
              for your child and/or your family. Through my connections to resources and decades in
              the profession, I know can steer you in the right direction.
            </p>

            <h3 className="mt-10 text-xl font-semibold">
              Consulting with families as well as other professionals in the community.
            </h3>
            <p className="mt-3 text-neutral-700 leading-relaxed">
              My work in the field of mental health as a licensed practitioner for over 20 years has
              not been limited to individual support. Working with families as well as the community
              is an extremely important part of success. Part of my consulting practice goals are to
              also be there for other professionals in the field as well as individuals and families.
              We must acknowledge that we are all human and require compassion and support. Together
              we can also collaborate in finding solutions for progress and success.
            </p>

            <h3 className="mt-10 text-xl font-semibold">Services and Options</h3>
            <p className="mt-2 text-sm text-neutral-700">
              (All services payment invoices can be submitted to your insurance company for
              reimbursement if your plan allows. All services are paid on day of service through a
              secure payment system.)
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <h4 className="font-semibold">Online one-time consultation options</h4>
                <ul className="mt-2 list-disc pl-5 text-neutral-700">
                  <li>1 1/2 hour one time session/intake — $175</li>
                  <li>Week to week hourly sessions — $150</li>
                  <li>6 week hourly session package — $600</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Observations in environmental settings</h4>
                <ul className="mt-2 list-disc pl-5 text-neutral-700">
                  <li>Travel cost — $75</li>
                  <li>Hourly rate — $150</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Written assessments — $100</h4>
                <p className="mt-1 text-neutral-700">
                  Assessments will include overall history of development, presenting diagnosis and
                  description, clinical observations, and behaviors of concern.
                </p>
              </div>

              <div>
                <h4 className="font-semibold">Suggested Treatment Plan — $100</h4>
                <p className="mt-1 text-neutral-700">
                  Treatment plans will include suggestions for treatment, any recommendations for
                  care, as well as a list of resources.
                </p>
              </div>

              <p className="mt-3 text-sm italic text-neutral-600">
                *All assessments and treatment plans can be provided to any caregiver, teacher,
                medical practitioner, or individual therapy support.*
              </p>

              <div>
                <h4 className="font-semibold">Clinical Supervision — $75/hour</h4>
                <p className="mt-1 text-neutral-700">
                  For master level clinicians working towards LMHC (Massachusetts state licensing)
                  clinical hours, as well as practicing clinicians looking to expand their knowledge
                  base in treatment modalities I specialize in such as Expressive Art Therapies, Play
                  Based Therapies, Child Development, CBT, and Mindfulness Based approaches.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT --------------------------------------------------------------- */}
      <section id="about" className="bg-white text-slate-900 border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 py-20 grid md:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <div>
              <h2 className="text-2xl font-semibold">About Me</h2>
              <div className="mt-1 text-sm text-neutral-600">
                LMHC • Lesley University, M.A. (Counseling Psychology &amp; Expressive Art Therapies), 2003
              </div>
              <p className="mt-3 leading-relaxed text-neutral-700">
                Working with people has always been my passion. Whether I’ve worked as an educator,
                an art teacher, a developmental specialist, an art therapist, or a psychotherapist,
                my love for children, people, art, and nature has shaped me into the therapist I am today.
              </p>
              <p className="mt-3 leading-relaxed text-neutral-700">
                As a mental health provider, I consider myself an extremely dedicated and present
                clinician—someone who truly enjoys working with everyone who comes into my practice. I
                believe each person is unique and special in their own way, and that along the journey of
                life we can sometimes lose sight of—or never fully discover—what that special something is.
                A large part of my work is helping people reconnect with that special something, or feel
                content with who they are and embrace self-compassion.
              </p>
              <p className="mt-3 leading-relaxed text-neutral-700">
                I graduated from Lesley University in 2003 with a Master’s in Counseling Psychology and
                Expressive Art Therapies. Since then, I’ve become well-versed in using a range of
                modalities—art, play, the expressive arts, CBT, and mindfulness—to reach my clients.
                These approaches help me better understand and connect with the people I serve, and help
                them better connect with themselves. I believe in the power of talk therapy and CBT, and I
                also believe expressive art therapies can support the personal process of managing
                difficult thoughts and emotions and making meaningful behavior change.
              </p>
              <p className="mt-3 leading-relaxed text-neutral-700">
                With nearly 30 years of experience working with children in education and mental health, I
                have a special niche for treating young children and have made great progress working with
                tweens, teens, and young adults as well. My professional journey has brought me to amazing
                environments such as The Walker Home and School (Needham), The Community Therapeutic Day
                School (Lexington), Thom Mystic Valley Early Intervention, Safe Studio (Ipswich), and
                Criterion Early Intervention (Framingham). Before joining Synergy, I ran my own private
                practice in Northborough for over a decade.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="rounded-2xl overflow-hidden shadow ring-1 ring-slate-200">
              <img
                src="/images/about.jpg"
                alt="Therapy practice team"
                className="h-96 w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CONTACT ------------------------------------------------------------- */}
      <section id="contact" className="bg-white text-slate-900 border-t border-neutral-200">
        <div className="mx-auto max-w-6xl px-5 py-20 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <FadeIn>
              <h2 className="text-xl font-semibold">Contact & Location</h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-neutral-50 p-5 ring-1 ring-black/5">
                  <div className="font-medium">Phone</div>
                  <a href="tel:+15088685555" className="text-emerald-700 hover:underline">
                    (508) 868-5555
                  </a>
                </div>
                <div className="rounded-2xl bg-neutral-50 p-5 ring-1 ring-black/5">
                  <div className="font-medium">Email</div>
                  <a href="mailto:csbaccam@gmail.com" className="text-emerald-700 hover:underline">
                    csbaccam@gmail.com
                  </a>
                </div>

              </div>
            </FadeIn>
          </div>

          {/* Map embed (right column) */}
          <FadeIn delay={0.05}>
            <div className="rounded-2xl overflow-hidden ring-1 ring-black/5">
              <iframe
                title="Map to 14 Church Street, Hopkinton, MA"
                src="https://www.google.com/maps?q=14+Church+Street,+Hopkinton,+MA+01748&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[320px] md:h-full"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ ---------------------------------------------------------------- */}
      <section id="faq" className="bg-white text-slate-900">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <FadeIn>
            <h2 className="text-xl font-semibold">FAQ</h2>
          </FadeIn>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {[
              { q: "Do you accept insurance?", a: "Superbills available for out-of-network reimbursement." },
              { q: "Do you offer telehealth?", a: "Yes, secure video sessions are available." },
              { q: "What ages do you see?", a: "Children, adolescents, and adults. Parent consults available." },
              { q: "How long are sessions?", a: "Typically 50 minutes. Extended sessions available." },
            ].map((item, i) => (
              <FadeIn key={item.q} delay={0.05 * i}>
                <details className="rounded-2xl bg-white p-5 ring-1 ring-neutral-200 shadow-sm">
                  <summary className="font-medium cursor-pointer">{item.q}</summary>
                  <p className="mt-2 text-sm text-neutral-700">{item.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER ------------------------------------------------------------- */}
      <footer className="bg-black text-white/90">
        <div className="mx-auto max-w-7xl px-5 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-black tracking-widest text-xl" style={{ fontVariant: "small-caps" }}>
            CORINNE SPANGLER-BACCAM
          </div>
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} — All rights reserved
          </div>
        </div>
      </footer>
    </main>
  );
}
