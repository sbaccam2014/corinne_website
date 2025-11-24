import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NAV = [
  { id: "who", label: "Who I Help" },
  { id: "learn", label: "Learn More" },
  { id: "portal", label: "Client Portal" },
];

const Header = ({ active, onNav }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMenuOpen(false);

    if (isHomePage && onNav) {
      onNav(e, id);
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="border-b border-gray-100 relative" role="banner">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3" aria-label="Live Life Better Therapy - Home">
          <img
            src="/images/logo.png"
            alt="Live Life Better Therapy hummingbird logo"
            className="h-20 w-20 md:h-24 md:w-24 object-contain"
          />
          <img
            src="/images/text_logo.png"
            alt="Live Life Better Therapy - Corinne Spangler-Baccam, MA, LMHC, CEIS"
            className="h-16 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`/#${n.id}`}
              onClick={(e) => handleNavClick(e, n.id)}
              className={`text-slate-600 hover:text-slate-900 transition font-medium ${
                active === n.id ? "text-slate-900" : ""
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ '--tw-ring-color': '#9370DB' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <nav className="flex flex-col py-2" aria-label="Mobile navigation">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`/#${n.id}`}
                onClick={(e) => handleNavClick(e, n.id)}
                className={`px-5 py-3 text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition font-medium ${
                  active === n.id ? "text-slate-900 bg-slate-50" : ""
                }`}
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
