import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DecorativeCircles from '../components/DecorativeCircles';

const AdultsPage = () => {
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
                Adults
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-4xl px-5">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold mb-4" style={{color: '#9CAF88'}}>
              Supporting You Through Life's Complexities
            </h2>

            <div className="my-8 rounded-xl overflow-hidden">
              <img
                src="/images/mental-health.jpg"
                alt="Mental health and wellness"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-base text-neutral-700 leading-relaxed mb-6">
              All stages of adulthood can bring unique pressures as well as social and more complicated emotional conflicts. My approach with adults is very similar to my work with children and adolescents, where I provide a nonjudgmental approach to therapy. Together, through time, patience and some creative thinking, we will build skills that will help you as an individual feel more empowered, more self-connected, and more confident while navigating through this thing we call "life".
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8" style={{color: '#9370DB'}}>
              Common Challenges I Help With:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Anxiety and stress management</li>
                <li>• Depression and mood challenges</li>
                <li>• Life transitions and changes</li>
                <li>• Relationship difficulties</li>
                <li>• Work-life balance</li>
                <li>• Self-esteem and identity</li>
              </ul>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Grief and loss</li>
                <li>• Career stress</li>
                <li>• Trauma and past experiences</li>
                <li>• Communication challenges</li>
                <li>• Feeling overwhelmed</li>
                <li>• Personal growth</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-8" style={{color: '#9370DB'}}>
              My Approach with Adults
            </h3>

            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              I provide a supportive, nonjudgmental space where you can explore your thoughts and feelings openly. Together, we'll work to:
            </p>

            <ul className="space-y-2 text-sm text-slate-700 mb-8">
              <li>• Identify and address root causes of distress</li>
              <li>• Develop effective coping strategies</li>
              <li>• Build emotional resilience and self-awareness</li>
              <li>• Improve communication and relationships</li>
              <li>• Create sustainable lifestyle changes</li>
              <li>• Foster lasting personal growth</li>
            </ul>

            <div className="mt-12 p-8 rounded-xl" style={{backgroundColor: '#F9F8FF'}}>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#9370DB'}}>
                Ready to Start Your Journey?
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                Take the first step toward positive change. I offer a free 15-minute consultation to discuss how I can support you.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white rounded-md transition hover:opacity-90"
                style={{backgroundColor: '#9CAF88'}}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdultsPage;
