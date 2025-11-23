import FadeIn from "./FadeIn";
import DecorativeCircles from "./DecorativeCircles";
import SectionDivider from "./SectionDivider";

const LearnMore = () => {
  return (
    <section id="learn" className="bg-white scroll-mt-24">
      <SectionDivider color="white" direction="down" variant={2} />
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <DecorativeCircles variant="triple" />
            </div>
            <h2 className="font-nunito text-4xl md:text-5xl font-normal" style={{color: '#9370DB'}}>
              A Whole Person Holistic Approach to Mental Health
            </h2>
            <p className="mt-2 text-sm text-slate-600">Corinne Spangler-Baccam, MA, LMHC, CEIS</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <p className="text-base text-neutral-700 leading-relaxed mb-8">
            A therapeutic model of care that goes beyond traditional symptom management. Corinne's overall therapeutic approach thinks about treating the whole person, encompassing their physical, mental, emotional, social, as well as spiritual well-being. This integrated method combines evidence-based therapies with complementary practices like mindfulness, nutrition, and physical activity to address root causes, improve self-efficacy, and foster lasting wellness and resilience for children, adolescents as well as adults.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4" style={{color: '#9CAF88'}}>
              Key Principles
            </h3>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <div>
                <span className="font-semibold text-slate-800">Integrated Care:</span> Treats the whole person by integrating physical, mental, emotional, and spiritual aspects into the treatment plan.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Mind-Body-Spirit Connection:</span> Recognizes the interplay between thoughts, feelings, physical sensations, and spiritual beliefs, and how they all affect mental health.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Personalized Treatment:</span> Care is tailored to each individual's unique background, lifestyle, culture, beliefs, and goals.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Focus on Root Causes:</span> Goes beyond surface-level symptoms to address underlying issues and trauma.
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4" style={{color: '#9CAF88'}}>
              Components of Holistic Care
            </h3>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-neutral-700 leading-relaxed">
              <div>
                <span className="font-semibold text-slate-800">Evidence-Based Therapies:</span> Such as Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), Trauma-Focused CBT, Play Therapy, and Art Therapy.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Mindfulness and Self-Care Practices:</span> Including meditation, yoga, journaling, and spending time in nature.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Expressive Art Therapy:</span> Using art, music, and creative expression to process emotions.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Lifestyle and Nutritional Guidance:</span> Encouraging healthy eating, regular physical activity, and adequate sleep.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Spiritual and Emotional Exploration:</span> Addressing spiritual beliefs, values, and the search for meaning and purpose.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Social and Community Connection:</span> Emphasizing the importance of relationships and support networks.
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 rounded-xl p-6" style={{backgroundColor: '#F9F8FF'}}>
            <h3 className="text-xl font-semibold mb-4" style={{color: '#9370DB'}}>
              Benefits
            </h3>

            <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
              <div>
                <span className="font-semibold text-slate-800">Enhanced Recovery:</span> More sustainable outcomes than symptom-focused treatment alone.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Improved Well-being:</span> Promotes overall quality of life and sense of balance.
              </div>

              <div>
                <span className="font-semibold text-slate-800">Greater Resilience:</span> Helps develop long-term coping skills and adaptability.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default LearnMore;
