(() => {
  const slides = [...document.querySelectorAll('.slide')];
  const total = slides.length;
  const $ = (id) => document.getElementById(id);
  const prev = $('prev'), next = $('next'), bar = $('progressBar'), controls = document.querySelector('.controls');
  const fsBtn = $('fsBtn');
  const thumb = new URLSearchParams(location.search).has('thumb'); // embedded preview used by guide.html
  if (thumb) document.documentElement.classList.add('thumb');
  const pad = (n) => String(n).padStart(2, '0');
  let index = 0;

  const load = (i) => slides[i]?.querySelectorAll('img[data-src]').forEach((img) => {
    img.src = img.dataset.src; img.removeAttribute('data-src');
  });

  function go(i, { updateHash = true } = {}) {
    index = Math.max(0, Math.min(total - 1, i));
    slides.forEach((s, k) => {
      s.classList.toggle('active', k === index);
      s.toggleAttribute('inert', k !== index);
      s.setAttribute('aria-hidden', k === index ? 'false' : 'true');
    });
    load(index); if (!thumb) { load(index + 1); load(index - 1); }
    $('cur').textContent = pad(index + 1);
    $('tot').textContent = pad(total);
    bar.style.width = ((index + 1) / total) * 100 + '%';
    prev.disabled = index === 0;
    next.disabled = index === total - 1;
    if (updateHash && !thumb) history.replaceState(null, '', '#' + (index + 1));
    if (!thumb) document.title = 'ネパールの地形、自然災害、旅行 — ' + pad(index + 1) + '/' + pad(total);
  }

  const toggleFs = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  };

  prev.onclick = () => go(index - 1);
  next.onclick = () => go(index + 1);
  fsBtn.onclick = toggleFs;
  if (!document.documentElement.requestFullscreen) fsBtn.hidden = true;

  if (!thumb) document.addEventListener('keydown', (e) => {
    if (e.altKey || e.ctrlKey || e.metaKey) return;
    switch (e.key) {
      case 'ArrowRight': case 'PageDown': case ' ':
        if (e.target.closest?.('button') && e.key === ' ') return; // let focused buttons activate
        e.preventDefault(); go(index + 1); break;
      case 'ArrowLeft': case 'PageUp': e.preventDefault(); go(index - 1); break;
      case 'Home': e.preventDefault(); go(0); break;
      case 'End': e.preventDefault(); go(total - 1); break;
      case 'g': case 'G': window.open('guide.html', '_blank', 'noopener'); break;
      case 'f': case 'F': toggleFs(); break;
    }
  });

  // swipe
  let sx = null, sy = 0;
  if (!thumb) document.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  if (!thumb) document.addEventListener('touchend', (e) => {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
    sx = null;
  }, { passive: true });

  // hide controls when idle (always on pointer devices once the mouse stops)
  let idleTimer;
  const wake = () => {
    controls.classList.remove('hidden'); document.body.classList.remove('idle');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(() => {
      if (controls.contains(document.activeElement) && document.activeElement.matches(':focus-visible')) return;
      controls.classList.add('hidden'); document.body.classList.add('idle');
    }, 3500);
  };
  if (!thumb) ['mousemove', 'pointerdown', 'keydown', 'touchstart'].forEach((ev) => document.addEventListener(ev, wake, { passive: true }));

  window.addEventListener('hashchange', () => go((parseInt(location.hash.slice(1), 10) || 1) - 1, { updateHash: false }));

  go((parseInt(location.hash.slice(1), 10) || 1) - 1, { updateHash: false });
  if (!thumb) wake();
})();
