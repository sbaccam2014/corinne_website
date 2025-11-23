const Footer = () => {
  return (
    <footer id="footer" className="text-slate-700" style={{backgroundColor: '#E6E6FA'}}>
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Left link list */}
          <div className="text-xs space-y-1/5">
            <div className="font-semibold opacity-90">Info:</div>
            <ul className="mt-2 space-y-1 opacity-90">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#bio" className="hover:underline">About</a></li>
              <li><a href="#cta" className="hover:underline">Contact</a></li>
              <li><a href="#cta" className="hover:underline">Fees</a></li>
              <li><a href="#challenges" className="hover:underline">FAQs</a></li>
            </ul>
          </div>

          {/* Center brand + address */}
          <div className="text-center">
            <div className="inline-flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-24 w-24 md:h-28 md:w-28 rounded-full ring-1 ring-slate-300 object-cover"
              />
              <div className="font-nunito text-lg">
                Corinne Spangler-Baccam, MA, LMHC, CEIS
              </div>
            </div>
            <div className="mt-3 text-xs opacity-90">
              14 Church Street, Hopkinton, MA 01748
            </div>
            <div className="mt-2 text-xs opacity-90">
              <a href="mailto:csbaccam@gmail.com" className="underline">csbaccam@gmail.com</a> ·{" "}
              <a href="tel:+15088685555" className="underline">(508) 868-5555</a>
            </div>
            <div className="mt-3 text-xs opacity-80">
              Privacy Policy · Fees &amp; Insurance
            </div>
            <div className="mt-2 text-xs opacity-60">
              © {new Date().getFullYear()} · Site by You
            </div>
          </div>

          {/* Right CTA + tagline */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md text-white px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
              style={{backgroundColor: '#9CAF88'}}
            >
              BOOK A CONSULT
            </a>
            <div className="text-xs opacity-85 text-center lg:text-right">
              Live a healthier, happier and more connected life.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
