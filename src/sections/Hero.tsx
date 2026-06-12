import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const metaRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to(badgeRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(metaRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
        .to(imageRef.current, { opacity: 1, scale: 1, duration: 1 }, '-=0.8');

      gsap.to(imageRef.current, {
        y: 8,
        duration: 4,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-[100dvh] bg-deep-navy flex items-center overflow-hidden"
    >
      {/* Geometric SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id="hex-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <polygon
              points="30,2 58,16 58,44 30,58 2,44 2,16"
              fill="none"
              stroke="#B8D4E3"
              strokeWidth="0.5"
              opacity="0.12"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
        <polygon points="80,10 120,30 100,70 60,50" fill="none" stroke="#B8D4E3" strokeWidth="0.5" opacity="0.08" />
        <polygon points="70,60 90,50 100,80 80,90" fill="none" stroke="#B8D4E3" strokeWidth="0.5" opacity="0.08" />
        <polygon points="10,20 30,10 40,40 20,50" fill="none" stroke="#B8D4E3" strokeWidth="0.5" opacity="0.08" />
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-20 pt-[160px] pb-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 max-w-[640px]">
            <div
              ref={badgeRef}
              className="inline-block opacity-0 translate-y-[-10px] mb-6"
            >
              <span className="font-mono text-xs tracking-[3px] text-tech-cyan border border-tech-cyan/30 rounded px-4 py-1.5 uppercase">
                Prototipo de Investigación
              </span>
            </div>

            <h1
              ref={titleRef}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 opacity-0 translate-y-5"
            >
              FID-Learning
            </h1>

            <p
              ref={subtitleRef}
              className="font-display text-lg md:text-2xl font-normal text-pale-blue tracking-wide mb-6 opacity-0 translate-y-5"
            >
              Fog-Computing-IoMT-Deep Learning
            </p>

            <p
              ref={descRef}
              className="text-base md:text-lg text-ice-white/80 leading-relaxed mb-8 opacity-0 translate-y-5"
            >
              Sistema inteligente de monitoreo en tiempo real de los niveles de ansiedad, 
              que integra sensores portátiles, computación en borde y algoritmos de Deep 
              Learning para la detección predictiva y precisa.
            </p>

            <a
              ref={ctaRef}
              href="#about"
              onClick={(e) => handleClick(e, '#about')}
              className="inline-block bg-tech-cyan text-deep-navy font-body font-semibold text-base rounded-md px-8 py-3.5 hover:bg-[#3DBDB5] hover:-translate-y-0.5 transition-all duration-300 opacity-0 translate-y-5"
            >
              Conocer el Proyecto
            </a>

            <p
              ref={metaRef}
              className="mt-6 text-sm text-pale-blue opacity-0 translate-y-5"
            >
              Julio 2025 – Enero 2027 | 5 Componentes | 4 Investigadores
            </p>
          </div>

          {/* Hero image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              ref={imageRef}
              src="/hero-wearable.jpg"
              alt="Dispositivo wearable AURA"
              className="w-full max-w-[480px] rounded-xl opacity-0 scale-95"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
