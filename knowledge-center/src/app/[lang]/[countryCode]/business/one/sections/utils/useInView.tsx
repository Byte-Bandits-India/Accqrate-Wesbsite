import { useState, useEffect, RefObject } from "react";

export default function useInView(
  ref: RefObject<Element | null>,
  options: IntersectionObserverInit = { threshold: 0.3 }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target); // stop observing once visible
      }
    }, options);

    observer.observe(current);

    return () => {
      observer.unobserve(current);
    };
  }, [ref, options]);

  return isVisible;
}
