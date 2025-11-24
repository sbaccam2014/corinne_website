import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DecorativeCircles from '../components/DecorativeCircles';

const ParentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="pt-24 pb-16 md:pb-20" style={{background: 'linear-gradient(to bottom, #F3F0FF, #FDFCFF)'}}>
        <div className="mx-auto max-w-6xl px-5">
          <Link to="/" className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 mb-8">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <DecorativeCircles variant="triple" />
            <div>
              <p className="text-sm tracking-[0.2em] font-semibold" style={{color: '#9CAF88'}}>
                WHO I HELP
              </p>
              <h1 className="font-nunito text-4xl md:text-5xl font-normal mt-2" style={{color: '#9370DB'}}>
                Parents and Caregivers
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-4xl px-5">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold mb-4" style={{color: '#9CAF88'}}>
              Supporting Families Through Collaborative Care
            </h2>

            <div className="my-8 rounded-xl overflow-hidden">
              <img
                src="/images/parents.jpeg"
                alt="Parent and child connection"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-base text-neutral-700 leading-relaxed mb-6">
              The key to the success of a child are the loving connections they have. Working with parents and caregivers is a collaborative process, as well as a learning process. I try to provide thoughtful understanding and guidance by sensitively learning your family's unique needs and together exploring consistent approaches for solutions towards positive change.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8" style={{color: '#9370DB'}}>
              How I Support Parents and Caregivers:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Parenting strategies and guidance</li>
                <li>• Understanding child behavior</li>
                <li>• Managing family stress</li>
                <li>• Communication with children</li>
                <li>• Supporting child's therapy</li>
                <li>• Navigating school systems</li>
              </ul>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Family dynamics and relationships</li>
                <li>• Behavioral management techniques</li>
                <li>• Self-care for caregivers</li>
                <li>• Coordinating with other providers</li>
                <li>• Building family resilience</li>
                <li>• Creating consistent routines</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-8" style={{color: '#9370DB'}}>
              Collaborative Approach
            </h3>

            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              I believe that parents and caregivers are essential partners in a child's therapeutic journey. My collaborative approach includes:
            </p>

            <ul className="space-y-2 text-sm text-slate-700 mb-8">
              <li>• Regular communication about progress and goals</li>
              <li>• Parent coaching and skill-building sessions</li>
              <li>• Guidance tailored to your family's unique needs</li>
              <li>• Strategies you can implement at home</li>
              <li>• Coordination with schools and other providers</li>
              <li>• Support for your own well-being as a caregiver</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-8" style={{color: '#9370DB'}}>
              Understanding Your Family's Needs
            </h3>

            <p className="text-base text-neutral-700 leading-relaxed mb-6">
              Every family is unique, with its own strengths, challenges, and dynamics. I take time to understand your family's specific situation, cultural background, and values. Together, we'll develop consistent, practical approaches that work for your family and support positive change for your child.
            </p>

            <div className="mt-12 p-8 rounded-xl" style={{backgroundColor: '#F9F8FF'}}>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#9370DB'}}>
                Let's Work Together
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Supporting your child starts with understanding your family. Schedule a free consultation to discuss how we can work together.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-md transition hover:opacity-90"
                style={{backgroundColor: '#9CAF88'}}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ParentsPage;
