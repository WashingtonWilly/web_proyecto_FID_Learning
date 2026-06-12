import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Activity, Brain, Zap, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Activity,
    title: 'Monitoreo Continuo',
    desc: 'Sensores PPG, EDA, temperatura y acelerómetro operando 24/7',
  },
  {
    icon: Brain,
    title: 'Detección Predictiva',
    desc: 'Algoritmos de Deep Learning que identifican patrones de ansiedad antes de que escalen',
  },
  {
    icon: Zap,
    title: 'Intervención Automática',
    desc: 'Actuadores hápticos (vibración, presión, pulsaciones rítmicas) para autorregulación',
  },
  {
    icon: Server,
    title: 'Arquitectura Fog Computing',
    desc: 'Preprocesamiento local en Raspberry Pi para baja latencia y privacidad',
  },
];

const variables = [
  'Frecuencia Cardíaca (HR)',
  'Variabilidad de Frecuencia Cardíaca (HRV)',
  'Actividad Electrodermal (EDA/GSR)',
  'Frecuencia Respiratoria (RR)',
  'Temperatura de la Piel',
  'Movimiento/Aceleración',
  'Calidad del Sueño',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.about-reveal').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
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

      gsap.from('.about-image', {
        opacity: 0,
        x: 30,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.tech-specs-card', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.tech-specs-card',
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-ice-white py-24 md:py-[120px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="section-header about-reveal">
          <span className="acronym">Acerca del Proyecto</span>
          <div className="divider" />
          <h2>AURA: Anxiety Understanding and Regulation Assistant</h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
          {/* Left column - Text */}
          <div>
            <p className="about-reveal text-lg text-slate-600 leading-relaxed mb-6">
              AURA es un sistema portátil inteligente que detecta, predice y regula la ansiedad 
              en tiempo real, ayudando a las personas a recuperar el control de su bienestar 
              emocional de forma automática, personalizada y basada en datos fisiológicos objetivos.
            </p>

            <p className="about-reveal text-lg text-slate-600 leading-relaxed mb-10">
              El prototipo integra sensores biométricos de alta precisión con algoritmos avanzados 
              de Deep Learning en una arquitectura Fog-Computing-IoMT. Los datos fisiológicos se 
              transmiten de forma inalámbrica hacia una aplicación móvil y una plataforma en la 
              nube, permitiendo el monitoreo continuo y el seguimiento clínico remoto por 
              profesionales de la salud.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="about-reveal flex flex-col gap-3"
                >
                  <f.icon className="w-6 h-6 text-tech-cyan" />
                  <h4 className="font-display text-lg font-semibold text-deep-navy">
                    {f.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Image & Specs */}
          <div className="flex flex-col gap-6">
            <img
              src="/about-sensors.jpg"
              alt="Diagrama de sensores biométricos"
              className="about-image w-full rounded-xl shadow-[0_20px_60px_rgba(2,28,64,0.15)]"
            />

            <div className="tech-specs-card bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-display text-base font-semibold text-deep-navy mb-4">
                Variables Fisiológicas Monitoreadas
              </h4>
              <ul className="space-y-2">
                {variables.map((v, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-tech-cyan flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
