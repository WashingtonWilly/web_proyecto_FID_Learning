import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Proyecto', href: '#about' },
  { label: 'Componentes', href: '#componentes' },
  { label: 'Equipo', href: '#equipo' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        isScrolled
          ? 'bg-deep-navy/92 backdrop-blur-xl border-b border-pale-blue/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto w-full px-6 md:px-20 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="font-display text-xl font-bold text-white"
        >
          FID-Learning
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm font-medium text-pale-blue hover:text-tech-cyan transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-deep-navy/98 backdrop-blur-xl border-b border-pale-blue/10 md:hidden">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-base font-medium text-pale-blue hover:text-tech-cyan transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
