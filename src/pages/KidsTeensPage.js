import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DecorativeCircles from '../components/DecorativeCircles';

const KidsTeensPage = () => {
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
                Kids & Teens
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-4xl px-5">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold mb-4" style={{color: '#9CAF88'}}>
              Supporting Young People Through Growth and Challenges
            </h2>

            <div className="my-8 rounded-xl overflow-hidden">
              <img
                src="/images/kids_paint.webp"
                alt="Children engaged in art therapy"
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="text-base text-neutral-700 leading-relaxed mb-6">
              Supporting children and adolescents through patience, kindness and connection. I take the time to really understand your child and support them while they learn more about themselves. Through play based therapies, art and expressive therapies, we build on the language and communication skills as well as coping skills. Self care and coping strategies can only uniquely come from the individual. Through gentle guidance and creative exploration, we will find what works best for your child and they will be encouraged to put their skills into healthy practice so to build resiliency, confidence and patience within themselves.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-8" style={{color: '#9370DB'}}>
              Common Challenges I Help With:
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Anxiety and worry</li>
                <li>• School-related stress</li>
                <li>• Social difficulties</li>
                <li>• Behavioral challenges</li>
                <li>• Self-esteem issues</li>
                <li>• Emotional regulation</li>
              </ul>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Family transitions</li>
                <li>• Peer relationships</li>
                <li>• Academic pressure</li>
                <li>• Depression and sadness</li>
                <li>• Anger management</li>
                <li>• Life changes</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-8" style={{color: '#9370DB'}}>
              My Approach with Young People
            </h3>

            <p className="text-base text-neutral-700 leading-relaxed mb-4">
              I create a safe, welcoming environment where children and teens feel heard and understood. Through creative and play-based approaches, I help young people:
            </p>

            <ul className="space-y-2 text-sm text-slate-700 mb-8">
              <li>• Express emotions in healthy ways</li>
              <li>• Develop coping skills for anxiety and stress</li>
              <li>• Build confidence and self-awareness</li>
              <li>• Improve communication with family and peers</li>
              <li>• Navigate developmental challenges</li>
              <li>• Strengthen problem-solving abilities</li>
            </ul>

            <div className="mt-12 p-8 rounded-xl" style={{backgroundColor: '#F9F8FF'}}>
              <h3 className="text-xl font-semibold mb-3" style={{color: '#9370DB'}}>
                Ready to Help Your Child?
              </h3>
              <p className="text-sm text-slate-600 mb-6">
                I offer a free 15-minute consultation to discuss your child's needs and how I can help.
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

export default KidsTeensPage;
