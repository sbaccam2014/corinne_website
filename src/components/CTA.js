import FadeIn from "./FadeIn";
import DecorativeCircles from "./DecorativeCircles";
import SectionDivider from "./SectionDivider";

const CTA = () => {
  return (
    <section id="cta" className="relative bg-white scroll-mt-24">
      <SectionDivider color="white" direction="down" variant={1} />
      <div className="mx-auto max-w-6xl px-5 py-8 md:py-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <div className="mb-6">
                <DecorativeCircles variant="dual" />
              </div>
              <h3 className="font-nunito text-3xl md:text-4xl font-normal" style={{color: '#9370DB'}}>
                Take the First Step Toward a Happier, More Resilient Life
              </h3>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="text-sm text-slate-700 leading-relaxed">
              Finding the right therapist is important! Meet with me for a 15-minute initial consultation just to get a feel if this is the right fit!
              <div className="mt-3">
                <span className="font-semibold">Book Your Free 15-Minute Consultation Today</span>{" "}
                and let's begin your journey toward more connection, calm, and joy!
              </div>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-white text-sm font-semibold hover:opacity-90 transition"
                style={{backgroundColor: '#9CAF88'}}
              >
                SCHEDULE YOUR COMPLIMENTARY CONSULTATION →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTA;
