//scrollobserver

class AstrofloorCard extends HTMLElement {
  constructor() {
    super();

    const title = this.dataset.title;

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add(
            title === "Counter"
              ? "animate-fade-in-left"
              : "animate-fade-in-right"
          );
          observer.unobserve(target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
    });
    const element = document.getElementById(title as string);
    element && observer.observe(element);
  }
}

customElements.define("astro-floor-card", AstrofloorCard);
