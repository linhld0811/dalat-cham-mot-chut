'use strict';
(() => {
  // Explicit UTC+7 keeps the departure moment identical in every visitor's timezone.
  const departure = Date.parse('2026-11-21T16:00:00+07:00');
  const countdown = document.getElementById('trip-countdown');
  const clock = document.getElementById('countdown-clock');
  const title = document.getElementById('countdown-title');
  const message = document.getElementById('countdown-message');
  const units = ['days', 'hours', 'minutes', 'seconds'];
  const labels = ['ngày', 'giờ', 'phút', 'giây'];
  const cells = units.map(unit => clock.querySelector(`[data-unit="${unit}"]`));
  let timeout;
  let initialized = false;
  let finished = false;
  cells.forEach(cell => cell.addEventListener('animationend', () => cell.classList.remove('tick')));

  function update() {
    clearTimeout(timeout);
    const remaining = Math.max(0, Math.ceil((departure - Date.now()) / 1000));
    const values = [Math.floor(remaining / 86400), Math.floor(remaining / 3600) % 24, Math.floor(remaining / 60) % 60, remaining % 60];
    values.forEach((value, index) => {
      const text = String(value).padStart(2, '0');
      if (cells[index].textContent === text) return;
      cells[index].textContent = text;
      if (initialized && remaining > 0) {
        cells[index].classList.remove('tick');
        void cells[index].offsetWidth;
        cells[index].classList.add('tick');
      }
    });
    clock.setAttribute('aria-label', values.map((value, index) => `${value} ${labels[index]}`).join(', '));
    if (remaining === 0) {
      if (!finished) {
        countdown.classList.add('is-departure-time');
        title.textContent = 'Đến giờ mình đi Đà Lạt rồi!';
        message.textContent = 'Nắm tay nhau, mình lên đường thôi!';
        finished = true;
      }
    } else {
      if (finished) {
        countdown.classList.remove('is-departure-time');
        title.textContent = 'Đà Lạt ơi, giữ hộ mình một cuộc hẹn.';
        message.textContent = '';
        finished = false;
      }
      if (!document.hidden) timeout = setTimeout(update, 1000 - (Date.now() % 1000));
    }
    initialized = true;
  }
  document.addEventListener('visibilitychange', update);
  window.addEventListener('pageshow', update);
  update();
})();
