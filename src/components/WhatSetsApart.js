const WhatSetsApart = () => {
  return (
    <section id="sets-apart" className="relative overflow-hidden scroll-mt-24">
      {/* Top white curve */}
      <svg
        className="-mt-8 md:-mt-14 block w-full"
        viewBox="0 0 1440 140"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C360,140 720,60 1080,100 C1240,116 1340,116 1440,110 L1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>

      {/* Background office image with lavender tint */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/images/office-wide.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.8)",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 mix-blend-multiply" style={{backgroundColor: 'rgba(230, 230, 250, 0.55)'}} />

      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid">
          <div className="md:col-start-2" />
          {/* Floating white card */}
          <div className="md:col-start-2">
            <div className="mx-auto max-w-3xl rounded-2xl bg-white/95 p-6 md:p-8 shadow-xl ring-1 ring-black/10">
              <h3 className="text-center font-semibold text-xs tracking-widest mb-6" style={{color: '#9CAF88'}}>
                WHAT MAKES MY PRACTICE UNIQUE
              </h3>
              <ul className="text-sm text-slate-700 space-y-3">
                <li>~ 30+ years working with children and families; 20+ years as a licensed LMHC</li>
                <li>~ Masters degree in Expressive Art Therapies and Counseling Psychology</li>
                <li>~ Certified as an Early Intervention Developmental Specialist</li>
                <li>~ Relaxed, creative, and interpersonal approach to therapy</li>
                <li>~ Flexible in-person and telehealth options</li>
                <li>~ Compassionate care with open communication and nonjudgmental listening</li>
              </ul>
            </div>
          </div>
        </div>

        {/* tiny spacer so the shadow never overlaps next section */}
        <div className="h-4 md:h-6" />
      </div>

      {/* Bottom white curve into BIO */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 140"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C300,120 600,140 900,120 C1140,106 1290,86 1440,60 L1440,160 L0,160 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
};

export default WhatSetsApart;
