import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <section id="home" className="relative" style={{background: 'linear-gradient(to bottom, #F3F0FF, #FDFCFF)'}}>
      {/* Headline */}
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 md:pt-16 md:pb-10">
        <FadeIn>
          <p className="text-sm tracking-[0.2em] font-semibold mb-4" style={{color: '#9CAF88'}}>
            THERAPY FOR CHILDREN, ADOLESCENTS, AND ADULTS
          </p>
          <h1 className="font-nunito text-3xl md:text-4xl lg:text-5xl font-normal leading-tight text-slate-900 max-w-4xl">
            Compassionate Therapy for Anxiety, Stress, and Emotional Wellness
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-2xl">
            Supporting individuals and families with whole-person care that addresses root causes and builds lasting resilience.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-md transition hover:opacity-90"
              style={{backgroundColor: '#9CAF88'}}
            >
              Book a Free Consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
