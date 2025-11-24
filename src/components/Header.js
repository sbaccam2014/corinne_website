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
    <header className="border-b border-gray-100 sticky top-0 bg-white z-50" role="banner">
      <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/" className="flex items-center gap-3" aria-label="Live Life Better Therapy - Home">
          <img
            src="/images/logo.png"
            alt="Live Life Better Therapy logo"
            className="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover ring-2 ring-slate-200"
          />
          <div className="leading-tight">
            <div className="font-nunito text-xl text-slate-900">
              Corinne Spangler-Baccam
            </div>
            <div className="text-xs text-slate-500">MA, LMHC, CEIS</div>
            <div className="text-xs font-medium mt-0.5" style={{color: '#9CAF88'}}>Live Life Better Therapy</div>
          </div>
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
