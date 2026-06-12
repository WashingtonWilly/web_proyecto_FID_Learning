import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const members = [
  {
    name: 'Andrea Domenica Rodríguez Pomboza',
    role: 'Socio 1 — Facultad de Ingeniería',
    ci: '0605493337',
    email: 'andread.rodriguez@unach.edu.ec',
    phone: '0968284053',
    avatar: '/team-avatar-1.jpg',
  },
  {
    name: 'Karen G. Sánchez',
    role: 'Socio 2 — Facultad de Salud',
    ci: '0605956382',
    email: 'kareng.sanchez@unach.edu.ec',
    phone: '0992500080',
    avatar: '/team-avatar-2.jpg',
  },
  {
    name: 'Kevin David Duchi Caguana',
    role: 'Socio 3 — Facultad de Ingeniería',
    ci: '0605180686',
    email: 'kevin.duchi@unache.edu.ec',
    phone: '0987736983',
    avatar: '/team-avatar-3.jpg',
  },
  {
    name: 'Mathew Israel Naranjo Santillán',
    role: 'Socio 4 — Facultad de Ingeniería',
    ci: '1550056368',
    email: 'mnaranjo5@unemi.edu.ec',
    phone: '0963265561',
    avatar: '/team-avatar-4.jpg',
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.team-header',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.utils.toArray<HTMLElement>('.team-card').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          scale: 0.95,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="equipo"
      ref={sectionRef}
      className="bg-ice-white py-24 md:py-[120px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="team-header section-header">
          <span className="acronym">Equipo de Investigación</span>
          <div className="divider" />
          <h2>Investigadores del Proyecto</h2>
          <p>
            Equipo interdisciplinario de la Facultad de Ingeniería y Salud comprometido 
            con el desarrollo de tecnología para el bienestar emocional.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, i) => (
            <div
              key={i}
              className="team-card bg-white rounded-xl p-8 text-center shadow-[0_4px_24px_rgba(2,28,64,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(2,28,64,0.1)] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full border-[3px] border-tech-cyan overflow-hidden">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-display text-lg font-semibold text-deep-navy mb-1">
                {m.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-medium text-calm-blue mb-1">
                {m.role}
              </p>

              {/* CI */}
              <p className="text-xs text-slate-400 mb-4">
                CI: {m.ci}
              </p>

              {/* Separator */}
              <div className="w-8 h-px bg-pale-blue mx-auto mb-4" />

              {/* Contact */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                  <Mail className="w-3.5 h-3.5 text-calm-blue flex-shrink-0" />
                  <span className="truncate max-w-[200px]">{m.email}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                  <Phone className="w-3.5 h-3.5 text-calm-blue flex-shrink-0" />
                  <span>{m.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
