/* Hi! :) */
console.log("Hey there. Welcome to my site. Hope you're having a good day.");

(function () {
  'use strict';

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
