"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollReveal = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const revealClass = "revealed";
    const selector = ".wow";

    const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));

    const onIntersect: IntersectionObserverCallback = (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add(revealClass);
          observer.unobserve(entry.target);
        }
      }
    };

    const observer = new IntersectionObserver(onIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    });

    const revealIfInView = (el: Element) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        el.classList.add(revealClass);
        return true;
      }
      return false;
    };

    elements.forEach((el) => {
      // Immediately reveal anything already in view on load (no scroll required)
      if (!revealIfInView(el)) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollReveal;


