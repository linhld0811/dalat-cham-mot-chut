'use strict';
(() => {
  const selectors = '.nav-pack, a.primary-btn, a.outline-btn, .closing a, #print-plan, .map-link, .source-link, .trip-strip > a';
  const arrowOnly = /^[↗→↑]$/u;
  const arrowEnd = /[↗→↑]\s*$/u;

  function makeIcon(upward) {
    const icon = document.createElement('span');
    icon.className = 'motion-icon';
    icon.setAttribute('aria-hidden', 'true');
    const path = upward ? 'M12 19V5m-6 6 6-6 6 6' : 'M6 18 18 6M6 6h12v12';
    // Both arrows stay inside the clipped circle throughout the diagonal swap.
    icon.innerHTML = `<svg class="motion-arrow motion-arrow-first" viewBox="0 0 24 24" focusable="false"><path d="${path}"/></svg><svg class="motion-arrow motion-arrow-copy" viewBox="0 0 24 24" focusable="false"><path d="${path}"/></svg>`;
    return icon;
  }

  function enhance(container) {
    container.querySelectorAll(selectors).forEach(action => {
      if (action.classList.contains('motion-action')) return;
      const icon = [...action.children].find(child =>
        (child.tagName.toLowerCase() === 'span' && arrowOnly.test(child.textContent.trim())) ||
        child.querySelector?.('use[href="#arrow"]')
      );
      const textNodes = [...action.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim());
      const text = textNodes.map(node => node.textContent).join(' ').replace(arrowEnd, '').trim();
      // Only enhance links that actually contain an arrow; reset and music controls stay intact.
      if (!icon && !textNodes.some(node => arrowEnd.test(node.textContent))) return;
      const upward = icon?.textContent.trim() === '↑';

      if (text && textNodes.length) {
        const label = document.createElement('span');
        label.className = 'motion-label';
        const original = document.createElement('span');
        original.className = 'motion-label-first';
        original.textContent = text;
        const duplicate = document.createElement('span');
        duplicate.className = 'motion-label-copy';
        duplicate.textContent = text;
        duplicate.setAttribute('aria-hidden', 'true');
        label.append(original, duplicate);
        textNodes[0].replaceWith(label);
        textNodes.slice(1).forEach(node => node.remove());
      }
      icon?.remove();
      action.append(makeIcon(upward));
      action.classList.add('motion-action');
      if (action.matches('.map-link, .source-link, #print-plan')) action.classList.add('motion-inline');
      // Touch feedback never delays the link's original click or navigation.
      action.addEventListener('pointerdown', event => {
        if (event.pointerType !== 'touch') return;
        action.classList.add('motion-touch');
      }, { passive: true });
      const release = () => action.classList.remove('motion-touch');
      action.addEventListener('pointerup', release, { passive: true });
      action.addEventListener('pointercancel', release, { passive: true });
      action.addEventListener('lostpointercapture', release);
      action.addEventListener('blur', release);
    });
  }

  enhance(document);
  const panel = document.getElementById('day-panel');
  // Day tabs replace their panel, so decorate newly rendered map links as well.
  new MutationObserver(() => enhance(panel)).observe(panel, { childList: true });
})();
