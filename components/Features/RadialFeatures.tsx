"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import featuresData from "./featuresData";

const RadialFeatures = () => {
  const items = featuresData.map((f) => f.title).slice(0, 10);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [radiusPx, setRadiusPx] = useState<number>(150);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const compute = () => {
      const rect = el.getBoundingClientRect();
      const base = Math.min(rect.width, rect.height);
      const r = base * (base < 420 ? 0.32 : 0.34);
      setRadiusPx(Math.max(90, Math.round(r)));
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    window.addEventListener("orientationchange", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
      window.removeEventListener("orientationchange", compute);
    };
  }, []);

  return (
    <div className="wow fadeInUp mx-auto mb-16 max-w-5xl" data-wow-delay=".1s">
      <div ref={containerRef} className="relative mx-auto aspect-square w-full max-w-[360px] sm:max-w-[520px] md:max-w-[560px] lg:max-w-[640px]">
        {/* outer faint ring */}
        <div className="absolute inset-0 rounded-full border-8 border-[#E9ECF5] dark:border-white/10" />

        {/* rotating accent ring */}
        <div className="pointer-events-none absolute inset-6 -z-[1] rounded-full border border-primary/30" />
        <div
          className="pointer-events-none absolute inset-6 -z-[1] rounded-full border border-dashed border-primary/40 animate-spin"
          style={{ animationDuration: "24s" }}
        />
        <div
          className="pointer-events-none absolute inset-10 -z-[1] rounded-full border border-dashed border-indigo-400/30 animate-spin"
          style={{ animationDuration: "36s", animationDirection: "reverse" as any }}
        />

        {/* inner center with logo and title */}
        <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10 flex flex-col items-center justify-center text-center">
          <Image
            src="/images/logo/logo-2.webp"
            alt="DSchool"
            width={56}
            height={56}
            className="mb-2 h-12 w-12"
          />
        
          {/* glow */}
          <span className="pointer-events-none absolute inset-0 -z-[1] rounded-full bg-primary/10 blur-xl" />
        </div>

        {/* orbiting feature labels */}
        {items.map((title, index) => {
          const angle = (index / items.length) * 2 * Math.PI - Math.PI / 2; // start at top
          const x = Math.cos(angle) * radiusPx;
          const y = Math.sin(angle) * radiusPx;
          const delayMs = 60 * index;
          return (
            <div
              key={index}
              className="absolute z-[1] w-[148px] -translate-x-1/2 -translate-y-1/2 text-center transition-transform duration-300 hover:-translate-y-2"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
              }}
            >
              <span className="mx-auto mb-1 block h-2 w-2 rounded-full bg-primary shadow-[0_0_0_3px_rgba(74,108,247,0.15)]" />
              <div
                className="wow fadeInUp rounded-md border border-primary/30 bg-white/70 px-3 py-2 text-xs font-semibold text-gray-700 backdrop-blur transition-all duration-500 hover:shadow-lg dark:border-white/20 dark:bg-gray-900/70 dark:text-gray-200"
                data-wow-delay=".1s"
                style={{ transitionDelay: `${delayMs}ms` }}
              >
                {title}
              </div>
            </div>
          );
        })}

        {/* small arc accents + middle seam drift */}
        <svg className="pointer-events-none absolute inset-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="50" cy="50" r="48" stroke="#6C7CF7" strokeOpacity="0.25" strokeWidth="1" fill="none" strokeDasharray="6 6" />
          <circle cx="50" cy="50" r="46" stroke="#8EA1FF" strokeWidth="1.5" fill="none" strokeDasharray="12 18" className="seam-drift" />
        </svg>
      </div>

      {/* captions ring labels */}
     
    </div>
  );
};

export default RadialFeatures;


