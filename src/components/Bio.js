import FadeIn from "./FadeIn";
import DecorativeCircles from "./DecorativeCircles";
import SectionDivider from "./SectionDivider";

const Bio = ({ onNav }) => {
  return (
    <section id="bio" className="relative scroll-mt-24" style={{backgroundColor: '#F9FBF7'}}>
      <SectionDivider color="sage" direction="down" variant={3} />
      <div className="mx-auto max-w-6xl px-5 py-8 md:py-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <div>
              <div className="text-xs tracking-[0.2em] font-semibold" style={{color: '#9CAF88'}}>
                | MEET YOUR THERAPIST |
              </div>
              <h3 className="mt-2 text-2xl font-semibold text-slate-800">
                Corinne Spangler-Baccam, MA, LMHC, CEIS
              </h3>
              <p className="mt-3 text-[13.5px] text-neutral-700 leading-relaxed">
                For over 20 years, I've helped young people and families navigate anxiety and
                emotional challenges with warmth, skill, and understanding. My experience includes
                clinical work in schools, private practice, and early intervention—enabling me to
                provide practical strategies and effective tools that lead to meaningful change.
              </p>
              <p className="mt-3 text-[13.5px] text-neutral-700 leading-relaxed">
                Clients value the compassion, humor, and accessibility I bring to sessions. My
                approach is collaborative, personalized, and designed to foster lasting emotional
                resilience in kids, teens, and young adults, as well as strengthen family
                connections.
              </p>
              <a
                href="#contact"
                onClick={(e) => onNav(e, "contact")}
                className="mt-5 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-white text-sm font-semibold hover:opacity-90 transition"
                style={{backgroundColor: '#9CAF88'}}
              >
                GET IN TOUCH
              </a>
            </div>
          </FadeIn>

          {/* Portrait with reserved space + correct stacking */}
          <FadeIn delay={0.05}>
            <div className="relative">
              {/* decorative flower petals behind */}
              <div className="absolute -left-8 -top-6 z-0">
                <DecorativeCircles variant="triple" />
              </div>
              <div className="absolute -right-8 -bottom-10 z-0">
                <DecorativeCircles variant="dual" />
              </div>

              {/* portrait (sits above) */}
              <img
                src="/images/headshot.jpeg"
                alt="Corinne Spangler-Baccam"
                className="relative z-10 w-full max-w-md rounded-xl object-cover aspect-[4/5] h-auto"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Bio;
