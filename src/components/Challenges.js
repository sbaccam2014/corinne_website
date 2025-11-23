import FadeIn from "./FadeIn";
import DecorativeCircles from "./DecorativeCircles";

const Challenges = () => {
  const challenges = [
    "Overwhelming anxiety, worry, or stress",
    "Struggles relating to work or school",
    "Changes in behaviors that are unusual or out of character",
    "Increased isolated and more pulling away",
    "Struggling to adapt to natural or newer environments",
    "Uncertainty on how to approach conflicting emotions",
    "Helplessness, or feeling a lack of control of your world",
    "Unhappiness or increased sadness",
    "Feeling stuck and not knowing who to talk to or where to begin",
  ];

  return (
    <section id="challenges" className="bg-white scroll-mt-24">
      <div className="mx-auto max-w-4xl px-8 py-16 md:py-20">
        <ul className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mb-8">
          {challenges.map((t) => (
            <li key={t}>
              {t}
            </li>
          ))}
        </ul>

        {/* Two-column explainer */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left big photo with mat */}
          <FadeIn>
            <div className="rounded-xl bg-[#DCDDE2] p-5">
              <img
                src="/images/office-chat.webp"
                alt="Conversation in office"
                className="w-full h-[320px] md:h-[360px] object-cover rounded"
              />
            </div>
          </FadeIn>

          {/* Right content */}
          <FadeIn delay={0.05}>
            <div>
              <p className="text-base text-neutral-700 leading-relaxed">
                Obstacles with our mental health is a very human thing! We are naturally designed as social and emotional beings who thrive through on communication, creativity and human contact. When this gets disrupted by the stressors and noise of our modern society, our processing and self regulation becomes imbalanced and many times, out of our control. Avoiding and suppressing these natural and innate emotional responses can profoundly impact one's ability to cope or naturally bounce back. Internal harmony can become disrupted, making everyday moments into everyday struggles. We can see this disruption of harmony manifest in many ways.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-8 text-sm text-slate-700">
                <ul className="space-y-2 list-disc pl-5">
                  <li>Panic attacks</li>
                  <li>Unmanageable stress</li>
                  <li>Increase in performance anxiety</li>
                  <li>Disruption in relationships</li>
                  <li>Isolating, retreating, avoiding</li>
                  <li>Irritability and outbursts</li>
                  <li>Sleep troubles or insomnia</li>
                  <li>Sleeping too much, not wanting to leave our bed</li>
                  <li>Social anxieties, withdrawal and avoidance</li>
                </ul>
                <ul className="space-y-2 list-disc pl-5">
                  <li>Overthinking, overanalyzing, excessive worrying</li>
                  <li>Feeling restless, "on edge"</li>
                  <li>Body complaints, stomach, head, dizziness</li>
                  <li>Racing thoughts, or just feeling out of control</li>
                  <li>Overwhelming sadness or anger</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
