(() => {
  const BOOKING = "https://pridebarbershop.tilda.ws/";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const desktopStrip = window.matchMedia("(min-width: 860px)").matches;

  const counterEl = document.querySelector("[data-frame-counter]");
  const frames = Array.from(document.querySelectorAll("[data-frame]"));
  const totalFrames = frames.length || 5;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function setCounter(index) {
    if (!counterEl) return;
    const safe = Math.min(Math.max(index, 1), totalFrames);
    counterEl.textContent = pad(safe);
  }

  function updateCounterFromScroll() {
    if (!frames.length) return;
    const mid = window.innerHeight * 0.45;
    let best = 1;
    let bestDist = Infinity;
    frames.forEach((frame, i) => {
      const rect = frame.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i + 1;
      }
    });
    setCounter(best);
  }

  /* Soft CTA pulse — intentional motion #3 */
  function initCtaPulse() {
    if (reduceMotion || typeof gsap === "undefined") return;
    const ctas = document.querySelectorAll(".btn--cta, .dock__cta");
    gsap.fromTo(
      ctas,
      { boxShadow: "0 0 0 0 rgba(181, 106, 44, 0.4)" },
      {
        boxShadow: "0 0 0 10px rgba(181, 106, 44, 0)",
        duration: 1.9,
        repeat: -1,
        ease: "power1.out",
        stagger: 0.2,
      }
    );
  }

  function initFilmstrip() {
    const pin = document.querySelector("[data-filmstrip]");
    const track = document.querySelector("[data-filmstrip-track]");
    if (!pin || !track) return;

    if (reduceMotion || !desktopStrip || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      updateCounterFromScroll();
      window.addEventListener("scroll", updateCounterFromScroll, { passive: true });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const getScrollDistance = () => Math.max(track.scrollWidth - window.innerWidth + 48, 0);

    const tween = gsap.to(track, {
      x: () => -getScrollDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: pin,
        start: "top top+=56",
        end: () => `+=${getScrollDistance()}`,
        pin: true,
        scrub: 0.65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.min(totalFrames, Math.max(1, Math.round(progress * (totalFrames - 1)) + 1));
          setCounter(index);
        },
      },
    });

    /* Light parallax inside frame images — gate inside scrub */
    track.querySelectorAll(".frame__shell img").forEach((img) => {
      gsap.fromTo(
        img,
        { scale: 1.08, xPercent: -2 },
        {
          scale: 1,
          xPercent: 2,
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top+=56",
            end: () => `+=${getScrollDistance()}`,
            scrub: 0.8,
          },
        }
      );
    });

    window.addEventListener(
      "resize",
      () => {
        ScrollTrigger.refresh();
      },
      { passive: true }
    );

    return tween;
  }

  /* Reveal chapters lightly */
  function initReveals() {
    if (reduceMotion || typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".chapter, .course__inner").forEach((el) => {
      gsap.from(el, {
        opacity: 0.35,
        y: 28,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }

  document.querySelectorAll('a[href="' + BOOKING + '"]').forEach(() => {
    /* booking URLs already correct in markup */
  });

  setCounter(1);
  initFilmstrip();
  initReveals();
  initCtaPulse();
})();
