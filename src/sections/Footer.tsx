const componentes = [
  'Sensores y Desarrollo Web',
  'Fog Computing',
  'Deep Learning',
  'Integración del Prototipo',
  'Evaluación del Rendimiento',
];

const emails = [
  { name: 'Andrea Rodríguez', email: 'andread.rodriguez@unach.edu.ec' },
  { name: 'Karen Sánchez', email: 'kareng.sanchez@unach.edu.ec' },
  { name: 'Kevin Duchi', email: 'kevin.duchi@unache.edu.ec' },
  { name: 'Mathew Naranjo', email: 'mnaranjo5@unemi.edu.ec' },
];

export default function Footer() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-navy py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Col 1: Logo & Description */}
          <div>
            <a
              href="#hero"
              onClick={(e) => handleClick(e, '#hero')}
              className="font-display text-xl font-bold text-white mb-4 block"
            >
              FID-Learning
            </a>
            <p className="text-sm text-pale-blue/70 leading-relaxed">
              Desarrollado con tecnología de vanguardia para el bienestar emocional.
              Sistema Fog-Computing-IoMT-Deep Learning para la detección de ansiedad.
            </p>
          </div>

          {/* Col 2: Componentes */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Componentes del Proyecto
            </h4>
            <ul className="space-y-2.5">
              {componentes.map((c, i) => (
                <li key={i}>
                  <a
                    href="#componentes"
                    onClick={(e) => handleClick(e, '#componentes')}
                    className="text-sm text-pale-blue/70 hover:text-tech-cyan transition-colors duration-300"
                  >
                    {i + 1}. {c}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Contacto del Equipo
            </h4>
            <ul className="space-y-2.5">
              {emails.map((c, i) => (
                <li key={i} className="text-sm text-pale-blue/70">
                  <span className="text-pale-blue/50">{c.name}:</span>{' '}
                  <a
                    href={`mailto:${c.email}`}
                    className="hover:text-tech-cyan transition-colors duration-300"
                  >
                    {c.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-pale-blue/15 mt-12 pt-8">
          <p className="text-center text-xs text-pale-blue/50">
            © 2025 FID-Learning. Proyecto de investigación académica.
          </p>
        </div>
      </div>
    </footer>
  );
}
