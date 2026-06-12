import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Award } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Activity {
  id: string;
  title: string;
  desc: string;
  start: string;
  end: string;
  weight: number;
}

interface ComponenteData {
  number: string;
  title: string;
  description: string;
  weight: number;
  activities: Activity[];
}

const componentesData: ComponenteData[] = [
  {
    number: '01',
    title: 'Identificación y Selección de Sensores Portátiles',
    description:
      'Identificar y seleccionar al menos tres sensores portátiles (wearables) capaces de medir variables fisiológicas correlacionadas con la ansiedad (ej. frecuencia cardíaca, variabilidad de la frecuencia cardíaca, respiración, etc.).',
    weight: 15,
    activities: [
      {
        id: '1.1',
        title: 'Actividad 1.1',
        desc: 'Análisis y criterios de selección de los sensores (precisión (30%), facilidad de integración (25%), consumo de energía (20%), costo (15%), comodidad (10%)) y materiales para el desarrollo del prototipo.',
        start: '03/07/2025',
        end: '01/09/2025',
        weight: 5,
      },
      {
        id: '1.2',
        title: 'Actividad 1.2',
        desc: 'Revisión, análisis y selección de sensores que midan frecuencia cardíaca, temperatura periférica y frecuencia respiratoria; además de la calibración de los sensores y técnicas de descarga de tráfico adaptativas.',
        start: '03/07/2025',
        end: '01/08/2025',
        weight: 5,
      },
      {
        id: '1.3',
        title: 'Actividad 1.3',
        desc: 'Desarrollo de la página Web del proyecto.',
        start: '01/08/2025',
        end: '01/09/2025',
        weight: 3,
      },
      {
        id: '1.4',
        title: 'Actividad 1.4',
        desc: 'Definición de lenguajes y herramientas de programación que se utilizará para empezar el desarrollo del sistema Fog-Computing-IoMT-Deep Learning (FID-Learning).',
        start: '01/08/2025',
        end: '01/09/2025',
        weight: 2,
      },
    ],
  },
  {
    number: '02',
    title: 'Configuración del Entorno Fog Computing',
    description:
      'Configurar un entorno de Fog Computing utilizando un dispositivo de borde (ej. Raspberry Pi) para el preprocesamiento de datos.',
    weight: 25,
    activities: [
      {
        id: '2.1',
        title: 'Actividad 2.1',
        desc: 'Configuración del entorno Fog para el sistema FID-Learning y eficiencia energética para el módulo FID-Learning.',
        start: '02/09/2025',
        end: '04/12/2025',
        weight: 25,
      },
    ],
  },
  {
    number: '03',
    title: 'Algoritmos de Deep Learning para Detección de Ansiedad',
    description:
      'Desarrollar e implementar algoritmos de Deep Learning para la detección de niveles de ansiedad basados en los datos procesados en la capa Fog.',
    weight: 25,
    activities: [
      {
        id: '3.1',
        title: 'Actividad 3.1',
        desc: 'Desarrollo de algoritmos de Deep Learning para la detección de niveles de ansiedad en los datos procesados en la capa Fog.',
        start: '05/12/2025',
        end: '06/03/2026',
        weight: 25,
      },
    ],
  },
  {
    number: '04',
    title: 'Integración del Prototipo FID-Learning',
    description:
      'Integrar todos los componentes del prototipo en un sistema llamado Fog-Computing-IoMT-Deep Learning (FID-Learning).',
    weight: 30,
    activities: [
      {
        id: '4.1',
        title: 'Actividad 4.1',
        desc: 'Integración de los componentes del prototipo FID-Learning y su convergencia.',
        start: '07/03/2026',
        end: '01/11/2026',
        weight: 30,
      },
    ],
  },
  {
    number: '05',
    title: 'Evaluación del Rendimiento del Prototipo',
    description:
      'Evaluar el rendimiento del prototipo en términos de latencia, consumo de energía y precisión de la detección.',
    weight: 5,
    activities: [
      {
        id: '5.1',
        title: 'Actividad 5.1',
        desc: 'Evaluar el sistema FID-Learning.',
        start: '02/11/2026',
        end: '01/01/2027',
        weight: 5,
      },
    ],
  },
];

export default function Componentes() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from('.comp-header', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.comp-header',
          start: 'top 85%',
          once: true,
        },
      });

      // Timeline items animation
      gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          x: i % 2 === 0 ? 30 : -30,
          duration: 0.8,
          delay: i * 0.1,
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
      id="componentes"
      ref={sectionRef}
      className="bg-deep-navy py-24 md:py-[120px] border-t border-pale-blue/5"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-20">
        {/* Section Header */}
        <div className="comp-header section-header mb-16 text-center">
          <span className="acronym">Estructura del Proyecto</span>
          <div className="divider" />
          <h2 className="text-white">Componentes y Etapas de Desarrollo</h2>
          <p className="text-ice-white/70 max-w-3xl mx-auto">
            Planificación de los cinco componentes interdependientes que estructuran el desarrollo del prototipo FID-Learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-pale-blue/20" />

          <div className="space-y-12 md:space-y-16">
            {componentesData.map((comp, idx) => (
              <div
                key={comp.number}
                className={`timeline-item relative flex flex-col md:flex-row gap-6 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number indicator */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-tech-cyan bg-deep-navy flex items-center justify-center shadow-[0_0_12px_rgba(78,205,196,0.3)]">
                    <span className="font-display text-lg font-bold text-tech-cyan">
                      {comp.number}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[45%] ${
                    idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="bg-ice-white/5 border border-pale-blue/10 rounded-xl p-6 md:p-8 hover:border-tech-cyan/30 hover:bg-tech-cyan/5 transition-all duration-300 shadow-[0_8px_32px_rgba(2,28,64,0.2)]">
                    {/* Weight & Header */}
                    <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                      <span className="font-mono text-xs text-tech-cyan bg-tech-cyan/10 border border-tech-cyan/20 rounded px-2.5 py-1">
                        Ponderación: {comp.weight}%
                      </span>
                    </div>

                    <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-3 leading-snug">
                      {comp.title}
                    </h3>

                    <p className="text-sm md:text-base text-ice-white/70 leading-relaxed mb-6">
                      {comp.description}
                    </p>

                    {/* Activities list */}
                    <div className="space-y-4">
                      <h4 className="font-display text-xs font-semibold text-pale-blue/60 uppercase tracking-widest">
                        Actividades
                      </h4>
                      {comp.activities.map((act) => (
                        <div
                          key={act.id}
                          className="bg-deep-navy/60 border border-pale-blue/10 rounded-lg p-4 hover:border-pale-blue/20 transition-all"
                        >
                          <span className="font-display text-sm font-semibold text-tech-cyan block mb-1">
                            {act.title}
                          </span>
                          <p className="text-sm text-ice-white/70 leading-relaxed mb-3">
                            {act.desc}
                          </p>
                          <div className="flex flex-wrap gap-3 text-xs font-mono">
                            <div className="flex items-center gap-1.5 text-pale-blue/60 bg-deep-navy/80 border border-pale-blue/5 px-2 py-0.5 rounded">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{act.start} – {act.end}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-pale-blue/80 bg-deep-navy/80 border border-pale-blue/5 px-2 py-0.5 rounded">
                              <Award className="w-3.5 h-3.5 text-tech-cyan" />
                              <span>{act.weight}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
