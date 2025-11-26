import { useState } from "react";
import FadeIn from "./FadeIn";
import SectionDivider from "./SectionDivider";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I know if therapy is right for me or my child?",
      answer: "If you or your child are experiencing anxiety, stress, behavioral changes, or emotional struggles that impact daily life, therapy can help. I offer a free 15-minute consultation to discuss your concerns and determine if my approach is a good fit."
    },
    {
      question: "What can I expect in the first session?",
      answer: "The first session focuses on understanding your concerns, history, and goals. We'll discuss what brings you to therapy and create a personalized treatment plan. It's a relaxed, judgment-free conversation where you can ask questions and get comfortable."
    },
    {
      question: "Do you offer virtual sessions?",
      answer: "Yes! I offer both in-person sessions at my Hopkinton office and secure telehealth sessions for your convenience and flexibility."
    },
    {
      question: "What are your fees and do you accept insurance?",
      answer: "Individual sessions are $185. I accept Aetna, BlueCross and BlueShield, Harvard Pilgrim, and Quest Behavioral Health. I also work with out-of-network clients and can provide superbills for reimbursement."
    },
    {
      question: "How long are sessions and how often do we meet?",
      answer: "Sessions are typically 45-50 minutes. Initially, we often meet weekly to build momentum. As progress is made, we may transition to biweekly or monthly sessions based on your needs and goals."
    },
    {
      question: "What ages do you work with?",
      answer: "I work with children, adolescents, and adults. With 30+ years of experience working with families, I'm equipped to support individuals at all life stages."
    },
    {
      question: "Is everything we discuss confidential?",
      answer: "Yes. Confidentiality is a cornerstone of therapy. Exceptions include situations involving risk of harm to self or others, or when required by law. I'll always discuss these boundaries with you upfront."
    },
    {
      question: "What is Expressive Art Therapy?",
      answer: "Expressive Art Therapy uses creative activities like drawing, painting, and other art forms to help process emotions and experiences. It's especially helpful for children and teens who may find it easier to express themselves through art than words alone."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white scroll-mt-24">
      <SectionDivider color="white" direction="down" variant={3} />
      <div className="mx-auto max-w-4xl px-5 py-8 md:py-10">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="font-nunito text-3xl md:text-4xl font-normal" style={{color: '#9370DB'}}>
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Common questions about therapy and my practice
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 overflow-hidden transition-all hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-sm md:text-base">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    style={{color: '#9CAF88'}}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 text-center">
            <p className="text-sm text-slate-600 mb-4">
              Have more questions?
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white rounded-md transition hover:opacity-90"
              style={{backgroundColor: '#9CAF88'}}
            >
              Get In Touch
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FAQ;
