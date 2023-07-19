//scrollobserver


class AstroCustomPicture extends HTMLElement {
  constructor() {
    super();

    const alt = this.dataset.alt;

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add(
            alt === "aboutImage" ? "animate-fade-in-left" : "animate-fade-in"
          );
          observer.unobserve(target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0,
    });
    const element = document.getElementById(alt as string);
    element && observer.observe(element);
  }
}

customElements.define("astro-custom-picture", AstroCustomPicture);
