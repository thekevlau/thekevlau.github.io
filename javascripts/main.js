/* Hi! :) */
console.log("Hey there. Welcome to my site. Hope you're having a good day.");

(function () {
  'use strict';

  // ---- theme toggle ----
  // States: 'auto' (follow system), 'light', 'dark'.
  // Persisted in localStorage as 'theme'.
  const root = document.documentElement;
  const STORE_KEY = 'theme';

  function applyTheme(value) {
    if (value === 'light' || value === 'dark') {
      root.setAttribute('data-theme', value);
    } else {
      root.removeAttribute('data-theme');
    }
    document.querySelectorAll('.theme-toggle button').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.theme === value ? 'true' : 'false');
    });
  }

  function readTheme() {
    try {
      const v = localStorage.getItem(STORE_KEY);
      return v === 'light' || v === 'dark' || v === 'auto' ? v : 'auto';
    } catch (_) {
      return 'auto';
    }
  }

  function saveTheme(value) {
    try {
      localStorage.setItem(STORE_KEY, value);
    } catch (_) { /* localStorage may be blocked */ }
  }

  // Initial paint: apply persisted theme before user can see the page.
  applyTheme(readTheme());

  document.querySelectorAll('.theme-toggle button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = btn.dataset.theme;
      saveTheme(next);
      applyTheme(next);
    });
  });

  // ---- click-to-copy email ----
  document.querySelectorAll('a.email').forEach((link) => {
    link.addEventListener('click', (ev) => {
      const href = link.getAttribute('href') || '';
      const addr = href.replace(/^mailto:/, '');
      if (!addr || !navigator.clipboard) return; // fall through to default mailto
      ev.preventDefault();
      navigator.clipboard.writeText(addr).then(
        () => {
          link.classList.remove('copied');
          // force reflow so the animation restarts on rapid clicks
          // eslint-disable-next-line no-unused-expressions
          void link.offsetWidth;
          link.classList.add('copied');
          setTimeout(() => link.classList.remove('copied'), 1300);
        },
        () => {
          // clipboard failed: fall back to opening mailto
          window.location.href = href;
        }
      );
    });
  });
})();
