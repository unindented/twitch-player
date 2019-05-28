import { useEffect } from "react";

const useIntersectionObserverFocus = () => {
  const intersectionObserver = new IntersectionObserver(
    entries => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        entry.target.focus();
        intersectionObserver.unobserve(entry.target);
      }
    },
    { threshold: 1.0 }
  );

  useEffect(() => {
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return intersectionObserver;
};

export default useIntersectionObserverFocus;
