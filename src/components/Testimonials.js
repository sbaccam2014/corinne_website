const Testimonials = () => {
  const testimonials = [
    {
      quote: "I want to sincerely thank you for everything that you have done for myself and my daughter these past few years. You have helped us through some of the hardest parts of life. The support and guidance you've given me will always be appreciated and never forgotten.",
      author: "Parent of a 13-year-old in Massachusetts"
    },
    {
      quote: "My daughter has been Corinne's client since she was 10 years old. In those almost 7 years, I've watched my daughter develop tools to manage anxiety, confidence to tackle challenging situations, and countless skills to help her navigate the wild world of life as a teenager. Corinne's use of art in her sessions allowed my daughter to open up when she was new to therapy. It also inspired her to draw, paint and scrapbook on her own, which has become an outlet and a way for her to reduce stress. But beyond the art, we value Corinne's warmth, her extraordinary ability to connect, and her commitment to supporting our daughter. We're so grateful we found Corinne; anyone would be lucky to have her in their corner.",
      author: "D Owens"
    }
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/flowers.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-purple-600/55" style={{backgroundColor: 'rgba(147, 112, 219, 0.55)'}} />

      <div className="relative mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-center text-3xl md:text-4xl font-nunito text-white mb-8">
          Client Testimonials
        </h2>
        <div className="grid gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-4xl mx-auto">
              <p className="text-white/85 text-center italic text-sm md:text-base">
                "{testimonial.quote}"
              </p>
              <div className="mt-3 text-white/70 text-center text-xs">
                ~ {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Curve into CTA */}
      <svg
        className="block w-full"
        viewBox="0 0 1440 160"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C240,140 720,140 960,100 C1200,60 1320,40 1440,60 L1440,160 L0,160 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
};

export default Testimonials;
