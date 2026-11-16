(() => {
  const track = document.querySelector('.opening-track');
  if (!track) return;
  const stage = track.querySelector('.opening-stage');
  const header = document.getElementById('site-header');
  const card = track.querySelector('.opening-postcard');
  const left = track.querySelector('.opening-curtain-left');
  const right = track.querySelector('.opening-curtain-right');
  const titleLeft = track.querySelector('.opening-title-left');
  const titleRight = track.querySelector('.opening-title-right');
  const kicker = track.querySelector('.opening-kicker');
  const bottom = track.querySelector('.opening-bottom');
  const scrollHint = track.querySelector('.opening-scroll');
  const coordinate = track.querySelector('.opening-coordinate');
  const reveal = track.querySelector('.opening-reveal');
  const landscape = track.querySelector('.opening-landscape > img');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = value => Math.max(0, Math.min(1, value));
  const smooth = value => { const p = clamp(value); return p * p * (3 - 2 * p); };
  const fade = (element, opacity) => {
    element.style.opacity = opacity;
    element.style.visibility = opacity <= 0 ? 'hidden' : 'visible';
    // Invisible links must also leave the keyboard navigation order.
    element.inert = opacity < .15;
  };
  let frame = 0;
  function render() {
    frame = 0;
    const animated = !reduceMotion.matches;
    const rect = track.getBoundingClientRect();
    const range = Math.max(1, track.offsetHeight - stage.offsetHeight);
    const p = animated ? clamp(-rect.top / range) : 0;
    const open = smooth((p - .14) / .62);
    const firstFade = 1 - smooth(p / .34);
    const cardFade = 1 - smooth((p - .10) / .34);
    const revealFade = smooth((p - .39) / .35);
    left.style.transform = `translate3d(${-101 * open}%,0,0)`;
    right.style.transform = `translate3d(${101 * open}%,0,0)`;
    titleLeft.style.translate = `${-stage.clientWidth * open * .65}px 0`;
    titleRight.style.translate = `${stage.clientWidth * open * .65}px 0`;
    fade(titleLeft, firstFade); fade(titleRight, firstFade);
    fade(kicker, firstFade); fade(bottom, firstFade); fade(coordinate, firstFade);
    fade(scrollHint, 1 - smooth(p / .25));
    card.style.transform = `translate(-50%,-50%) rotate(${-3 + 12 * open}deg) scale(${1 + .35 * open})`;
    fade(card, cardFade);
    landscape.style.transform = `scale(${1.12 - .12 * open})`;
    reveal.style.transform = `translateY(${30 * (1 - revealFade)}px)`;
    fade(reveal, revealFade);
    header.classList.toggle('opening-over-photo', animated && p > .68 && rect.bottom > stage.offsetHeight * .6);
    header.classList.toggle('opening-in-transition', animated && p > .01 && p <= .68);
    // Keep the header clear while the opening is pinned, then use its normal surface.
    header.classList.toggle('scrolled', window.scrollY > 35 && rect.bottom <= stage.offsetHeight);
  }
  function requestRender() { if (!frame) frame = requestAnimationFrame(render); }
  function configure() {
    document.documentElement.classList.toggle('has-opening-motion', !reduceMotion.matches);
    requestRender();
  }
  window.addEventListener('scroll', requestRender, { passive: true });
  window.addEventListener('resize', requestRender, { passive: true });
  window.addEventListener('pageshow', requestRender);
  reduceMotion.addEventListener('change', configure);
  configure();
})();
