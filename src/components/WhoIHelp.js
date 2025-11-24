import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import DecorativeCircles from "./DecorativeCircles";
import SectionDivider from "./SectionDivider";

const WhoIHelp = ({ onNav }) => {
  const cards = [
    {
      title: "Kids & Teens",
      link: "/kids-teens",
      body:
        "Supporting children and adolescents through patience, kindness and connection. I take the time to really understand your child and support them patiently on how to learn about themselves. Through play based therapies, art and expressive therapies, we build on the language and communication skills as well as coping skills. Self care and coping strategies can only uniquely come from the individual. Through gentle guidance and creative exploration, we will find what works best for your child and they will be encouraged to put their skills into healthy practice so to build resiliency, confidence and patience within themselves.",
    },
    {
      title: "Adults",
      link: "/adults",
      body:
        "All stages of adulthood can bring unique pressures as well as social and more complicated emotional conflicts. My approach with adults is very similar to my work with children and adolescents, where I provide a nonjudgmental approach to therapy. Together, through time, patience and some creative thinking, we will build skills that will help you as an individual feel more empowered, more self-connected, and more confident while navigating through this thing we call \"life\".",
    },
    {
      title: "Parents and Caregivers",
      link: "/parents-caregivers",
      body:
        "The key to the success of a child are the loving connections they have. Working with parents and caregivers is a collaborative process, as well as a learning process. I try to provide thoughtful understanding and guidance by sensitively learning your family's unique needs and together exploring consistent approaches for solutions towards positive change.",
    },
  ];

  return (
    <section id="who" className="scroll-mt-24" style={{backgroundColor: '#F9F8FF'}}>
      <SectionDivider color="lavender" direction="down" variant={1} />
      <div className="mx-auto max-w-6xl px-5 py-8 md:py-10">
        <div className="grid lg:grid-cols-3 gap-14">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.03 * i}>
              <div className="flex flex-col items-center text-center">
                {/* Decorative flower petals */}
                <DecorativeCircles variant="triple" />
                <Link to={card.link} className="mt-5 font-semibold underline" style={{color: '#9370DB'}}>
                  {card.title}
                </Link>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{card.body}</p>
                <Link to={card.link} className="mt-3 text-sm hover:underline" style={{color: '#9CAF88'}}>
                  Learn More →
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Centered banner line + micro-CTA */}
        <FadeIn delay={0.1}>
          <div className="mt-16 text-center">
            <h4 className="font-semibold" style={{color: '#9370DB'}}>
              Offering both in person and virtual sessions, with evening and weekend availability,
              accessing the therapy and support you need is within reach.
            </h4>
            <p className="mt-2 text-xs text-slate-500">
              You don't have to go it alone, take the first step and schedule a complimentary
              consultation today.
            </p>
            <a
              href="#contact"
              onClick={(e) => onNav(e, "contact")}
              className="mt-5 inline-flex items-center justify-center rounded-md px-5 py-2.5 text-white text-sm font-semibold hover:opacity-90 transition"
              style={{backgroundColor: '#9CAF88'}}
            >
              BOOK AN INITIAL CONSULT
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default WhoIHelp;
