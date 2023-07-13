//scrollobserver

export const scrollobserver = (dom: string, animation: string) => {
  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;

        target.classList.add(animation);
        observer.unobserve(target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    threshold: 0,
  });
  const elements = document.querySelectorAll(dom);
  elements.forEach((element) => {
    element && observer.observe(element);
  });
};
