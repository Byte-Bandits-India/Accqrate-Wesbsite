import { useState, useEffect } from "react";

export default function useInView(ref, options = { threshold: 0.3 }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // stop observing after visible once
        }
      },
      options
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
}
