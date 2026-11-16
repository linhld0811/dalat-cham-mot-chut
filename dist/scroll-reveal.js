(() => {
  if (!('IntersectionObserver' in window)) return;
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const registered = new WeakSet();
  const pending = new Set();
  let observer;
  let printing = false;

  function show(element, immediate = false) {
    if (immediate) element.classList.add('reveal-immediate');
    element.classList.add('is-revealed');
    pending.delete(element);
    observer?.unobserve(element);
  }

  function register(element, variant = 'up', delay = 0) {
    if (registered.has(element)) return;
    registered.add(element);
    element.dataset.reveal = variant;
    element.style.setProperty('--reveal-delay', `${delay}ms`);
    element.classList.add('scroll-reveal');
    if (!observer || printing || reducedMotion.matches) {
      show(element, true);
      return;
    }
    // A restored page or a direct anchor may have already passed some content.
    if (element.getBoundingClientRect().bottom < 0) {
      show(element, true);
      return;
    }
    pending.add(element);
    observer.observe(element);
  }

  function group(selector, variant = 'up', step = 70, scope = document) {
    scope.querySelectorAll(selector).forEach((element, index) => {
      register(element, element.matches('h2') ? 'title' : variant, Math.min(index, 3) * step);
    });
  }

  function registerDay() {
    pending.forEach(element => {
      if (!element.isConnected) { observer?.unobserve(element); pending.delete(element); }
    });
    const panel = document.getElementById('day-panel');
    if (!panel) return;
    group('.day-intro', 'up', 0, panel);
    group('.timeline-item', 'up', 45, panel);
  }

  function registerPage() {
    group('.trip-strip > *', 'up', 75);
    document.querySelectorAll('.section-heading > div').forEach(heading => group(':scope > *', 'up', 90, heading));
    group('.small-stamp, .heading-plane, .heading-bag', 'up', 0);
    group('.day-tabs > button', 'up', 65);
    registerDay();
    group('.aside-photo', 'image', 0);
    group('.aside-note, .section-footnote', 'up', 0);
    group('.countdown-copy > *', 'up', 65);
    group('.countdown-unit', 'up', 65);
    group('.journey-intro > .eyebrow, .journey-intro > div > p, .intro-detail', 'up', 85);
    document.querySelectorAll('.boarding-pass').forEach((element, index) => register(element, index ? 'right' : 'left', index * 100));
    group('.travel-reminder', 'up', 0);
    group('.stay-art', 'image', 0);
    group('.stay-copy > .eyebrow, .stay-copy > h2, .stay-copy > p', 'up', 85);
    group('.stay-details > div, .stay-contact, .stay-copy > a', 'up', 65);
    group('.packing-status', 'up', 0);
    document.querySelectorAll('.pack-group').forEach(section => {
      group(':scope > h3, :scope > p, :scope > .check-row', 'up', 40, section);
    });
    group('.pack-actions, .last-note', 'up', 65);
    group('.closing > svg, .closing > h2, .closing > p, .closing > a', 'up', 100);
  }

  function configure() {
    observer?.disconnect();
    if (reducedMotion.matches || printing) {
      pending.forEach(element => show(element, true));
      root.classList.remove('has-scroll-reveal');
      return;
    }
    observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) show(entry.target);
        else if (entry.boundingClientRect.bottom < 0) show(entry.target, true);
      }
    }, { rootMargin: '0px 0px -48px 0px', threshold: .04 });
    root.classList.add('has-scroll-reveal');
    registerPage();
    pending.forEach(element => observer.observe(element));
  }

  // Reveal focused controls immediately without altering their tab order or semantics.
  document.addEventListener('focusin', event => {
    const element = event.target.closest('.scroll-reveal');
    if (element) show(element, true);
  });
  window.addEventListener('beforeprint', () => { printing = true; configure(); });
  window.addEventListener('afterprint', () => { printing = false; configure(); });
  reducedMotion.addEventListener('change', configure);

  try {
    configure();
    const panel = document.getElementById('day-panel');
    if (panel) {
      new MutationObserver(() => {
        // Only replacement of a day panel needs new entrances; arrow helpers
        // modify descendants without restarting the section animation.
        if (!printing && !reducedMotion.matches) registerDay();
      }).observe(panel, { childList: true });
    }
  } catch {
    // Animation failure must never prevent someone from reading their itinerary.
    observer?.disconnect();
    root.classList.remove('has-scroll-reveal');
  }
})();
